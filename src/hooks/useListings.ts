import { useState, useEffect } from 'react';
import { Listing } from '../types';

export function useListings(category?: string) {
  const [listings, setListings] = useState<Listing[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchListings = async () => {
      setIsLoading(true);
      try {
        // TODO: Replace with actual API call
        const response = await fetch(`/api/listings${category ? `?category=${category}` : ''}`);
        const data = await response.json();
        setListings(data);
      } catch (err) {
        setError('Failed to fetch listings');
      } finally {
        setIsLoading(false);
      }
    };

    fetchListings();
  }, [category]);

  const purchaseTickets = async (listingId: string, quantity: number) => {
    try {
      // TODO: Replace with actual API call
      const response = await fetch('/api/tickets', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ listingId, quantity }),
      });
      
      if (!response.ok) throw new Error('Failed to purchase tickets');
      
      // Update local state
      setListings(listings.map(listing => {
        if (listing.id === listingId) {
          return {
            ...listing,
            soldTickets: listing.soldTickets + quantity,
          };
        }
        return listing;
      }));
    } catch (err) {
      throw new Error('Failed to purchase tickets');
    }
  };

  return { listings, isLoading, error, purchaseTickets };
}