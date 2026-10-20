export const TODO = 'TODO';

export const site = {
  name: "Sauv'Web",
  url: 'https://sauv-web.fr',
  tagline: "Développeur d'applications web & mobiles à Chambéry",
  description:
    "Sauv'Web, développeur freelance à Chambéry (Savoie) : création d'applications web et mobiles, logiciels sur mesure, maintenance et conseil pour TPE, PME et indépendants.",
  locale: 'fr_FR',
  email: 'sauv.web@gmail.com',
  phone: '06 47 99 88 10',
  phoneIntl: '+33647998810',
  hourlyRate: 30,
  owner: {
    name: 'Lucas Sauvinet',
    legalName: 'Lucas Sauvinet EI',
    status: 'Entrepreneur individuel (EI) — micro-entreprise',
  },
  address: {
    street: "26 allée de l'Eau Vive",
    postalCode: '73000',
    city: 'Jacob-Bellecombette',
    region: 'Savoie',
    country: 'France',
    countryCode: 'FR',
  },
  geo: { latitude: 45.5577, longitude: 5.9145 },
  siren: '131 644 312',
  siret: '131 644 312 00012',
  vatMention: 'TVA non applicable, art. 293 B du CGI',
  host: {
    name: 'o2switch',
    legalForm: 'SAS au capital de 100 000 €',
    siret: '510 909 807 00032',
    address: 'Chemin des Pardiaux, 63000 Clermont-Ferrand, France',
    phone: '04 44 44 60 40',
    url: 'https://www.o2switch.fr',
  },
  socials: {
    linkedin: TODO,
    github: 'https://github.com/l-sauvinet',
    malt: TODO,
  },
} as const;

export const contactEndpoint = '/api/contact.php';
export const responseDelay = '48 h';

export const nav = [
  { href: '/services/', label: 'Services' },
  { href: '/realisations/', label: 'Réalisations' },
  { href: '/methode-tarifs/', label: 'Méthode & tarifs' },
  { href: '/a-propos/', label: 'À propos' },
] as const;

export const isTodo = (value: string): boolean => value === TODO;
