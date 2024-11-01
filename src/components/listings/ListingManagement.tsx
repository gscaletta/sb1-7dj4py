import React, { useState } from 'react';
import { Plus, Package, Timer, AlertCircle } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { Listing } from '../../types';
import { formatCurrency, formatTimeLeft } from '../../utils/formatters';
import CreateListingForm from './CreateListingForm';

export default function ListingManagement() {
  const { user } = useAuth();
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [activeListings, setActiveListings] = useState<Listing[]>([]);

  if (!user) return null;

  const handleStartDraw = async (listingId: string) => {
    try {
      // TODO: Implement API call to start the draw
      console.log('Starting draw for listing:', listingId);
    } catch (error) {
      console.error('Failed to start draw:', error);
    }
  };

  const handleCancelListing = async (listingId: string) => {
    try {
      // TODO: Implement API call to cancel listing
      console.log('Cancelling listing:', listingId);
    } catch (error) {
      console.error('Failed to cancel listing:', error);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Your Listings</h1>
        <button
          onClick={() => setShowCreateForm(true)}
          className="flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
        >
          <Plus className="w-5 h-5" />
          <span>Create Listing</span>
        </button>
      </div>

      {activeListings.length === 0 ? (
        <div className="text-center py-12">
          <Package className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No Active Listings</h3>
          <p className="text-gray-600">
            Start selling by creating your first listing
          </p>
        </div>
      ) : (
        <div className="grid gap-6">
          {activeListings.map((listing) => (
            <div
              key={listing.id}
              className="bg-white rounded-xl shadow-sm p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-medium">{listing.title}</h3>
                  <p className="text-gray-600">{listing.description}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Timer className="w-5 h-5 text-purple-600" />
                  <span className="text-sm font-medium">
                    {formatTimeLeft(listing.endDate)}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">Total Value</div>
                  <div className="font-medium">{formatCurrency(listing.price)}</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">Reserve Price</div>
                  <div className="font-medium">{formatCurrency(listing.reservePrice)}</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">Tickets Sold</div>
                  <div className="font-medium">{listing.soldTickets}/{listing.totalTickets}</div>
                </div>
              </div>

              {listing.soldTickets >= listing.totalTickets && (
                <div className="bg-green-50 text-green-800 p-3 rounded-lg flex items-center mb-4">
                  <AlertCircle className="w-5 h-5 mr-2" />
                  All tickets sold! You can start the draw.
                </div>
              )}

              <div className="flex space-x-4">
                <button
                  onClick={() => handleStartDraw(listing.id)}
                  disabled={listing.soldTickets < listing.totalTickets}
                  className="flex-1 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50"
                >
                  Start Draw
                </button>
                <button
                  onClick={() => handleCancelListing(listing.id)}
                  className="flex-1 border border-red-600 text-red-600 px-4 py-2 rounded-lg hover:bg-red-50 transition-colors"
                >
                  Cancel Listing
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {showCreateForm && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <div className="fixed inset-0 bg-black bg-opacity-25" onClick={() => setShowCreateForm(false)} />
            <div className="relative bg-white w-full max-w-2xl rounded-xl shadow-lg p-6">
              <button
                onClick={() => setShowCreateForm(false)}
                className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
              >
                <X className="h-6 w-6" />
              </button>
              <CreateListingForm />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}