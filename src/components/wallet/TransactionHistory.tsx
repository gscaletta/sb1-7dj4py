import React from 'react';
import { ArrowUpRight, ArrowDownLeft, Tag, RefreshCw, CreditCard } from 'lucide-react';
import { Transaction } from '../../types';
import { formatCurrency } from '../../utils/formatters';

interface TransactionHistoryProps {
  transactions: Transaction[];
}

export default function TransactionHistory({ transactions }: TransactionHistoryProps) {
  const getTransactionIcon = (type: Transaction['type']) => {
    switch (type) {
      case 'deposit':
        return <ArrowDownLeft className="w-4 h-4 text-green-500" />;
      case 'withdrawal':
        return <ArrowUpRight className="w-4 h-4 text-red-500" />;
      case 'purchase':
        return <Tag className="w-4 h-4 text-purple-500" />;
      case 'refund':
        return <RefreshCw className="w-4 h-4 text-blue-500" />;
      case 'sale':
        return <CreditCard className="w-4 h-4 text-yellow-500" />;
    }
  };

  const getTransactionColor = (type: Transaction['type']) => {
    switch (type) {
      case 'deposit':
      case 'refund':
      case 'sale':
        return 'text-green-600';
      case 'withdrawal':
      case 'purchase':
        return 'text-red-600';
    }
  };

  return (
    <div className="space-y-4">
      {transactions.map((transaction) => (
        <div
          key={transaction.id}
          className="bg-white rounded-lg p-4 flex items-center justify-between"
        >
          <div className="flex items-center space-x-4">
            <div className="p-2 bg-gray-50 rounded-full">
              {getTransactionIcon(transaction.type)}
            </div>
            <div>
              <div className="font-medium capitalize">
                {transaction.type}
              </div>
              <div className="text-sm text-gray-500">
                {new Date(transaction.timestamp).toLocaleDateString()}
              </div>
            </div>
          </div>
          <div className={`font-medium ${getTransactionColor(transaction.type)}`}>
            {transaction.type === 'withdrawal' || transaction.type === 'purchase' ? '- ' : '+ '}
            {formatCurrency(transaction.amount)}
          </div>
        </div>
      ))}

      {transactions.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No transactions yet
        </div>
      )}
    </div>
  );
}