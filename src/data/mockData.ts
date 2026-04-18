import { Lawyer, Office, PracticeArea, Insight } from '../types';

export const offices: Office[] = [
  {
    id: 'paris',
    city: 'Paris',
    country: 'France',
    address: '15 Avenue Matignon, 75008 Paris',
    phone: '+33 1 42 25 15 15',
    image: 'https://picsum.photos/seed/paris-office/800/600',
    coordinates: { lat: 48.8705, lng: 2.3113 }
  },
  {
    id: 'berlin',
    city: 'Berlin',
    country: 'Germany',
    address: 'Unter den Linden 21, 10117 Berlin',
    phone: '+49 30 2062 8888',
    image: 'https://picsum.photos/seed/berlin-office/800/600',
    coordinates: { lat: 52.5163, lng: 13.3777 }
  },
  {
    id: 'amsterdam',
    city: 'Amsterdam',
    country: 'Netherlands',
    address: 'Zuidplein 115, 1077 XV Amsterdam',
    phone: '+31 20 541 4141',
    image: 'https://picsum.photos/seed/ams-office/800/600',
    coordinates: { lat: 52.3422, lng: 4.8724 }
  },
  {
    id: 'london',
    city: 'London',
    country: 'United Kingdom',
    address: '10 Portman Square, London W1H 6AZ',
    phone: '+44 20 7034 4000',
    image: 'https://picsum.photos/seed/lon-office/800/600',
    coordinates: { lat: 51.5154, lng: -0.1557 }
  },
  {
    id: 'new-york',
    city: 'New York',
    country: 'United States',
    address: '1251 Avenue of the Americas, New York, NY 10020',
    phone: '+1 212 335 4500',
    image: 'https://picsum.photos/seed/ny-office/800/600',
    coordinates: { lat: 40.7589, lng: -73.9814 }
  }
];

export const practiceAreas: PracticeArea[] = [
  {
    id: 'corporate-ma',
    title: {
      en: 'Corporate & M&A',
      fr: 'Droit des Sociétés et M&A',
      de: 'Gesellschaftsrecht & M&A'
    },
    description: {
      en: 'Structuring multi-billion dollar transactions across continents with strategic foresight.',
      fr: 'Structuration de transactions de plusieurs milliards de dollars à travers les continents avec une vision stratégique.',
      de: 'Strukturierung von Multi-Milliarden-Dollar-Transaktionen über Kontinente hinweg mit strategischer Weitsicht.'
    },
    icon: 'Briefcase',
    longDescription: {
      en: 'Our Corporate and M&A practice is the cornerstone of the firm...',
      fr: 'Notre pratique Droit des Sociétés et M&A est le pivot du cabinet...',
      de: 'Unsere Gesellschaftsrechts- und M&A-Praxis ist der Eckpfeiler der Kanzlei...'
    }
  },
  {
    id: 'tax-strategy',
    title: {
      en: 'Global Tax Strategy',
      fr: 'Stratégie Fiscale Mondiale',
      de: 'Globale Steuerstrategie'
    },
    description: {
      en: 'Optimizing fiscal structures within the bounds of international transparency.',
      fr: 'Optimisation des structures fiscales dans le respect de la transparence internationale.',
      de: 'Optimierung steuerlicher Strukturen im Rahmen internationaler Transparenz.'
    },
    icon: 'DollarSign',
    longDescription: {
      en: 'In an era of unprecedented regulatory shift...',
      fr: 'Dans une ère de changements réglementaires sans précédent...',
      de: 'In einer Ära beispielloser regulatorischer Verschiebungen...'
    }
  },
  {
    id: 'litigation',
    title: {
      en: 'Complex Litigation',
      fr: 'Contentieux Complexe',
      de: 'Komplexe Rechtsstreitigkeiten'
    },
    description: {
      en: 'High-stakes advocacy for critical business disputes.',
      fr: 'Plaidoyer à enjeux élevés pour les litiges commerciaux critiques.',
      de: 'Interessenvertretung bei kritischen Geschäftsstreitigkeiten mit hohem Einsatz.'
    },
    icon: 'Gavel',
    longDescription: {
      en: 'We represent clients in their most significant and complex disputes...',
      fr: 'Nous représentons nos clients dans leurs litiges les plus importants...',
      de: 'Wir vertreten Mandanten in ihren bedeutendsten und komplexesten Streitfällen...'
    }
  },
  {
    id: 'arbitration',
    title: {
      en: 'Arbitration',
      fr: 'Arbitrage',
      de: 'Schiedsgerichtsbarkeit'
    },
    description: {
      en: 'Private resolution for sensitive international conflicts.',
      fr: 'Résolution privée pour les conflits internationaux sensibles.',
      de: 'Private Beilegung sensibler internationaler Konflikte.'
    },
    icon: 'Handshake',
    longDescription: {
      en: 'As a global leader in international arbitration...',
      fr: 'En tant que leader mondial de l\'arbitrage international...',
      de: 'Als weltweit führendes Unternehmen in der internationalen Schiedsgerichtsbarkeit...'
    }
  }
];

export const lawyers: Lawyer[] = [
  {
    id: 'cornelis-krijger',
    name: 'Cornelis Krijger',
    title: {
      en: 'Founding Partner',
      fr: 'Associé Fondateur',
      de: 'Gründungspartner'
    },
    photo: 'https://picsum.photos/seed/lawyer1/400/500',
    bio: {
      en: 'With over 30 years of experience in cross-border M&A, Cornelis has advised on some of the largest industrial mergers in European history.',
      fr: 'Avec plus de 30 ans d\'expérience dans les fusions-acquisitions transfrontalières, Cornelis a conseillé certaines des plus grandes fusions industrielles de l\'histoire européenne.',
      de: 'Mit über 30 Jahren Erfahrung in grenzüberschreitenden M&A hat Cornelis einige der größten industriellen Fusionen in der europäischen Geschichte beraten.'
    },
    expertise: ['M&A', 'Private Equity', 'Antitrust'],
    education: ['University of Amsterdam, LLM', 'Harvard Law School, JD'],
    publications: ['The Evolution of EU Merger Control (2022)', 'Global Equity Trends (2024)'],
    languages: ['Dutch', 'English', 'French', 'German'],
    offices: ['Amsterdam', 'Paris'],
    email: 'c.krijger@krijgercornelis.com'
  },
  {
    id: 'elena-vancamp',
    name: 'Elena Vancamp',
    title: {
      en: 'Managing Director',
      fr: 'Directrice Générale',
      de: 'Geschäftsführende Direktorin'
    },
    photo: 'https://picsum.photos/seed/lawyer2/400/500',
    bio: {
      en: 'Elena specializes in international investment arbitration and sovereign debt disputes, representing both states and multinational corporations.',
      fr: 'Elena est spécialisée dans l\'arbitrage d\'investissement international et les litiges relatifs à la dette souveraine, représentant à la fois des États et des sociétés multinationales.',
      de: 'Elena ist spezialisiert auf internationale Investitionsschiedsgerichtsbarkeit und Streitigkeiten über Staatsverschuldung und vertritt sowohl Staaten als auch multinationale Unternehmen.'
    },
    expertise: ['Arbitration', 'Sovereign Debt', 'International Law'],
    education: ['Leiden University', 'Oxford University'],
    publications: ['Treaty Law in the 21st Century'],
    languages: ['English', 'French', 'Spanish'],
    offices: ['London', 'Paris', 'Zurich'],
    email: 'e.vancamp@krijgercornelis.com'
  },
  {
    id: 'marcus-thorne',
    name: 'Marcus Thorne',
    title: {
      en: 'Equity Partner',
      fr: 'Associé au Capital',
      de: 'Equity-Partner'
    },
    photo: 'https://picsum.photos/seed/lawyer3/400/500',
    bio: {
      en: 'Marcus leads the Financial Technology practice, bridging the gap between traditional banking law and emerging digital assets.',
      fr: 'Marcus dirige la pratique des technologies financières, comblant le fossé entre le droit bancaire traditionnel et les nouveaux actifs numériques.',
      de: 'Marcus leitet die Praxis für Finanztechnologie und schlägt die Brücke zwischen traditionellem Bankrecht und aufstrebenden digitalen Vermögenswerten.'
    },
    expertise: ['FinTech', 'Banking Regulation', 'Asset Management'],
    education: ['Columbia Law School', 'University of Zurich'],
    publications: ['Digital Assets & Global Compliance'],
    languages: ['English', 'German'],
    offices: ['New York', 'Zurich'],
    email: 'm.thorne@krijgercornelis.com'
  }
];

export const insights: Insight[] = [
  {
    id: '1',
    title: {
      en: 'The New Directives on Cross-Border Data Sovereignty',
      fr: 'Les nouvelles directives sur la souveraineté des données transfrontalières',
      de: 'Die neuen Richtlinien zur grenzüberschreitenden Datensouveränität'
    },
    date: 'Oct 2024',
    location: 'Brussels',
    excerpt: {
      en: 'An in-depth review of the implications for multinational tech conglomerates operating within the EEA.',
      fr: 'Un examen approfondi des implications pour les conglomérats technologiques multinationaux opérant au sein de l\'EEE.',
      de: 'Eine eingehende Untersuchung der Auswirkungen auf multinationale Tech-Konglomerate, die innerhalb des EWR tätig sind.'
    },
    category: 'Privacy & Tech',
    content: {
      en: 'Full analysis of the recently proposed EU Data Act and its impact on cloud infrastructure providers...',
      fr: 'Analyse complète de la loi sur les données de l\'UE récemment proposée et de son impact sur les fournisseurs d\'infrastructure cloud...',
      de: 'Vollständige Analyse des kürzlich vorgeschlagenen EU-Datengesetzes und seiner Auswirkungen auf Cloud-Infrastrukturanbieter...'
    }
  },
  {
    id: '2',
    title: {
      en: 'Post-Arbitration Enforcement in Emerging Markets',
      fr: 'Exécution post-arbitrage dans les marchés émergents',
      de: 'Vollstreckung nach dem Schiedsverfahren in Schwellenländern'
    },
    date: 'Sep 2024',
    location: 'London',
    excerpt: {
      en: 'Strategic considerations for asset recovery and award recognition in the MENA region.',
      fr: 'Considérations stratégiques pour le recouvrement d\'avoirs et la reconnaissance des sentences dans la région MENA.',
      de: 'Strategische Überlegungen zur Vermögensabschöpfung und zur Anerkennung von Schiedssprüchen in der MENA-Region.'
    },
    category: 'Arbitration',
    content: {
      en: 'Enforcing awards in jurisdictions with developing legal frameworks requires a multi-faceted approach...',
      fr: 'L\'exécution des sentences dans des juridictions dont les cadres juridiques sont en cours de développement nécessite une approche multidimensionnelle...',
      de: 'Die Vollstreckung von Sprüchen in Gerichtsbarkeiten mit sich entwickelnden rechtlichen Rahmenbedingungen erfordert einen facettenreichen Ansatz...'
    }
  }
];
