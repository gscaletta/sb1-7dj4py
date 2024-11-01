import React from 'react';
import { Clock, Ticket } from 'lucide-react';
import { Listing } from '../../types';
import { formatCurrency, formatTimeLeft } from '../../utils/formatters';

interface ListingCardProps {
  listing: Listing;
  onBuyTicket: (listingId: string) => void;
  onBuyNow: (listingId: string) => void;
}

export default function ListingCard({ listing, onBuyTicket, onBuyNow }: ListingCardProps) {
  const timeLeft = formatTimeLeft(listing.endDate);
  const progress = (listing.soldTickets / listing.totalTickets) * 100;

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="relative aspect-square">
        <img 
          src={listing.images[0]} 
          alt={listing.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-2">
          <Clock className="w-4 h-4 text-purple-600" />
          <span className="text-sm font-medium">{timeLeft}</span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{listing.title}</h3>
        
        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Ticket Price</span>
            <span className="font-medium">{formatCurrency(listing.ticketPrice)}</span>
          </div>

          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Total Value</span>
            <span className="font-medium">{formatCurrency(listing.price)}</span>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Tickets Sold</span>
              <span className="font-medium">{listing.soldTickets}/{listing.totalTickets}</span>
            </div>
            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-purple-600 rounded-full transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => onBuyTicket(listing.id)}
              className="flex items-center justify-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition-colors"
            >
              <Ticket className="w-4 h-4" />
              <span>Buy Ticket</span>
            </button>
            <button
              onClick={() => onBuyNow(listing.id)}
              className="px-4 py-2 border border-purple-600 text-purple-600 rounded-full hover:bg-purple-50 transition-colors"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}