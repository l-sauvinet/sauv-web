---
title: NOVA
summary: Assistant IA personnel qui agit sur l'ordinateur (fichiers, système, recherche web), avec trois moteurs d'IA interchangeables.
category: Logiciel · Intelligence artificielle
status: En ligne
year: 2026
order: 2
featured: true
logo: ../../assets/projets/nova-logo.svg
color: "#ff7a6b"
stack: [Python, Claude, Ollama, Agents IA, Pytest]
demo: https://nova.sauv-web.fr
demoLabel: Télécharger NOVA
repo: https://github.com/l-sauvinet/nova_assistant
# TODO: ajouter une capture d'écran (src/assets/projets/nova.png) puis décommenter :
# cover: ../../assets/projets/nova.png
# coverAlt: Conversation avec l'assistant NOVA
---

NOVA se télécharge depuis son site, [nova.sauv-web.fr](https://nova.sauv-web.fr).

## Le besoin

Un assistant qui ne se contente pas de répondre, mais qui **agit** : trouver un fichier, faire le ménage dans un dossier, vérifier l'état de la machine ou chercher une information sur le web.

## Ce que j'ai construit

- **Une boucle d'agent** : l'IA choisit les outils à utiliser, les enchaîne et rend compte du résultat.
- **Des outils locaux** : fichiers (lire, créer, déplacer, rechercher), informations système (mémoire, processeur, disques), recherche et lecture de pages web, commandes système.
- **Trois moteurs interchangeables** : Claude via Claude Code, l'API Anthropic, ou un modèle local avec Ollama pour garder les données sur la machine.

## Les choix techniques

- **Sécurité d'abord** : chaque dossier hors de la zone de confiance demande une autorisation, et toute suppression ou commande système doit être validée.
- **Architecture en couches** (cœur, moteurs, outils, interfaces) qui prépare la suite : API FastAPI, commande vocale et application de bureau.
- **Tests sans IA réelle** : un moteur factice et un blocage réseau garantissent des tests rapides et fiables.
