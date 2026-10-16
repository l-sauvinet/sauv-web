# Sauv'Web — sauv-web.fr

Site vitrine de Sauv'Web (Lucas Sauvinet EI), développeur web & mobile freelance à Chambéry.

Site **statique** généré avec [Astro](https://astro.build) + [Tailwind CSS 4](https://tailwindcss.com), en TypeScript strict. Aucun cookie, aucun traceur, JavaScript minimal. Le formulaire de contact est géré par un petit script PHP exécuté sur l'hébergement o2switch.

## Prérequis

- Node.js **22.22 ou plus** (installé via nvm : `nvm use 22`)
- npm

## Commandes

| Commande | Rôle |
| --- | --- |
| `npm install` | Installe les dépendances |
| `npm run dev` | Serveur de développement sur http://localhost:4321 |
| `npx astro check` | Vérifie les types TypeScript et les composants |
| `npm run build` | Génère le site final dans `dist/` |
| `npm run preview` | Sert le dossier `dist/` en local pour vérifier le build |

> Après une modification de `src/content.config.ts`, relancez `npm run dev`. Si les projets s'affichent mal ensuite, supprimez `.astro/` et `node_modules/.astro/` puis relancez.

Les encadrés orange « TODO » visibles en local signalent les informations à fournir. Ils n'apparaissent **jamais** dans le build de production.

## Structure

```
public/
├── .htaccess              HTTPS, 404, cache, compression, en-têtes de sécurité (Apache / o2switch)
├── api/contact.php        Traitement du formulaire de contact (envoi par email)
├── favicon.svg, manifest.webmanifest, robots.txt
src/
├── assets/                Logo SW et logos des projets
├── components/            Header, Footer, Logo, ProjectCard, SpeedStripes, CtaBand, PageHeader, Todo…
├── content/projets/       Une fiche Markdown par réalisation
├── content.config.ts      Schéma typé des fiches projets
├── data/site.ts           Coordonnées, SIREN/SIRET, hébergeur, réseaux, délai de réponse
├── data/services.ts       Les 5 services (textes, bénéfices, icônes)
├── layouts/BaseLayout.astro   SEO, Open Graph, JSON-LD, thème clair/sombre
├── pages/                 Une page par fichier (realisations/[slug].astro = page de détail)
└── styles/global.css      Couleurs, polices, boutons inclinés, styles de texte
```

Toutes les informations de l'entreprise sont centralisées dans `src/data/site.ts`.

## Ajouter une réalisation

1. Créez `src/content/projets/mon-projet.md` (le nom du fichier devient l'adresse `/realisations/mon-projet/`) :

   ```md
   ---
   title: Mon projet
   summary: Une phrase qui résume le projet.
   category: Application web · Gestion
   status: En ligne            # En ligne | En développement | Projet personnel
   year: 2026
   order: 4                    # ordre d'affichage
   featured: true              # affiché sur l'accueil
   logo: ../../assets/projets/mon-projet-logo.svg
   color: "#2bb3a3"            # couleur du projet sur sa carte
   stack: [Vue 3, Firebase]
   demo: https://mon-projet.sauv-web.fr
   demoLabel: Ouvrir Mon projet
   access: Accès sur demande, contactez-moi pour obtenir un compte.   # facultatif
   repo: https://github.com/l-sauvinet/mon-projet                     # facultatif
   cover: ../../assets/projets/mon-projet.png                         # capture, facultatif
   coverAlt: Description de la capture
   ---

   ## Le besoin
   …
   ```

2. Déposez le logo (et éventuellement une capture) dans `src/assets/projets/`. Les images sont converties automatiquement en formats optimisés.

## Déploiement automatique

Chaque `git push` sur la branche `main` déclenche la GitHub Action `.github/workflows/deploy.yml`, qui :

1. installe les dépendances et vérifie le code (`astro check`) ;
2. construit le site (`npm run build`) ;
3. envoie **uniquement les fichiers modifiés** de `dist/` dans `public_html` sur o2switch, en FTP sécurisé (FTPS).

Le suivi se fait dans l'onglet **Actions** du dépôt GitHub. Si la vérification ou le build échoue, rien n'est envoyé : le site en ligne reste intact.

Un déploiement peut aussi être relancé à la main : onglet **Actions** → « Déploiement sur o2switch » → **Run workflow**.

### Configuration (une seule fois)

1. **cPanel → Comptes FTP** : créer un compte (par exemple `deploy@sauv-web.fr`) avec un mot de passe fort et le **répertoire `public_html`**.
2. **GitHub → dépôt → Settings → Secrets and variables → Actions → New repository secret**, créer :
   - `FTP_SERVER` : `yeux.o2switch.net`
   - `FTP_USERNAME` : l'identifiant FTP complet (par exemple `deploy@sauv-web.fr`)
   - `FTP_PASSWORD` : son mot de passe

### Côté o2switch (une seule fois)

- **SSL/TLS Status** : lancer AutoSSL pour `sauv-web.fr` et `www.sauv-web.fr`.
- **Comptes de messagerie** : créer **contact@sauv-web.fr**, expéditeur des messages du formulaire.
- **Délivrabilité des e-mails** : vérifier que SPF et DKIM sont actifs.

Le formulaire ne fonctionne pas avec `npm run dev` (il faut PHP) : testez-le une fois en ligne.
