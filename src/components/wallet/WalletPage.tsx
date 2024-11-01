import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import WalletCard from './WalletCard';
import TransactionHistory from './TransactionHistory';
import WalletModal from './WalletModal';

export default function WalletPage() {
  const { user } = useAuth();
  const [modalType, setModalType] = useState<'deposit' | 'withdraw' | null>(null);
  const [showHistory, setShowHistory] = useState(false);

  if (!user) return null;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <WalletCard
          onDeposit={() => setModalType('deposit')}
          onWithdraw={() => setModalType('withdraw')}
          onViewHistory={() => setShowHistory(true)}
        />

        <div>
          <h3 className="text-lg font-semibold mb-4">Recent Transactions</h3>
          <TransactionHistory
            transactions={user.wallet.transactions.slice(0, 5)}
          />
        </div>
      </div>

      <WalletModal
        isOpen={modalType !== null}
        onClose={() => setModalType(null)}
        type={modalType || 'deposit'}
      />
    </div>
  );
}