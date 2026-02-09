
export interface Service {
  id: string;
  name: string;
  price: number;
  duration: string;
  description?: string;
  category: 'hair' | 'beard' | 'wax' | 'package';
}

export interface BookingDetails {
  serviceId: string;
  date: string;
  time: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
}

export interface SocialPost {
  id: string;
  imageUrl: string;
  likes: number;
  caption: string;
}
