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
  expertise: string[];
  education: string[];
  publications: string[];
  languages: string[];
  offices: string[];
  email: string;
  yearsOfExperience: number;
  barAdmissions: string[];
  memberships: string[];
  representativeMatters?: string[]; // IDs of matters
}

export interface Industry {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  icon: string;
}

export interface RepresentativeMatter {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  value?: string;
  industryId: string;
  practiceAreaId: string;
}

export interface PracticeArea {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  icon: string;
  longDescription: LocalizedString;
}

export interface Client {
  id: string;
  name: string;
  industry: string;
  logo?: string;
  engagementHistory: string[];
}

export enum MatterStatus {
  INTAKE = 'Intake',
  CONFLICT_CHECK = 'Conflict Check',
  STRATEGY = 'Strategy',
  EXECUTION = 'Execution',
  RESOLUTION = 'Resolution',
  CLOSED = 'Closed'
}

export interface Matter {
  id: string;
  title: LocalizedString;
  clientId: string;
  jurisdictions: string[];
  lawyerIds: string[];
  status: MatterStatus;
  riskLevel: 'Low' | 'Medium' | 'High';
  progress: number; // 0-100
  billingStatus: 'Up to Date' | 'Pending' | 'Overdue';
  totalBilled: string;
  updatedAt: string;
}

export interface RegulatoryUpdate {
  id: string;
  source: 'ESMA' | 'ECB' | 'FCA' | 'SEC' | 'DOJ';
  title: LocalizedString;
  date: string;
  summary: LocalizedString;
  riskSignal: 'Stable' | 'Caution' | 'High Alert';
}

export interface Document {
  id: string;
  name: string;
  matterId: string;
  type: string;
  size: string;
  uploadedAt: string;
  isEncrypted: boolean;
}

export interface BillingItem {
  id: string;
  matterId: string;
  description: string;
  amount: string;
  date: string;
  status: 'Invoiced' | 'Paid' | 'Draft';
}

export interface Message {
  id: string;
  senderId: string;
  recipientId: string;
  matterId?: string;
  content: string;
  timestamp: string;
  isPriority: boolean;
}

export interface Office {
  id: string;
  city: string;
  country: string;
  address: string;
  phone: string;
  image: string;
  focus: LocalizedString;
  description: LocalizedString;
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
