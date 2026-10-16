<?php

declare(strict_types=1);

const RECIPIENT = 'sauv.web@gmail.com';
const SENDER = 'contact@sauv-web.fr';
const MAX_PER_HOUR = 5;
const MIN_SECONDS_TO_FILL = 3;

function wantsJson(): bool
{
    return str_contains($_SERVER['HTTP_ACCEPT'] ?? '', 'application/json');
}

function respond(int $status, bool $ok, string $error = ''): never
{
    http_response_code($status);
    if (wantsJson()) {
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode($ok ? ['ok' => true] : ['ok' => false, 'error' => $error], JSON_UNESCAPED_UNICODE);
        exit;
    }
    header('Location: ' . ($ok ? '/contact/merci/' : '/contact/?erreur=' . rawurlencode($error)), true, 303);
    exit;
}

function field(string $name, int $maxLength): string
{
    $value = trim((string) ($_POST[$name] ?? ''));
    return mb_substr($value, 0, $maxLength);
}

function singleLine(string $value): string
{
    return trim(preg_replace('/[\r\n\t]+/', ' ', $value) ?? '');
}

function isRateLimited(string $ip): bool
{
    $file = sys_get_temp_dir() . '/sauvweb_contact_' . hash('sha256', $ip);
    $now = time();
    $hits = is_file($file) ? array_filter(
        array_map('intval', explode(',', (string) file_get_contents($file))),
        static fn (int $hit): bool => $hit > $now - 3600,
    ) : [];
    if (count($hits) >= MAX_PER_HOUR) {
        return true;
    }
    $hits[] = $now;
    file_put_contents($file, implode(',', $hits), LOCK_EX);
    return false;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    respond(405, false, 'Méthode non autorisée');
}

if (field('site_web', 200) !== '') {
    respond(200, true);
}

$startedAt = (int) field('ts', 20);
if ($startedAt > 0 && time() - $startedAt < MIN_SECONDS_TO_FILL) {
    respond(200, true);
}

$name = singleLine(field('nom', 100));
$email = singleLine(field('email', 150));
$company = singleLine(field('entreprise', 120));
$type = singleLine(field('type', 80));
$budget = singleLine(field('budget', 80));
$message = field('message', 5000);

if ($name === '' || $message === '' || mb_strlen($message) < 20) {
    respond(422, false, 'Merci de renseigner votre nom et de décrire votre projet en quelques lignes');
}

if (filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
    respond(422, false, 'Adresse email invalide');
}

if (isRateLimited($_SERVER['REMOTE_ADDR'] ?? 'inconnu')) {
    respond(429, false, 'Trop de messages envoyés, réessayez dans une heure');
}

$subject = mb_encode_mimeheader("Demande de devis : {$type} ({$name})", 'UTF-8', 'B');
$body = implode("\n", [
    "Nom : {$name}",
    "Email : {$email}",
    'Entreprise : ' . ($company !== '' ? $company : '-'),
    "Type de projet : {$type}",
    "Budget : {$budget}",
    '',
    $message,
    '',
    '--',
    'Envoyé depuis le formulaire de sauv-web.fr',
]);

$headers = implode("\r\n", [
    'From: ' . mb_encode_mimeheader("Site Sauv'Web", 'UTF-8', 'B') . ' <' . SENDER . '>',
    "Reply-To: {$email}",
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
]);

if (!mail(RECIPIENT, $subject, $body, $headers, '-f' . SENDER)) {
    respond(500, false, "Le message n'a pas pu être envoyé");
}

respond(200, true);
