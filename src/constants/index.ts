// Navigation
export const navigation = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Products', href: '#products' },
  { name: 'Logistics', href: '#logistics' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

// Timeline items for About section
export const timelineItems = [
  {
    year: '2010',
    title: 'Our Beginning',
    description: 'Started with a single pond and a vision to provide quality fish seeds to local farmers.',
    image: 'https://images.pexels.com/photos/2329440/pexels-photo-2329440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    year: '2014',
    title: 'Expansion Phase',
    description: 'Expanded to 5 ponds and introduced new fish seed varieties to meet growing demand.',
    image: 'https://images.pexels.com/photos/4277088/pexels-photo-4277088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    year: '2017',
    title: 'Research Facility',
    description: 'Established our first research facility to improve breeding techniques and seed quality.',
    image: 'https://images.pexels.com/photos/5599607/pexels-photo-5599607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    year: '2021',
    title: 'Multi-Pond Facility',
    description: 'Grew to a 20-pond facility with state-of-the-art equipment and nationwide delivery network.',
    image: 'https://images.pexels.com/photos/4277140/pexels-photo-4277140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
];

// Gallery images
export const galleryImages = [
  {
    src: 'https://images.pexels.com/photos/1458457/pexels-photo-1458457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Fish harvesting operations',
    title: 'Harvesting Process'
  },
  {
    src: 'https://images.pexels.com/photos/3642486/pexels-photo-3642486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Quality inspection of fish seeds',
    title: 'Quality Inspection'
  },
  {
    src: 'https://images.pexels.com/photos/4277069/pexels-photo-4277069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Packaging fish seeds for transport',
    title: 'Packaging Operations'
  },
  {
    src: 'https://images.pexels.com/photos/3642487/pexels-photo-3642487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Loading packages for delivery',
    title: 'Loading for Delivery'
  },
  {
    src: 'https://images.pexels.com/photos/3642485/pexels-photo-3642485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Modern hatchery facilities',
    title: 'Modern Facilities'
  },
  {
    src: 'https://images.pexels.com/photos/4277093/pexels-photo-4277093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Advanced breeding techniques',
    title: 'Breeding Techniques'
  },
];

// Product catalog
export const products = [
  {
    id: 1,
    name: 'Rohu (Labeo rohita)',
    image: 'https://images.pexels.com/photos/1645013/pexels-photo-1645013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Fast-growing freshwater fish species, perfect for commercial farming with high market value.',
    details: {
      growthRate: 'High',
      survivalRate: '85-90%',
      preferredEnvironment: 'Freshwater ponds',
      harvestPeriod: '8-10 months'
    }
  },
  {
    id: 2,
    name: 'Catla (Catla catla)',
    image: 'https://images.pexels.com/photos/2156311/pexels-photo-2156311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Surface-feeder with excellent growth in composite fish culture systems.',
    details: {
      growthRate: 'Very High',
      survivalRate: '80-85%',
      preferredEnvironment: 'Deep freshwater ponds',
      harvestPeriod: '10-12 months'
    }
  },
  {
    id: 3,
    name: 'Mrigal (Cirrhinus mrigala)',
    image: 'https://images.pexels.com/photos/1109001/pexels-photo-1109001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Bottom-feeder that works well in polyculture systems with other carp species.',
    details: {
      growthRate: 'Medium',
      survivalRate: '85-95%',
      preferredEnvironment: 'Shallow ponds with vegetation',
      harvestPeriod: '9-11 months'
    }
  },
  {
    id: 4,
    name: 'Common Carp (Cyprinus carpio)',
    image: 'https://images.pexels.com/photos/1561457/pexels-photo-1561457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Highly adaptable species suitable for various aquaculture systems.',
    details: {
      growthRate: 'High',
      survivalRate: '80-90%',
      preferredEnvironment: 'Versatile, adapts to most conditions',
      harvestPeriod: '6-8 months'
    }
  },
];

// States for delivery
export const deliveryStates = [
  { name: 'Andhra Pradesh', deliveryDays: '1-2', status: 'active' },
  { name: 'Karnataka', deliveryDays: '1-2', status: 'active' },
  { name: 'Tamil Nadu', deliveryDays: '1-2', status: 'active' },
  { name: 'Kerala', deliveryDays: '2-3', status: 'active' },
  { name: 'Telangana', deliveryDays: '1', status: 'active' },
  { name: 'Maharashtra', deliveryDays: '2-3', status: 'active' },
  { name: 'Gujarat', deliveryDays: '3-4', status: 'active' },
  { name: 'Madhya Pradesh', deliveryDays: '2-3', status: 'active' },
  { name: 'Odisha', deliveryDays: '1-2', status: 'active' },
  { name: 'West Bengal', deliveryDays: '2-3', status: 'active' },
  { name: 'Bihar', deliveryDays: '3-4', status: 'active' },
  { name: 'Uttar Pradesh', deliveryDays: '3-4', status: 'active' },
  { name: 'Punjab', deliveryDays: '4-5', status: 'active' },
  { name: 'Haryana', deliveryDays: '3-4', status: 'active' },
  { name: 'Rajasthan', deliveryDays: '3-4', status: 'active' },
];

// Testimonials
export const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    role: 'Fish Farmer, Tamil Nadu',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    quote: 'The Rohu seeds from Mural Fish Seed Hatchery have consistently given me excellent growth rates and survival. Their quality is unmatched in the market.',
    rating: 5
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'Aquaculture Specialist, Karnataka',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    quote: 'We\'ve been sourcing our fish seeds from Mural for over 3 years now. Their on-time delivery and healthy seeds have helped us maximize our farm\'s productivity.',
    rating: 5
  },
  {
    id: 3,
    name: 'Mohan Reddy',
    role: 'Commercial Farm Owner, Andhra Pradesh',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    quote: 'What sets Mural apart is their technical support. They don\'t just sell seeds but provide valuable guidance on optimal growing conditions and feeding regimens.',
    rating: 4
  },
  {
    id: 4,
    name: 'Sunita Patel',
    role: 'Fisheries Cooperative, Gujarat',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    quote: 'Our cooperative has seen a 30% increase in yield since switching to Mural\'s fish seeds. Their logistics network ensures we get fresh, healthy seeds every time.',
    rating: 5
  },
];