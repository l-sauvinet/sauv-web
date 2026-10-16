---
title: Axiora
summary: Outil de gestion pour indépendants et petites structures, avec clients, agenda, trésorerie et tableau de bord dans une seule interface.
category: Application web · Gestion
status: En ligne
year: 2026
order: 3
featured: true
logo: ../../assets/projets/axiora-logo.svg
color: "#2fa395"
stack: [Vue 3, Pinia, Tailwind CSS, Firebase, Cloud Functions, EmailJS]
demo: https://axiora-73.web.app
demoLabel: Ouvrir Axiora
access: Accès sur demande, contactez-moi pour obtenir un compte.
repo: https://github.com/l-sauvinet/Axiora
# TODO: ajouter une capture d'écran (src/assets/projets/axiora.png) puis décommenter :
# cover: ../../assets/projets/axiora.png
# coverAlt: Tableau de bord Axiora avec les rendez-vous et la trésorerie
---

Axiora est en ligne sur [axiora-73.web.app](https://axiora-73.web.app). Les comptes sont créés sur demande : [contactez-moi](/contact/) pour en obtenir un.

## Le besoin

Un indépendant ou une petite structure jongle souvent entre un fichier clients, un agenda et un tableur pour les comptes. Axiora réunit tout au même endroit, sans la complexité d'un logiciel de gestion classique.

## Ce que j'ai construit

- **Fiches clients** : création, modification et suivi des échanges.
- **Agenda** : un calendrier à la semaine pour organiser les rendez-vous et les relier aux clients, avec des rappels.
- **Trésorerie** : suivi des entrées et sorties d'argent, avec l'historique des transactions.
- **Tableau de bord** : une vue d'ensemble de l'activité avec les indicateurs clés.
- **Espace administrateur** pour gérer les comptes utilisateurs.

## Les choix techniques

- **Vue 3 et Pinia** pour une interface rapide et réactive.
- **Firebase** pour l'authentification et les données, avec des **Cloud Functions** pour les opérations côté serveur.
- **Envoi d'e-mails** via EmailJS pour les rappels.
