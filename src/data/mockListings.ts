import { Listing } from '../types';

const now = new Date();
const day = 24 * 60 * 60 * 1000;

export const mockListings: Record<string, Listing[]> = {
  tech: [
    {
      id: '1',
      sellerId: '1',
      title: 'iPhone 15 Pro Max',
      description: 'Brand new, sealed in box',
      images: ['https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80'],
      price: 1299,
      ticketPrice: 1,
      reservePrice: 1000,
      totalTickets: 1299,
      soldTickets: 450,
      endDate: new Date(now.getTime() + 5 * day),
      status: 'active',
      tickets: []
    },
    {
      id: '2',
      sellerId: '2',
      title: 'MacBook Pro 16"',
      description: 'M3 Max, 32GB RAM, 1TB SSD',
      images: ['https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80'],
      price: 3499,
      ticketPrice: 2,
      reservePrice: 3000,
      totalTickets: 1750,
      soldTickets: 890,
      endDate: new Date(now.getTime() + 3 * day),
      status: 'active',
      tickets: []
    },
    {
      id: '3',
      sellerId: '3',
      title: 'Sony A7 IV',
      description: 'Mirrorless Camera with 28-70mm Lens',
      images: ['https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80'],
      price: 2499,
      ticketPrice: 1.5,
      reservePrice: 2000,
      totalTickets: 1666,
      soldTickets: 755,
      endDate: new Date(now.getTime() + 7 * day),
      status: 'active',
      tickets: []
    }
  ],
  luxury: [
    {
      id: '4',
      sellerId: '4',
      title: 'Rolex Submariner',
      description: 'Date 41mm Steel Black Dial',
      images: ['https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&w=800&q=80'],
      price: 15000,
      ticketPrice: 5,
      reservePrice: 12000,
      totalTickets: 3000,
      soldTickets: 1200,
      endDate: new Date(now.getTime() + 10 * day),
      status: 'active',
      tickets: []
    },
    {
      id: '5',
      sellerId: '5',
      title: 'Louis Vuitton Bag',
      description: 'Neverfull MM Monogram Canvas',
      images: ['https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80'],
      price: 2190,
      ticketPrice: 1,
      reservePrice: 1800,
      totalTickets: 2190,
      soldTickets: 980,
      endDate: new Date(now.getTime() + 4 * day),
      status: 'active',
      tickets: []
    }
  ],
  gaming: [
    {
      id: '6',
      sellerId: '6',
      title: 'PS5 Digital Edition',
      description: 'Brand new with 2 controllers',
      images: ['https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80'],
      price: 499,
      ticketPrice: 0.5,
      reservePrice: 400,
      totalTickets: 998,
      soldTickets: 445,
      endDate: new Date(now.getTime() + 6 * day),
      status: 'active',
      tickets: []
    }
  ]
};