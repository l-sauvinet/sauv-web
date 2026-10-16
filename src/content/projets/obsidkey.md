---
title: ObsidKey
summary: Gestionnaire de mots de passe zero-knowledge, avec application web, extension navigateur et back-office.
category: Application web · Sécurité
status: En ligne
year: 2026
order: 1
featured: true
logo: ../../assets/projets/obsidkey-logo.svg
color: "#a78bfa"
stack: [Vue 3, TypeScript, Tailwind CSS, Firebase, Web Crypto API, Argon2id]
demo: https://obsidkey.sauv-web.fr
demoLabel: Ouvrir ObsidKey
access: Accès sur demande, contactez-moi pour obtenir un compte.
# TODO: ajouter une capture d'écran (src/assets/projets/obsidkey.png) puis décommenter :
# cover: ../../assets/projets/obsidkey.png
# coverAlt: Coffre ObsidKey affichant la liste des mots de passe
# repo: https://github.com/TODO/obsidkey
---

ObsidKey est en ligne sur [obsidkey.sauv-web.fr](https://obsidkey.sauv-web.fr). Les comptes sont créés sur demande : [contactez-moi](/contact/) pour en obtenir un.

## Le besoin

Stocker ses mots de passe dans un service en ligne pose une question simple : qui d'autre peut les lire ? ObsidKey répond « personne », pas même le serveur.

## Ce que j'ai construit

- **Une application web** (Vue 3, TypeScript) pour gérer ses coffres, dossiers et mots de passe.
- **Une extension Chrome/Edge** autonome qui retrouve les identifiants du site ouvert, sans injecter de code dans les pages.
- **Un back-office local** pour administrer les comptes, isolé d'Internet.

## Les choix techniques

- **Zero-knowledge** : le mot de passe maître ne quitte jamais le navigateur. Il sert à la fois à s'authentifier (via un hash) et à dériver la clé qui chiffre le coffre. Une fuite de l'un ne compromet pas l'autre.
- **Chiffrement AES-256-GCM** via la Web Crypto API native du navigateur, avec un vecteur unique à chaque chiffrement.
- **Dérivation de clé Argon2id**, résistante aux attaques par carte graphique.
- **Firebase** ne stocke que des blobs chiffrés, protégés par des règles d'accès strictes.
- La clé de chiffrement n'est **jamais enregistrée** : elle disparaît à la fermeture de l'onglet ou au verrouillage.
