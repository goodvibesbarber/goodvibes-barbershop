
import { Service, SocialPost } from './types';

export const COLORS = {
  background: '#FAFAF9',
  matteBlack: '#18181B',
  accent: '#B8860B', // Warm Gold/Bronze
  accentHover: '#9A6E09'
};

export const SERVICES: Service[] = [
  { id: '1', name: 'Haircut', price: 35, duration: '40 mins', category: 'hair', description: 'Precision fade or classic cut with consultation.' },
  { id: '2', name: 'Student Haircut', price: 25, duration: '30 mins', category: 'hair', description: 'Fresh look for students. Valid ID required.' },
  { id: '3', name: 'Beard Trim', price: 25, duration: '30 mins', category: 'beard', description: 'Shape up and lineup for your beard.' },
  { id: '4', name: 'Clean Shave', price: 30, duration: '30 mins', category: 'beard', description: 'Smooth, traditional straight-razor shave.' },
  { id: '5', name: 'Ear Wax', price: 8, duration: '10 mins', category: 'wax' },
  { id: '6', name: 'Nose Wax', price: 8, duration: '10 mins', category: 'wax' },
  { id: '7', name: 'Vibes Experience', price: 55, duration: '60 mins', category: 'package', description: 'Full Service: Haircut & Beard Trim/Shave.' },
  { id: '8', name: 'Good Vibes Experience', price: 70, duration: '90 mins', category: 'package', description: 'The Works: Haircut, Head Massage, Beard/Shave, and Facial.' },
];

export const INSTAGRAM_POSTS: SocialPost[] = [
  { id: 'p1', imageUrl: 'https://picsum.photos/seed/fade1/600/600', likes: 124, caption: 'Sharp skin fade for the weekend. #GoodVibes' },
  { id: 'p2', imageUrl: 'https://picsum.photos/seed/fade2/600/600', likes: 89, caption: 'Beard sculpting at its finest.' },
  { id: 'p3', imageUrl: 'https://picsum.photos/seed/fade3/600/600', likes: 215, caption: 'The full Good Vibes Experience. Relaxed.' },
  { id: 'p4', imageUrl: 'https://picsum.photos/seed/fade4/600/600', likes: 156, caption: 'Modern industrial vibes in Singapore.' },
  { id: 'p5', imageUrl: 'https://picsum.photos/seed/fade5/600/600', likes: 92, caption: 'Back to school fresh.' },
  { id: 'p6', imageUrl: 'https://picsum.photos/seed/fade6/600/600', likes: 178, caption: 'Join the tribe. Book today.' },
];

export const SHOP_INFO = {
  address: 'BLK 360 YUNG AN ROAD #04-101, SINGAPORE 610360',
  hours: 'Mon – Sat | 11:00 AM – 8:00 PM (Closed Sundays)',
  phone: '+65 8727 3741',
  email: 'pasposip@gmail.com',
  instagram: '@GoodVibesBarberShop'
};
