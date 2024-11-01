import React, { useState } from 'react';
import { X, Ticket, AlertCircle } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { Listing } from '../../types';
import { formatCurrency } from '../../utils/formatters';

interface BuyTicketModalProps {
  isOpen: boolean;
  onClose: () => void;
  listing: Listing;
  onPurchase: (quantity: number) => Promise<void>;
}

export default function BuyTicketModal({ isOpen, onClose, listing, onPurchase }: BuyTicketModalProps) {
  const { user } = useAuth();
  const [quantity, setQuantity] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen || !user) return null;

  const maxTickets = Math.min(5, listing.totalTickets - listing.soldTickets);
  const totalCost = quantity * listing.ticketPrice;
  const insufficientFunds = totalCost > (user.wallet.balance || 0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsProcessing(true);

    try {
      await onPurchase(quantity);
      onClose();
    } catch (err) {
      setError('Failed to purchase tickets. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="fixed inset-0 bg-black bg-opacity-25" onClick={onClose} />

        <div className="relative bg-white w-full max-w-md rounded-xl shadow-lg p-6">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="mb-6">
            <h2 className="text-2xl font-bold text-center mb-2">Buy Tickets</h2>
            <p className="text-gray-600 text-center">
              Purchase tickets for a chance to win {listing.title}
            </p>
          </div>

          {error && (
            <div className="mb-4 bg-red-50 text-red-600 p-3 rounded-lg flex items-center">
              <AlertCircle className="w-5 h-5 mr-2" />
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Number of Tickets
              </label>
              <select
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                {Array.from({ length: maxTickets }, (_, i) => i + 1).map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? 'ticket' : 'tickets'} - {formatCurrency(num * listing.ticketPrice)}
                  </option>
                ))}
              </select>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Price per ticket</span>
                <span className="font-medium">{formatCurrency(listing.ticketPrice)}</span>
              </div>
              <div className="flex justify-between font-medium">
                <span>Total cost</span>
                <span>{formatCurrency(totalCost)}</span>
              </div>
            </div>

            {insufficientFunds && (
              <div className="bg-yellow-50 text-yellow-800 p-3 rounded-lg flex items-center">
                <AlertCircle className="w-5 h-5 mr-2" />
                Insufficient funds. Please add money to your wallet.
              </div>
            )}

            <button
              type="submit"
              disabled={isProcessing || insufficientFunds}
              className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50 flex items-center justify-center space-x-2"
            >
              <Ticket className="w-5 h-5" />
              <span>
                {isProcessing ? 'Processing...' : `Buy ${quantity} ${quantity === 1 ? 'Ticket' : 'Tickets'}`}
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}