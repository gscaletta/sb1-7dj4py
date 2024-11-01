export interface User {
  id: string;
  username: string;
  email: string;
  wallet: {
    balance: number;
    transactions: Transaction[];
  };
  rating: number;
  activeListings: string[];
  activeTickets: string[];
}

export interface Listing {
  id: string;
  sellerId: string;
  title: string;
  description: string;
  images: string[];
  price: number;
  ticketPrice: number;
  reservePrice: number;
  totalTickets: number;
  soldTickets: number;
  endDate: Date;
  status: 'active' | 'completed' | 'cancelled';
  winner?: string;
  tickets: Ticket[];
}

export interface Ticket {
  id: string;
  listingId: string;
  userId: string;
  purchaseDate: Date;
  price: number;
}

export interface Transaction {
  id: string;
  userId: string;
  type: 'deposit' | 'withdrawal' | 'purchase' | 'refund' | 'sale';
  amount: number;
  timestamp: Date;
  status: 'pending' | 'completed' | 'failed';
  reference?: string;
}