export interface NavItem {
  name: string;
  href: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  image: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  title: string;
}

export interface ProductDetails {
  growthRate: string;
  survivalRate: string;
  preferredEnvironment: string;
  harvestPeriod: string;
}

export interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
  details: ProductDetails;
}

export interface DeliveryState {
  name: string;
  deliveryDays: string;
  status: 'active' | 'inactive';
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
}