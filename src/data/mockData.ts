import { Lawyer, Office, PracticeArea, Insight, Industry, RepresentativeMatter, Client, Matter, MatterStatus, RegulatoryUpdate } from '../types';

export const industries: Industry[] = [
  {
    id: 'financial-services',
    title: { en: 'Financial Services & Banking', fr: 'Services Financiers et Banque', de: 'Finanzdienstleistungen & Bankwesen' },
    description: { en: 'Advising global financial institutions on complex regulatory and transactional matters.', fr: 'Conseil aux institutions financières mondiales sur des questions réglementaires et transactionnelles complexes.', de: 'Beratung globaler Finanzinstitute in komplexen regulatorischen und transaktionalen Angelegenheiten.' },
    icon: 'Landmark'
  },
  {
    id: 'technology-saas',
    title: { en: 'Technology & SaaS', fr: 'Technologie et SaaS', de: 'Technologie & SaaS' },
    description: { en: 'Supporting high-growth tech firms with IP, privacy, and scale.', fr: 'Accompagner les entreprises technologiques à forte croissance en matière de PI, de confidentialité et d\'échelle.', de: 'Unterstützung wachstumsstarker Tech-Firmen bei geistigem Eigentum, Datenschutz und Skalierung.' },
    icon: 'Cpu'
  },
  {
    id: 'energy-infrastructure',
    title: { en: 'Energy & Infrastructure', fr: 'Énergie et Infrastructures', de: 'Energie & Infrastruktur' },
    description: { en: 'Strategic advice for capital-intensive global projects.', fr: 'Conseils stratégiques pour des projets mondiaux à forte intensité de capital.', de: 'Strategische Beratung für kapitalintensive globale Projekte.' },
    icon: 'Radio'
  },
  {
    id: 'life-sciences',
    title: { en: 'Life Sciences & Healthcare', fr: 'Sciences de la Vie et Santé', de: 'Biowissenschaften & Gesundheitswesen' },
    description: { en: 'Navigating the intersection of biology, technology, and regulation.', fr: 'Naviguer à l\'intersection de la biologie, de la technologie et de la réglementation.', de: 'Navigieren an der Schnittstelle von Biologie, Technologie und Regulierung.' },
    icon: 'Stethoscope'
  }
];

export const clients: Client[] = [
  {
    id: 'client-global-tech',
    name: 'Global Tech Corp',
    industry: 'Technology',
    engagementHistory: ['IPO Advisory', 'Patent Litigation']
  },
  {
    id: 'client-euro-logistics',
    name: 'EuroLogistics SE',
    industry: 'Logistics',
    engagementHistory: ['Acquisition 2024', 'Tax Structuring']
  }
];

export const matters: Matter[] = [
  {
    id: 'matter-ma-2026',
    title: { en: 'Transatlantic Acquisition - Project Horizon', fr: 'Acquisition Transatlantique - Projet Horizon', de: 'Transatlantische Akquisition - Projekt Horizon' },
    clientId: 'client-euro-logistics',
    jurisdictions: ['USA', 'France', 'UK'],
    lawyerIds: ['jean-luc-moreau', 'james-whitaker'],
    status: MatterStatus.EXECUTION,
    riskLevel: 'Medium',
    progress: 65,
    billingStatus: 'Up to Date',
    totalBilled: '€1.2M',
    updatedAt: '2026-04-15'
  },
  {
    id: 'matter-reg-2026',
    title: { en: 'EU AI Act Compliance Audit', fr: 'Audit de Conformité au Règlement IA de l\'UE', de: 'EU AI Act Compliance-Audit' },
    clientId: 'client-global-tech',
    jurisdictions: ['Germany', 'France'],
    lawyerIds: ['lukas-schneider'],
    status: MatterStatus.STRATEGY,
    riskLevel: 'High',
    progress: 30,
    billingStatus: 'Pending',
    totalBilled: '€450K',
    updatedAt: '2026-04-12'
  }
];

export const regulatoryUpdates: RegulatoryUpdate[] = [
  {
    id: 'reg-update-1',
    source: 'ESMA',
    title: { en: 'New Cryptocurrency Regulation Framework', fr: 'Nouveau Cadre de Réglementation des Cryptomonnaies', de: 'Neuer Regulierungsrahmen für Kryptowährungen' },
    date: '2026-04-10',
    summary: { en: 'ESMA releases updated guidelines on digital asset classification and market participation.', fr: 'L\'ESMA publie des directives mises à jour sur la classification des actifs numériques et la participation au marché.', de: 'Die ESMA veröffentlicht aktualisierte Leitlinien zur Klassifizierung digitaler Vermögenswerte und zur Marktteilnahme.' },
    riskSignal: 'Caution'
  },
  {
    id: 'reg-update-2',
    source: 'SEC',
    title: { en: 'Modified Disclosure Requirements for Multinational Corps', fr: 'Obligations de Divulgation Modifiées pour les Multinationales', de: 'Geänderte Offenlegungspflichten für multinationale Konzerne' },
    date: '2026-04-14',
    summary: { en: 'Enhanced transparency mandates for cross-border financial entities under Section 404.', fr: 'Mandats de transparence renforcés pour les entités financières transfrontalières en vertu de la section 404.', de: 'Erweiterte Transparenzmandate für grenzüberschreitende Finanzunternehmen gemäß Abschnitt 404.' },
    riskSignal: 'High Alert'
  }
];

export const representativeMatters: RepresentativeMatter[] = [
  {
    id: 'matter-1',
    title: { en: 'Cross-Border Acquisition (€2.4B)', fr: 'Acquisition Transfrontalière (2,4 Md€)', de: 'Grenzüberschreitende Akquisition (2,4 Mrd. €)' },
    description: { en: 'Advised a European logistics group on acquiring a US-based supply chain firm across 5 jurisdictions.', fr: 'Conseil à un groupe logistique européen sur l\'acquisition d\'une société de supply chain basée aux États-Unis dans 5 juridictions.', de: 'Beratung eines europäischen Logistikkonzerns beim Erwerb eines US-amerikanischen Lieferkettenunternehmens in 5 Rechtsräumen.' },
    value: '€2.4B',
    industryId: 'energy-infrastructure',
    practiceAreaId: 'corporate-ma'
  },
  {
    id: 'matter-2',
    title: { en: 'International Arbitration (Confidential)', fr: 'Arbitrage International (Confidentiel)', de: 'Internationale Schiedsgerichtsbarkeit (Vertraulich)' },
    description: { en: 'Represented a multinational energy company in arbitration proceedings under ICC rules.', fr: 'Représentation d\'une entreprise énergétique multinationale dans des procédures d\'arbitrage selon les règles de la CCI.', de: 'Vertretung eines multinationalen Energieunternehmens in Schiedsverfahren nach den ICC-Regeln.' },
    industryId: 'energy-infrastructure',
    practiceAreaId: 'arbitration'
  },
  {
    id: 'matter-3',
    title: { en: 'IPO Advisory ($850M)', fr: 'Conseil en Introduction en Bourse (850 M$)', de: 'Börsengang-Beratung (850 Mio. $)' },
    description: { en: 'Advised a technology company on listing on NASDAQ.', fr: 'Conseil à une entreprise technologique pour son introduction au NASDAQ.', de: 'Beratung eines Technologieunternehmens bei der Notierung an der NASDAQ.' },
    value: '$850M',
    industryId: 'technology-saas',
    practiceAreaId: 'corporate-ma'
  }
];

export const offices: Office[] = [
  {
    id: 'paris',
    city: 'Paris',
    country: 'France',
    address: '15 Avenue Matignon, 75008 Paris',
    phone: '+33 1 42 25 15 15',
    image: 'https://picsum.photos/seed/paris-office/800/600',
    focus: {
      en: 'Corporate law, EU regulatory, arbitration',
      fr: 'Droit des sociétés, réglementation de l\'UE, arbitrage',
      de: 'Gesellschaftsrecht, EU-Regulierung, Schiedsgerichtsbarkeit'
    },
    description: {
      en: 'Strategic hub for continental Europe with strong regulatory expertise.',
      fr: 'Pivot stratégique pour l\'Europe continentale avec une solide expertise réglementaire.',
      de: 'Strategisches Zentrum für Kontinentaleuropa mit ausgeprägter regulatorischer Expertise.'
    },
    coordinates: { lat: 48.8705, lng: 2.3113 }
  },
  {
    id: 'berlin',
    city: 'Berlin',
    country: 'Germany',
    address: 'Unter den Linden 21, 10117 Berlin',
    phone: '+49 30 2062 8888',
    image: 'https://picsum.photos/seed/berlin-office/800/600',
    focus: {
      en: 'Technology law, data protection, fintech',
      fr: 'Droit de la technologie, protection des données, fintech',
      de: 'Technologierecht, Datenschutz, Fintech'
    },
    description: {
      en: 'Advising fast-growing tech companies and investors.',
      fr: 'Conseil aux entreprises technologiques en forte croissance et aux investisseurs.',
      de: 'Beratung von schnell wachsenden Technologieunternehmen und Investoren.'
    },
    coordinates: { lat: 52.5163, lng: 13.3777 }
  },
  {
    id: 'amsterdam',
    city: 'Amsterdam',
    country: 'Netherlands',
    address: 'Zuidplein 115, 1077 XV Amsterdam',
    phone: '+31 20 541 4141',
    image: 'https://picsum.photos/seed/ams-office/800/600',
    focus: {
      en: 'International trade, tax structuring, logistics',
      fr: 'Commerce international, structuration fiscale, logistique',
      de: 'Internationaler Handel, Steuerstrukturierung, Logistik'
    },
    description: {
      en: 'Gateway for multinational structuring and cross-border trade.',
      fr: 'Passerelle pour la structuration multinationale et le commerce transfrontalier.',
      de: 'Tor für multinationale Strukturierung und grenzüberschreitenden Handel.'
    },
    coordinates: { lat: 52.3422, lng: 4.8724 }
  },
  {
    id: 'london',
    city: 'London',
    country: 'United Kingdom',
    address: '10 Portman Square, London W1H 6AZ',
    phone: '+44 20 7034 4000',
    image: 'https://picsum.photos/seed/lon-office/800/600',
    focus: {
      en: 'Banking, finance, dispute resolution',
      fr: 'Banque, finance, résolution de litiges',
      de: 'Bankwesen, Finanzen, Streitbeilegung'
    },
    description: {
      en: 'Leading center for financial legal services and litigation.',
      fr: 'Centre de premier plan pour les services juridiques financiers et les litiges.',
      de: 'Führendes Zentrum für Finanzrechtsdienstleistungen und Rechtsstreitigkeiten.'
    },
    coordinates: { lat: 51.5154, lng: -0.1557 }
  },
  {
    id: 'zurich',
    city: 'Zurich',
    country: 'Switzerland',
    address: 'Bahnhofstrasse 1, 8001 Zurich',
    phone: '+41 44 211 11 11',
    image: 'https://picsum.photos/seed/zRH-office/800/600',
    focus: {
      en: 'Private wealth, asset protection, tax advisory',
      fr: 'Patrimoine privé, protection d\'actifs, conseil fiscal',
      de: 'Privatvermögen, Vermögensschutz, Steuerberatung'
    },
    description: {
      en: 'Trusted advisor for global wealth management.',
      fr: 'Conseiller de confiance pour la gestion de fortune mondiale.',
      de: 'Vertrauenswürdiger Berater für die globale Vermögensverwaltung.'
    },
    coordinates: { lat: 47.3686, lng: 8.5391 }
  },
  {
    id: 'new-york',
    city: 'New York',
    country: 'United States',
    address: '1251 Avenue of the Americas, New York, NY 10020',
    phone: '+1 212 335 4500',
    image: 'https://picsum.photos/seed/ny-office/800/600',
    focus: {
      en: 'M&A, capital markets, corporate governance',
      fr: 'M&A, marchés de capitaux, gouvernance d\'entreprise',
      de: 'M&A, Kapitalmärkte, Corporate Governance'
    },
    description: {
      en: 'Serving major US and international corporations.',
      fr: 'Au service des grandes entreprises américaines et internationales.',
      de: 'Betreuung bedeutender US-amerikanischer und internationaler Unternehmen.'
    },
    coordinates: { lat: 40.7589, lng: -73.9814 }
  },
  {
    id: 'boston',
    city: 'Boston',
    country: 'United States',
    address: '200 Clarendon St, Boston, MA 02116',
    phone: '+1 617 247 1100',
    image: 'https://picsum.photos/seed/boston-office/800/600',
    focus: {
      en: 'Life sciences, IP, venture capital',
      fr: 'Sciences de la vie, PI, capital-risque',
      de: 'Biowissenschaften, IP, Risikokapital'
    },
    description: {
      en: 'Supporting innovation-driven companies and research institutions.',
      fr: 'Soutien aux entreprises axées sur l\'innovation et aux institutions de recherche.',
      de: 'Unterstützung innovationsgeladener Unternehmen und Forschungseinrichtungen.'
    },
    coordinates: { lat: 42.3494, lng: -71.0755 }
  }
];

export const practiceAreas: PracticeArea[] = [
  {
    id: 'corporate-ma',
    title: {
      en: 'Corporate & Mergers & Acquisitions',
      fr: 'Droit des Sociétés et Fusions-Acquisitions',
      de: 'Gesellschaftsrecht & M&A'
    },
    description: {
      en: 'Advising on acquisitions, divestitures, joint ventures, and corporate structuring across multiple jurisdictions.',
      fr: 'Conseil en acquisitions, cessions, joint-ventures et structuration d\'entreprise dans plusieurs juridictions.',
      de: 'Beratung bei Akquisitionen, Veräußerungen, Joint Ventures und Unternehmensstrukturierung in mehreren Gerichtsbarkeiten.'
    },
    icon: 'Briefcase',
    longDescription: { en: '', fr: '', de: '' }
  },
  {
    id: 'banking-finance',
    title: {
      en: 'Banking & Finance',
      fr: 'Banque et Finance',
      de: 'Bankwesen & Finanzen'
    },
    description: {
      en: 'Representation of lenders and borrowers in complex financing transactions including syndicated loans and structured finance.',
      fr: 'Représentation de prêteurs et d\'emprunteurs dans des opérations de financement complexes, notamment les prêts syndiqués et le financement structuré.',
      de: 'Vertretung von Kreditgebern und Kreditnehmern bei komplexen Finanzierungstransaktionen, einschließlich Konsortialkrediten und strukturierter Finanzierung.'
    },
    icon: 'DollarSign',
    longDescription: { en: '', fr: '', de: '' }
  },
  {
    id: 'litigation',
    title: {
      en: 'Litigation & Dispute Resolution',
      fr: 'Contentieux et Résolution de Litiges',
      de: 'Rechtsstreitigkeiten & Streitbeilegung'
    },
    description: {
      en: 'Handling high-value disputes, arbitration, and cross-border litigation.',
      fr: 'Gestion de litiges de grande valeur, d\'arbitrages et de contentieux transfrontaliers.',
      de: 'Bearbeitung von hochwertigen Streitigkeiten, Schiedsverfahren und grenzüberschreitenden Rechtsstreitigkeiten.'
    },
    icon: 'Gavel',
    longDescription: { en: '', fr: '', de: '' }
  },
  {
    id: 'tax-structuring',
    title: {
      en: 'Tax & Structuring',
      fr: 'Fiscalité et Structuration',
      de: 'Steuern & Strukturierung'
    },
    description: {
      en: 'Strategic tax planning and compliance for multinational entities.',
      fr: 'Planification fiscale stratégique et conformité pour les entités multinationales.',
      de: 'Strategische Steuerplanung und Compliance für multinationale Unternehmen.'
    },
    icon: 'FileText',
    longDescription: { en: '', fr: '', de: '' }
  },
  {
    id: 'arbitration',
    title: {
      en: 'International Arbitration',
      fr: 'Arbitrage International',
      de: 'Internationale Schiedsgerichtsbarkeit'
    },
    description: {
      en: 'Representation in global arbitration forums with expertise in commercial and investment disputes.',
      fr: 'Représentation dans les forums d\'arbitrage mondiaux avec une expertise dans les litiges commerciaux et d\'investissement.',
      de: 'Vertretung in globalen Schiedsforen mit Expertise in Handels- und Investitionsstreitigkeiten.'
    },
    icon: 'Handshake',
    longDescription: { en: '', fr: '', de: '' }
  },
  {
    id: 'ip-technology',
    title: {
      en: 'Intellectual Property & Technology Law',
      fr: 'Propriété Intellectuelle et Droit des Technologies',
      de: 'Geistiges Eigentum & Technologierecht'
    },
    description: {
      en: 'Protection and commercialization of IP assets, data privacy, and digital compliance.',
      fr: 'Protection et commercialisation des actifs de PI, confidentialité des données et conformité numérique.',
      de: 'Schutz und Kommerzialisierung von IP-Assets, Datenschutz und digitale Compliance.'
    },
    icon: 'Zap',
    longDescription: { en: '', fr: '', de: '' }
  },
  {
    id: 'private-wealth',
    title: {
      en: 'Private Wealth & Asset Protection',
      fr: 'Patrimoine Privé et Protection d\'Actifs',
      de: 'Privatvermögen & Vermögensschutz'
    },
    description: {
      en: 'Advising high-net-worth individuals on wealth preservation and succession planning.',
      fr: 'Conseiller les particuliers fortunés sur la préservation du patrimoine et la planification successorale.',
      de: 'Beratung vermögender Privatpersonen bei der Vermögenserhaltung und Nachfolgeplanung.'
    },
    icon: 'Shield',
    longDescription: { en: '', fr: '', de: '' }
  }
];

export const lawyers: Lawyer[] = [
  // Paris
  {
    id: 'jean-luc-moreau',
    name: 'Jean-Luc Moreau',
    title: { en: 'Partner, Corporate Law', fr: 'Associé, Droit des Sociétés', de: 'Partner, Gesellschaftsrecht' },
    photo: 'https://picsum.photos/seed/jlm/400/500',
    bio: { en: 'Advises multinational corporations on acquisitions and corporate restructuring.', fr: 'Conseille les sociétés multinationales sur les acquisitions et la restructuration d\'entreprise.', de: 'Berät multinationale Konzerne bei Akquisitionen und Unternehmensumstrukturierungen.' },
    expertise: ['M&A', 'Corporate Governance'],
    education: ['Sorbonne University'],
    publications: [],
    languages: ['French', 'English'],
    offices: ['Paris'],
    email: 'jl.moreau@krijgercornelis.com',
    yearsOfExperience: 22,
    barAdmissions: ['Paris Bar'],
    memberships: ['IBA']
  },
  {
    id: 'amelie-laurent',
    name: 'Amélie Laurent',
    title: { en: 'Senior Associate', fr: 'Collaboratrice Senior', de: 'Senior Associate' },
    photo: 'https://picsum.photos/seed/al/400/500',
    bio: { en: 'Represents clients in cross-border disputes and arbitration proceedings.', fr: 'Représente des clients dans des litiges transfrontaliers et des procédures d\'arbitrage.', de: 'Vertritt Mandanten in grenzüberschreitenden Streitigkeiten und Schiedsverfahren.' },
    expertise: ['Arbitration', 'Litigation'],
    education: ['Sciences Po'],
    publications: [],
    languages: ['French', 'English'],
    offices: ['Paris'],
    email: 'a.laurent@krijgercornelis.com',
    yearsOfExperience: 9,
    barAdmissions: ['Paris Bar'],
    memberships: ['ICC Young Arbitrators']
  },
  {
    id: 'thomas-girard',
    name: 'Thomas Girard',
    title: { en: 'Associate', fr: 'Collaborateur', de: 'Associate' },
    photo: 'https://picsum.photos/seed/tg/400/500',
    bio: { en: 'Focuses on tax structuring and regulatory compliance.', fr: 'Se concentre sur la structuration fiscale et la conformité réglementaire.', de: 'Konzentriert sich auf Steuerstrukturierung und regulatorische Compliance.' },
    expertise: ['Tax', 'Compliance'],
    education: ['University of Paris'],
    publications: [],
    languages: ['French', 'English'],
    offices: ['Paris'],
    email: 't.girard@krijgercornelis.com',
    yearsOfExperience: 4,
    barAdmissions: ['Paris Bar'],
    memberships: []
  },
  // Berlin
  {
    id: 'lukas-schneider',
    name: 'Lukas Schneider',
    title: { en: 'Partner, Technology Law', fr: 'Associé, Droit des Technologies', de: 'Partner, Technologierecht' },
    photo: 'https://picsum.photos/seed/lsch/400/500',
    bio: { en: 'Advises tech firms on GDPR and digital regulation.', fr: 'Conseille les entreprises technologiques sur le RGPD et la réglementation numérique.', de: 'Berät Tech-Firmen zur DSGVO und digitaler Regulierung.' },
    expertise: ['Data Protection', 'Fintech'],
    education: ['Humboldt University'],
    publications: [],
    languages: ['German', 'English'],
    offices: ['Berlin'],
    email: 'l.schneider@krijgercornelis.com',
    yearsOfExperience: 15,
    barAdmissions: ['Berlin Bar Association'],
    memberships: ['IAPP']
  },
  // Amsterdam
  {
    id: 'pieter-van-dijk',
    name: 'Pieter van Dijk',
    title: { en: 'Managing Partner', fr: 'Associé Gérant', de: 'Managing Partner' },
    photo: 'https://picsum.photos/seed/pvd/400/500',
    bio: { en: 'Leads cross-border transactions across Europe.', fr: 'Dirige les transactions transfrontalières à travers l\'Europe.', de: 'Leitet grenzüberschreitende Transaktionen in ganz Europa.' },
    expertise: ['M&A', 'Corporate'],
    education: ['University of Amsterdam'],
    publications: [],
    languages: ['Dutch', 'English'],
    offices: ['Amsterdam'],
    email: 'p.vandijk@krijgercornelis.com',
    yearsOfExperience: 28,
    barAdmissions: ['Netherlands Bar'],
    memberships: ['IBA Corporate Council']
  },
  // London
  {
    id: 'james-whitaker',
    name: 'James Whitaker',
    title: { en: 'Partner', fr: 'Associé', de: 'Partner' },
    photo: 'https://picsum.photos/seed/jw/400/500',
    bio: { en: 'Advises global financial institutions.', fr: 'Conseille les institutions financières mondiales.', de: 'Berät globale Finanzinstitute.' },
    expertise: ['Banking & Finance'],
    education: ['Oxford University'],
    publications: [],
    languages: ['English'],
    offices: ['London'],
    email: 'j.whitaker@krijgercornelis.com',
    yearsOfExperience: 18,
    barAdmissions: ['Solicitor, England & Wales'],
    memberships: ['Law Society of England & Wales']
  },
  // New York
  {
    id: 'michael-harrington',
    name: 'Michael Harrington',
    title: { en: 'Partner', fr: 'Associé', de: 'Partner' },
    photo: 'https://picsum.photos/seed/mh/400/500',
    bio: { en: 'Advises on IPOs and securities offerings.', fr: 'Conseille sur les introductions en bourse et les offres de titres.', de: 'Berät bei Börsengängen und Wertpapieremissionen.' },
    expertise: ['Capital Markets'],
    education: ['Harvard Law School'],
    publications: [],
    languages: ['English'],
    offices: ['New York'],
    email: 'm.harrington@krijgercornelis.com',
    yearsOfExperience: 20,
    barAdmissions: ['New York State Bar'],
    memberships: ['ABA']
  },
  // Boston
  {
    id: 'robert-hayes',
    name: 'Robert Hayes',
    title: { en: 'Partner', fr: 'Associé', de: 'Partner' },
    photo: 'https://picsum.photos/seed/rh/400/500',
    bio: { en: 'Advises biotech companies.', fr: 'Conseille les entreprises de biotechnologie.', de: 'Berät Biotech-Unternehmen.' },
    expertise: ['Life Sciences'],
    education: ['Harvard Law'],
    publications: [],
    languages: ['English'],
    offices: ['Boston'],
    email: 'r.hayes@krijgercornelis.com',
    yearsOfExperience: 16,
    barAdmissions: ['Massachusetts State Bar'],
    memberships: ['Boston Bar Association']
  },
  // Zurich
  {
    id: 'markus-steiner',
    name: 'Markus Steiner',
    title: { en: 'Partner', fr: 'Associé', de: 'Partner' },
    photo: 'https://picsum.photos/seed/ms/400/500',
    bio: { en: 'Advises high-net-worth individuals.', fr: 'Conseille les particuliers fortunés.', de: 'Berät vermögende Privatpersonen.' },
    expertise: ['Private Wealth'],
    education: ['University of Zurich'],
    publications: [],
    languages: ['German', 'English'],
    offices: ['Zurich'],
    email: 'm.steiner@krijgercornelis.com',
    yearsOfExperience: 25,
    barAdmissions: ['Swiss Bar'],
    memberships: ['STEP']
  }
];

export const insights: Insight[] = [
  {
    id: 'insight-1',
    title: {
      en: 'Navigating Cross-Border M&A in a Volatile Market',
      fr: 'Naviguer dans les fusions-acquisitions transfrontalières dans un marché volatil',
      de: 'Grenzüberschreitende M&A in einem volatilen Markt steuern'
    },
    date: 'Oct 2024',
    location: 'Global',
    excerpt: {
      en: 'Key considerations for multinational acquisitions amid regulatory shifts.',
      fr: 'Considérations clés pour les acquisitions multinationales au milieu des changements réglementaires.',
      de: 'Wichtige Überlegungen für multinationale Akquisitionen angesichts regulatorischer Verschiebungen.'
    },
    category: 'Corporate',
    content: { en: '', fr: '', de: '' }
  },
  {
    id: 'insight-2',
    title: {
      en: 'The Future of Data Protection in Europe',
      fr: 'L\'avenir de la protection des données en Europe',
      de: 'Die Zukunft des Datenschutzes in Europa'
    },
    date: 'Sep 2024',
    location: 'Europe',
    excerpt: {
      en: 'Evolving GDPR interpretations and enforcement trends.',
      fr: 'Évolution des interprétations du RGPD et tendances en matière d\'application.',
      de: 'Sich entwickelnde DSGVO-Interpretationen und Durchsetzungstrends.'
    },
    category: 'Technology',
    content: { en: '', fr: '', de: '' }
  },
  {
    id: 'insight-3',
    title: {
      en: 'Arbitration vs Litigation: Strategic Considerations',
      fr: 'Arbitrage ou Contentieux : Considérations Stratégiques',
      de: 'Schiedsgerichtsbarkeit vs. Rechtsstreitigkeiten: Strategische Überlegungen'
    },
    date: 'Aug 2024',
    location: 'International',
    excerpt: {
      en: 'Choosing the right dispute resolution mechanism.',
      fr: 'Choisir le bon mécanisme de résolution des litiges.',
      de: 'Wahl des richtigen Streitbeilegungsmechanismus.'
    },
    category: 'Dispute Resolution',
    content: { en: '', fr: '', de: '' }
  }
];
