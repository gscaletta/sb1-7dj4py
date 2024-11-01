import React from 'react';
import { Euro, ArrowUpRight, ArrowDownLeft, History } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { formatCurrency } from '../../utils/formatters';

interface WalletCardProps {
  onDeposit: () => void;
  onWithdraw: () => void;
  onViewHistory: () => void;
}

export default function WalletCard({ onDeposit, onWithdraw, onViewHistory }: WalletCardProps) {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Your Wallet</h2>
        <button
          onClick={onViewHistory}
          className="text-purple-600 hover:text-purple-700 flex items-center"
        >
          <History className="w-4 h-4 mr-1" />
          History
        </button>
      </div>

      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-6 text-white mb-6">
        <div className="flex items-center mb-2">
          <Euro className="w-6 h-6 mr-2" />
          <span className="text-sm opacity-90">Available Balance</span>
        </div>
        <div className="text-3xl font-bold">
          {formatCurrency(user.wallet.balance)}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={onDeposit}
          className="flex items-center justify-center space-x-2 bg-purple-600 text-white px-4 py-3 rounded-lg hover:bg-purple-700 transition-colors"
        >
          <ArrowDownLeft className="w-5 h-5" />
          <span>Deposit</span>
        </button>
        <button
          onClick={onWithdraw}
          className="flex items-center justify-center space-x-2 border border-purple-600 text-purple-600 px-4 py-3 rounded-lg hover:bg-purple-50 transition-colors"
        >
          <ArrowUpRight className="w-5 h-5" />
          <span>Withdraw</span>
        </button>
      </div>
    </div>
  );
}