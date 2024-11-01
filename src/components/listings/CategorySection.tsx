import React from 'react';
import { ChevronRight } from 'lucide-react';
import ListingCard from './ListingCard';
import { Listing } from '../../types';

interface CategorySectionProps {
  title: string;
  description: string;
  listings: Listing[];
  onBuyTicket: (listingId: string) => void;
  onBuyNow: (listingId: string) => void;
}

export default function CategorySection({
  title,
  description,
  listings,
  onBuyTicket,
  onBuyNow,
}: CategorySectionProps) {
  return (
    <section className="py-16">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-3xl font-bold mb-2">{title}</h2>
          <p className="text-gray-600">{description}</p>
        </div>
        <button className="flex items-center text-purple-600 hover:text-purple-700 transition-colors">
          View All <ChevronRight className="w-4 h-4 ml-1" />
        </button>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {listings.map((listing) => (
          <ListingCard
            key={listing.id}
            listing={listing}
            onBuyTicket={onBuyTicket}
            onBuyNow={onBuyNow}
          />
        ))}
      </div>
    </section>
  );
}