export const WHATSAPP_NUMBER = '919315332663';
export const DISPLAY_PHONE = '+91 9315332663';
export const BUSINESS_ADDRESS = 'E-117, Mayapuri, New Delhi';
export const OPERATING_HOURS = 'Monday – Sunday · 9:00 AM – 8:00 PM';

export function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const HERO_IMAGE = '/src/assets/images/hero_scrap_facility_1795014462513.jpg';

export interface ServiceItem {
  id: string;
  index: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  whatsappMessage: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'car-scrapping',
    index: '01',
    title: 'Car Scrapping',
    description:
      'Scrap your petrol, diesel, or CNG hatchback, sedan, or SUV with transparent scrap valuation and pickup coordination across Delhi NCR.',
    image: '/src/assets/images/car_scrapping_1795014462413.jpg',
    imageAlt: 'Old hatchback sedan ready for car scrapping inside a clean recycling bay',
    whatsappMessage:
      'Hello JSScrap, I want to scrap my old car. Please provide a quotation.',
  },
  {
    id: 'bike-scrapping',
    index: '02',
    title: 'Bike Scrapping',
    description:
      'Sell old, non-running, or out-of-registration commuter and sports motorcycles for fair metal and component scrap value.',
    image: '/src/assets/images/bike_scrapping_1795014461500.jpg',
    imageAlt: 'Old commuter motorcycle parked in an organized bike scrapping workshop',
    whatsappMessage:
      'Hello JSScrap, I want to scrap my old bike. Please share the scrap price and pickup details.',
  },
  {
    id: 'scooty-scrapping',
    index: '03',
    title: 'Scooty Scrapping',
    description:
      'Quick doorstep evaluation and scrap disposal for used urban scooters and gearless two-wheelers with simple WhatsApp booking.',
    image: '/src/assets/images/scooty_scrapping_1795014466720.jpg',
    imageAlt: 'Used urban scooter in a modern vehicle evaluation bay for scooty scrapping',
    whatsappMessage:
      'Hello JSScrap, I want to scrap my scooty. Please share the details and price estimate.',
  },
  {
    id: 'old-vehicle-scrapping',
    index: '04',
    title: 'Old Vehicle Scrapping',
    description:
      'End-of-life vehicle disposal for 10-year diesel and 15-year petrol vehicles in Delhi NCR with clear documentation guidance.',
    image: '/src/assets/images/old_vehicle_fleet_1795014466029.jpg',
    imageAlt: 'End-of-life sedan parked in a modern automotive dismantling yard',
    whatsappMessage:
      'Hello JSScrap, I want to scrap my old vehicle in Delhi NCR. Please guide me on pricing and process.',
  },
  {
    id: 'accident-damaged-scrapping',
    index: '05',
    title: 'Accident-Damaged Vehicle Scrapping',
    description:
      'Sell total-loss, collision-damaged, or immobile cars and two-wheelers without the hassle of costly repairs.',
    image: '/src/assets/images/accident_damaged_vehicle_1795014451297.jpg',
    imageAlt: 'Accident-damaged silver sedan in a clean salvage bay',
    whatsappMessage:
      'Hello JSScrap, I want to scrap an accident-damaged vehicle. Please share a quotation.',
  },
  {
    id: 'commercial-vehicle-scrapping',
    index: '06',
    title: 'Commercial Vehicle Scrapping',
    description:
      'Scrap buying for old delivery vans, light commercial pickups, taxis, and retired fleet vehicles across Delhi NCR.',
    image: '/src/assets/images/commercial_vehicle_scrap_1795014558983.jpg',
    imageAlt: 'Retired commercial cargo van parked at an organized vehicle recycling depot',
    whatsappMessage:
      'Hello JSScrap, I want to enquire about commercial vehicle scrapping. Please share the details.',
  },
];

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  iconName: 'truck' | 'indian-rupee' | 'message-circle' | 'shield-check' | 'clipboard-check' | 'map-pin';
}

export const WHY_CHOOSE_ITEMS: BenefitItem[] = [
  {
    id: 'pickup',
    title: 'Convenient Pickup Service',
    description:
      'Doorstep vehicle pickup coordination scheduled around your availability, subject to location and vehicle confirmation.',
    iconName: 'truck',
  },
  {
    id: 'value',
    title: 'Competitive Scrap Value',
    description:
      'Clear scrap price quotations calculated fairly based on your vehicle category, model, weight, and condition.',
    iconName: 'indian-rupee',
  },
  {
    id: 'whatsapp',
    title: 'Easy WhatsApp Communication',
    description:
      'Share vehicle photos and registration details directly on WhatsApp without lengthy forms or waiting in queues.',
    iconName: 'message-circle',
  },
  {
    id: 'assistance',
    title: 'Professional Assistance',
    description:
      'Dedicated team guidance from our E-117 Mayapuri, New Delhi desk on inspection, chassis verification, and handover paperwork.',
    iconName: 'shield-check',
  },
  {
    id: 'hassle-free',
    title: 'Hassle-Free Process',
    description:
      'Structured four-step workflow from initial quotation to pickup scheduling and final vehicle handover.',
    iconName: 'clipboard-check',
  },
  {
    id: 'coverage',
    title: 'Delhi NCR Service Coverage',
    description:
      'Serving vehicle owners across Mayapuri, Delhi, Gurgaon, Noida, Greater Noida, Ghaziabad, and Faridabad.',
    iconName: 'map-pin',
  },
];

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export const HOW_IT_WORKS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Contact Us',
    description: 'Send your vehicle details and photos through WhatsApp.',
  },
  {
    step: '02',
    title: 'Get Your Quote',
    description:
      'Our team reviews the vehicle details and provides a scrap price quotation.',
  },
  {
    step: '03',
    title: 'Schedule Pickup',
    description: 'Arrange a convenient pickup after confirming the offer.',
  },
  {
    step: '04',
    title: 'Complete the Process',
    description:
      'Complete the required documentation and vehicle handover as per applicable regulations.',
  },
];

export interface AcceptedVehicle {
  id: string;
  label: string;
  category: 'four-wheeler' | 'two-wheeler' | 'damaged' | 'commercial';
  subtitle: string;
  image: string;
  imageAlt: string;
  whatsappMessage: string;
}

export const ACCEPTED_VEHICLES: AcceptedVehicle[] = [
  {
    id: 'old-cars',
    label: 'Old Cars',
    category: 'four-wheeler',
    subtitle: 'Hatchbacks · Sedans · SUVs · 10/15+ Year Old Cars',
    image: '/src/assets/images/old_vehicle_fleet_1795014466029.jpg',
    imageAlt: 'Old passenger car accepted for scrapping',
    whatsappMessage:
      'Hello JSScrap, I want to scrap my old car. Please share the valuation process.',
  },
  {
    id: 'used-bikes',
    label: 'Used Bikes',
    category: 'two-wheeler',
    subtitle: 'Commuter Motorcycles · Non-Running Bikes',
    image: '/src/assets/images/bike_scrapping_1795014461500.jpg',
    imageAlt: 'Used commuter motorcycle accepted for scrapping',
    whatsappMessage:
      'Hello JSScrap, I have a used bike to scrap. Please share a scrap quote.',
  },
  {
    id: 'old-scooters',
    label: 'Old Scooters',
    category: 'two-wheeler',
    subtitle: 'Gearless Scooties · Vintage & Unfit Scooters',
    image: '/src/assets/images/scooty_scrapping_1795014466720.jpg',
    imageAlt: 'Old urban scooter accepted for scrapping',
    whatsappMessage:
      'Hello JSScrap, I want to scrap an old scooter. Please share details.',
  },
  {
    id: 'accidental-vehicles',
    label: 'Accidental Vehicles',
    category: 'damaged',
    subtitle: 'Collision-Affected · Insurance Total-Loss Units',
    image: '/src/assets/images/accident_damaged_vehicle_1795014451297.jpg',
    imageAlt: 'Accidental car with front collision damage accepted for scrapping',
    whatsappMessage:
      'Hello JSScrap, I want to enquire about scrapping an accidental vehicle.',
  },
  {
    id: 'damaged-vehicles',
    label: 'Damaged Vehicles',
    category: 'damaged',
    subtitle: 'Rusted · Non-Starting · Flood or Engine-Seized',
    image: '/src/assets/images/car_scrapping_1795014462413.jpg',
    imageAlt: 'Weathered and non-running damaged car accepted for scrapping',
    whatsappMessage:
      'Hello JSScrap, I have a damaged non-running vehicle to scrap. Please share a quote.',
  },
  {
    id: 'commercial-vehicles',
    label: 'Commercial Vehicles',
    category: 'commercial',
    subtitle: 'Cargo Vans · Light Pickups · Fleet Vehicles',
    image: '/src/assets/images/commercial_vehicle_scrap_1795014558983.jpg',
    imageAlt: 'Old white light commercial van accepted for scrapping',
    whatsappMessage:
      'Hello JSScrap, I want to scrap a commercial vehicle. Please share the details.',
  },
];

export const SERVICE_LOCATIONS: string[] = [
  'Mayapuri',
  'Delhi',
  'New Delhi',
  'Dwarka',
  'Rohini',
  'Najafgarh',
  'Uttam Nagar',
  'Janakpuri',
  'Vasant Kunj',
  'Gurgaon',
  'Noida',
  'Greater Noida',
  'Ghaziabad',
  'Faridabad',
];

export interface DocumentChecklistItem {
  code: string;
  title: string;
  detail: string;
  requirement: string;
}

export const DOCUMENT_CHECKLIST: DocumentChecklistItem[] = [
  {
    code: 'DOC-01',
    title: 'Registration Certificate (RC)',
    detail:
      'Original physical RC or verified digital RC copy via mParivahan / DigiLocker to confirm vehicle registration details.',
    requirement: 'Standard Requirement',
  },
  {
    code: 'DOC-02',
    title: 'Owner Identity & Address Proof',
    detail:
      'Aadhaar Card, PAN Card, or Passport matching the registered owner name on the RC.',
    requirement: 'Standard Requirement',
  },
  {
    code: 'DOC-03',
    title: 'Chassis & Engine Verification',
    detail:
      'Clear photo or on-site inspection of the chassis number stamped on the vehicle frame for handover record.',
    requirement: 'Verified at Pickup',
  },
  {
    code: 'DOC-04',
    title: 'Bank Loan Closure / NOC',
    detail:
      'Required only if the vehicle RC still shows active hypothecation or bank finance.',
    requirement: 'If Financed',
  },
  {
    code: 'DOC-05',
    title: 'Authorisation / Company Letter',
    detail:
      'Simple signed authorisation if a family member or corporate representative completes the handover.',
    requirement: 'If Applicable',
  },
];

export interface ValuationFactorItem {
  index: string;
  title: string;
  detail: string;
}

export const VALUATION_FACTORS: ValuationFactorItem[] = [
  {
    index: '01',
    title: 'Vehicle Curb Weight & Metal Grade',
    detail:
      'Quotations reflect total recoverable steel, aluminium, copper, and alloy content based on the exact vehicle model.',
  },
  {
    index: '02',
    title: 'Component Completeness',
    detail:
      'Vehicles with intact engine, transmission, radiator, battery, and catalytic assembly command higher scrap value.',
  },
  {
    index: '03',
    title: 'Mayapuri Market Scrap Rates',
    detail:
      'Pricing aligns with prevailing daily automotive metal rates at our E-117 Mayapuri, New Delhi scrap hub.',
  },
  {
    index: '04',
    title: 'Recovery & Pickup Logistics',
    detail:
      'Whether the vehicle can be driven onto transport or requires winch/flatbed towing from basement or roadside parking.',
  },
];

export interface HandoverPrepItem {
  index: string;
  title: string;
  detail: string;
}

export const HANDOVER_PREP_ITEMS: HandoverPrepItem[] = [
  {
    index: '01',
    title: 'Clear Personal Belongings & FASTag',
    detail:
      'Remove personal items, dashcams, music stereos (if retained), and deactivate or peel off your FASTag sticker.',
  },
  {
    index: '02',
    title: 'Share 4–5 Clear Vehicle Photos',
    detail:
      'Send front, rear, side, and odometer/chassis photos on WhatsApp for a fast and accurate price quotation.',
  },
  {
    index: '03',
    title: 'Confirm Parking & Towing Access',
    detail:
      'Let our team know if the vehicle has flat tyres, missing keys, or is parked inside a narrow lane or basement.',
  },
  {
    index: '04',
    title: 'Payment & Handover Settlement',
    detail:
      'Receive agreed payment via UPI, Bank Transfer (IMPS/NEFT), or cash at the time of verified vehicle handover.',
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'How can I scrap my old car?',
    answer:
      'Send your car model, fuel type, manufacturing year, location in Delhi NCR, and a few clear photos to JSScrap on WhatsApp (+91 9315332663). Our team at E-117, Mayapuri, New Delhi will review the details, share a scrap price quotation, and help coordinate pickup and required handover documentation.',
  },
  {
    question: 'Do you buy old bikes and scooters?',
    answer:
      'Yes. JSScrap buys old, unused, non-running, or out-of-registration motorcycles and scooters (scooties) across Delhi NCR. Share your two-wheeler details and photos on WhatsApp for a quick quotation.',
  },
  {
    question: 'Is vehicle pickup available in Delhi NCR?',
    answer:
      'Yes, dispatched from our Mayapuri, New Delhi hub, we assist with vehicle pickup enquiries across Delhi, New Delhi, Dwarka, Rohini, Najafgarh, Uttam Nagar, Janakpuri, Vasant Kunj, Gurgaon, Noida, Greater Noida, Ghaziabad, and Faridabad. Pickup availability and scheduling are subject to confirmation based on your exact location and vehicle type.',
  },
  {
    question: 'How can I get a scrap price?',
    answer:
      'Getting a scrap price is simple: click any WhatsApp button on this website to message +91 9315332663 with your vehicle make, model, year, running condition, and photos. Our team will evaluate the details and respond with a competitive quotation.',
  },
  {
    question: 'What documents are required?',
    answer:
      'Typically, vehicle ownership proof such as the Registration Certificate (RC) and owner ID proof (Aadhaar/PAN) are required to verify ownership and complete the scrapping handover as per applicable regulations. Contact our team on WhatsApp to confirm the exact document checklist for your vehicle.',
  },
  {
    question: 'Do you accept accident-damaged vehicles?',
    answer:
      'Yes, we accept accident-damaged, immobile, rusted, and non-running cars, two-wheelers, and commercial vehicles. Send photos showing the current condition on WhatsApp so we can provide an accurate scrap quote and discuss pickup.',
  },
  {
    question: 'How do I contact JSScrap?',
    answer:
      'You can reach JSScrap (Jishan Scrap) directly on WhatsApp or phone at +91 9315332663, or visit our hub at E-117, Mayapuri, New Delhi. Every WhatsApp button on this page opens a direct chat with our team.',
  },
];
