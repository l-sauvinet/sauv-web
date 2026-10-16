export interface Service {
  id: string;
  title: string;
  short: string;
  description: string;
  benefits: string[];
  examples: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: 'applications-web',
    title: 'Applications web',
    short: 'Outils métier, espaces clients, plateformes en ligne.',
    description:
      "Une application qui tourne dans le navigateur, accessible depuis n'importe quel poste, sans installation. Je la conçois autour de votre façon de travailler, pas l'inverse.",
    benefits: [
      'Accessible partout, sur ordinateur, tablette et téléphone',
      'Rapide, sécurisée et pensée pour vos utilisateurs',
      'Évolutive : on commence simple, on ajoute au fil du temps',
    ],
    examples: 'Gestion de rendez-vous, devis et factures, suivi de stock, extranet client.',
    icon: 'M3 5h18v14H3z M3 9h18 M6.5 7h.01 M9 7h.01',
  },
  {
    id: 'applications-mobiles',
    title: 'Applications mobiles',
    short: 'Applis iOS et Android pour vos clients ou vos équipes.',
    description:
      'Une application installée sur le téléphone, avec notifications, mode hors ligne et accès à la caméra ou à la géolocalisation si besoin. Un seul code pour iOS et Android.',
    benefits: [
      'Une seule application pour iPhone et Android',
      'Utilisable même sans connexion',
      'Publication sur l’App Store et Google Play prise en charge',
    ],
    examples: 'Appli terrain pour techniciens, carte de fidélité, prise de commande.',
    icon: 'M7 2h10v20H7z M11 18h2',
  },
  {
    id: 'logiciels-sur-mesure',
    title: 'Logiciels sur mesure',
    short: 'Automatiser ce qui vous fait perdre du temps.',
    description:
      'Des tableurs qui débordent, des copier-coller entre trois logiciels, des tâches répétées chaque semaine : je crée l’outil qui fait le travail à votre place et se connecte à ce que vous utilisez déjà.',
    benefits: [
      'Moins de saisie, moins d’erreurs',
      'Connexion avec vos outils existants',
      'Un outil qui vous appartient, sans abonnement imposé',
    ],
    examples: 'Import automatique de données, génération de documents, tableaux de bord.',
    icon: 'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z',
  },
  {
    id: 'maintenance-evolutions',
    title: 'Maintenance & évolutions',
    short: 'Reprendre, corriger et faire grandir un projet existant.',
    description:
      'Votre site ou votre application a été fait par quelqu’un d’autre et plus personne ne s’en occupe ? Je reprends le projet, corrige ce qui ne va pas, le mets à jour et ajoute les fonctions qui manquent.',
    benefits: [
      'Mises à jour de sécurité et sauvegardes',
      'Corrections rapides quand quelque chose casse',
      'Nouvelles fonctionnalités sans tout refaire',
    ],
    examples: 'Reprise d’un site existant, mise à jour technique, ajout d’un module.',
    icon: 'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9z',
  },
  {
    id: 'conseil',
    title: 'Conseil',
    short: 'Y voir clair avant de lancer un projet.',
    description:
      'Vous avez une idée mais ne savez pas par où commencer, ou on vous a fait un devis que vous ne comprenez pas ? Je vous aide à définir le besoin, choisir les bonnes solutions et éviter les mauvaises surprises.',
    benefits: [
      'Un avis neutre, en langage clair',
      'Un cahier des charges simple et réaliste',
      'Des choix techniques adaptés à votre budget',
    ],
    examples: 'Étude de faisabilité, relecture de devis, choix d’outils, audit d’un site.',
    icon: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z M8 9h8 M8 13h5',
  },
];
