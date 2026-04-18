export interface LocalizedString {
  en: string;
  fr: string;
  de: string;
}

export interface Lawyer {
  id: string;
  name: string;
  title: LocalizedString;
  photo: string;
  bio: LocalizedString;
  expertise: string[]; // These are keys for expertise lookups or just strings
  education: string[];
  publications: string[];
  languages: string[];
  offices: string[];
  email: string;
}

export interface PracticeArea {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  icon: string;
  longDescription: LocalizedString;
}

export interface Office {
  id: string;
  city: string;
  country: string;
  address: string;
  phone: string;
  image: string;
  coordinates: { lat: number; lng: number };
}

export interface Insight {
  id: string;
  title: LocalizedString;
  date: string;
  location: string;
  excerpt: LocalizedString;
  content: LocalizedString;
  category: string;
}
