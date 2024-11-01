import React, { useState } from 'react';
import { X, CreditCard } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

interface WalletModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'deposit' | 'withdraw';
}

export default function WalletModal({ isOpen, onClose, type }: WalletModalProps) {
  const { user } = useAuth();
  const [amount, setAmount] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen || !user) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      // TODO: Implement actual API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      onClose();
    } catch (error) {
      console.error('Transaction failed:', error);
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
            <h2 className="text-2xl font-bold text-center mb-2">
              {type === 'deposit' ? 'Add Funds' : 'Withdraw Funds'}
            </h2>
            <p className="text-gray-600 text-center">
              {type === 'deposit'
                ? 'Add money to your wallet using your preferred payment method'
                : 'Withdraw funds from your wallet to your bank account'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Amount (€)
              </label>
              <input
                type="number"
                min="1"
                step="0.01"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              />
            </div>

            {type === 'deposit' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Card Details
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <CreditCard className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Card number"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  />
                  <input
                    type="text"
                    placeholder="CVC"
                    className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={isProcessing}
              className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50"
            >
              {isProcessing
                ? type === 'deposit'
                  ? 'Processing Payment...'
                  : 'Processing Withdrawal...'
                : type === 'deposit'
                ? 'Add Funds'
                : 'Withdraw Funds'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}