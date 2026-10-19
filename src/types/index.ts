export type ProductCategory =
  | 'materiel-informatique'
  | 'impression-consommables'
  | 'fournitures-bureau'
  | 'reseau-securite'
  | 'mobilier-bureau';

export type RequestType = 'produits' | 'prestation' | 'solution' | 'contact';

export interface LeadSubmission {
  id: string;
  createdAt: string;
  type: RequestType;
  fullName: string;
  company: string;
  email: string;
  phone: string;
  // Category / Service / Solution
  category?: string;
  service?: string;
  solutionType?: string;
  // Descriptions and details
  description: string;
  quantity?: string;
  budget?: string;
  timeline?: string;
  userCount?: string;
  subject?: string;
  attachmentName?: string;
  attachmentData?: string; // base64 representation if uploaded
  status: 'nouveau' | 'en_cours' | 'traite' | 'archive';
  notes?: string;
}

export interface ProductCategoryInfo {
  id: ProductCategory;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  features: string[];
  equipmentExamples: string[];
}
