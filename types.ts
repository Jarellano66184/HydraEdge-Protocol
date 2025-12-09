
export interface WeekData {
  week: number;
  title: string;
  activity: string;
  output: string;
  details?: string[];
  tags?: string[];
}

export interface SectionData {
  id: string;
  title: string;
  description: string;
  weeks: WeekData[];
}

export enum SectionId {
  FOUNDATION = 'foundation',
  CONCEPT = 'concept',
  PROTOTYPE = 'prototype',
  LAUNCH = 'launch',
}

export interface FinancialMetric {
  name: string;
  value: number;
  fill?: string;
}

export interface Persona {
  role: string;
  name: string;
  quote: string;
  painPoint: string;
  need: string;
  color: string;
}

export interface ProductLine {
  id: string;
  title: string;
  label: string;
  concept: string;
  keyFeature: string;
  flavors: string[];
  theme: {
    bg: string;
    text: string;
    border: string;
    accent: string;
  };
}

export interface FundAllocation {
  category: string;
  percentage: number;
  amount: string;
  color: string;
  items: {
    label: string;
    detail: string;
  }[];
}

export interface Ingredient {
  name: string;
  dosage?: string;
  source: string;
  activeCompounds?: string;
  function: string;
  benefit: string;
  category: 'Cognitive' | 'Hydration' | 'Fuel' | 'Wellness' | 'Flavor';
}

export interface NarrativeBeat {
  id: string;
  title: string;
  content: string;
  author?: string;
  role?: string;
  type: 'founder' | 'testimonial' | 'vision';
}
