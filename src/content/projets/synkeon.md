---
title: Synkeon
summary: Logiciel de gestion gratuit pour indépendants et petites entreprises, avec devis, factures, clients, agenda et tableau de bord au même endroit.
category: Application web · Gestion
status: En ligne
year: 2026
order: 3
featured: true
logo: ../../assets/projets/synkeon-logo.svg
color: "#2bb3a3"
stack: [Laravel 13, Vue 3, Inertia, TypeScript, Tailwind CSS, MySQL, MCP]
demo: https://synkeon.sauv-web.fr
demoLabel: Ouvrir Synkeon
access: Gratuit, inscription libre en quelques minutes.
---

Synkeon est en ligne sur [synkeon.sauv-web.fr](https://synkeon.sauv-web.fr). L'inscription est gratuite et ouverte à tous : un compte correspond à une entreprise, et on peut y inviter ses collaborateurs.

## Le besoin

Un indépendant qui se lance jongle souvent entre un modèle de facture sous Word, un agenda, un fichier clients et un tableur pour suivre son chiffre d'affaires. Synkeon réunit tout au même endroit, avec des explications claires pour ceux qui découvrent la gestion d'une entreprise (devis, avoir, acompte, franchise de TVA…).

## Ce que j'ai construit

- **Devis et factures** conformes : numérotation chronologique, avoirs, acomptes, paiements partiels, factures récurrentes et PDF au format **Factur-X**, avec plusieurs modèles personnalisables.
- **Lien de devis public** : le client consulte et accepte son devis en ligne.
- **Fiches clients** avec remplissage automatique à partir du numéro SIREN.
- **Agenda** jour, semaine et mois, avec rappels par notification, événements récurrents, couleurs et abonnement depuis Google Agenda ou Outlook.
- **Tableau de bord** : chiffre d'affaires, montants à déclarer à l'URSSAF et suivi des seuils de la micro-entreprise.
- **Livre des recettes** et exports annuels prêts à transmettre.
- **Imports** des clients, devis et factures existants depuis un fichier CSV ou PDF.
- **Assistant IA** : Synkeon se connecte à Claude ou ChatGPT, qui peuvent consulter l'activité et préparer des brouillons. L'utilisateur garde toujours la main pour valider et envoyer.
- **Application installable** sur ordinateur et téléphone.

## Les choix techniques

- **Laravel 13, Inertia et Vue 3** pour une application rapide, avec une seule base de code côté serveur et côté interface.
- **Factures infalsifiables** : une fois émise, chaque facture est scellée et chaînée à la précédente, et la base de données refuse toute modification.
- **Multi-entreprise** : les données de chaque entreprise sont cloisonnées, et des tests vérifient chaque page pour qu'aucune entreprise ne puisse voir celles d'une autre.
- **Connecteur IA au standard MCP**, avec une autorisation OAuth et un journal de chaque action effectuée par l'assistant.
- **Déploiement automatique** : chaque mise à jour passe plus de 250 tests avant d'être mise en ligne.
