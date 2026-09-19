export interface PlayZone {
  id: string;
  name: string;
  tagline: string;
  description: string;
  ageRange: string;
  image: string;
  skills: string[];
  features: string[];
  color: string;
  accentBg: string;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  iconName: string;
  color: string;
  skillsGained: string[];
}

export interface PartyPackage {
  id: string;
  name: string;
  badge?: string;
  popular?: boolean;
  pricePerChild: number;
  minKids: number;
  durationHours: number;
  description: string;
  features: string[];
  themeOptions: string[];
}

export interface TicketPass {
  id: string;
  title: string;
  duration: string;
  price: number;
  popular?: boolean;
  notes: string;
  features: string[];
  targetAge: string;
}

export interface Review {
  id: string;
  author: string;
  relation: string;
  rating: number;
  date: string;
  text: string;
  verified: boolean;
  occasion: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'play' | 'party' | 'safety' | 'pricing';
}

export interface PartyInquiry {
  parentName: string;
  parentEmail: string;
  parentPhone: string;
  childName: string;
  childAge: number;
  partyDate: string;
  timeSlot: string;
  packageId: string;
  estimatedKids: number;
  specialRequests: string;
  addons: string[];
}
