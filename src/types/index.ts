export interface Product {
  id: string;
  name: string;
  category: "camera" | "alarm" | "access-control" | "monitoring";
  price: number;
  image: string;
  features: string[];
  specifications: Record<string, string>;
  inStock: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  startingPrice: number;
}

export interface QuoteFormData {
  businessType: "retail" | "office" | "warehouse" | "residential";
  squareFootage: number;
  cameras: number;
  doors: number;
  alarmZones: number;
  monitoring: boolean;
  installation: boolean;
  contactInfo: {
    name: string;
    email: string;
    phone: string;
    company?: string;
  };
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  message: string;
  service?: string;
}