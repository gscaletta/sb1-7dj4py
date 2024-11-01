import React, { useState } from 'react';
import { X } from 'lucide-react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [mode, setMode] = useState<'login' | 'register'>('login');

  if (!isOpen) return null;

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
              {mode === 'login' ? 'Welcome Back' : 'Create Account'}
            </h2>
            <p className="text-gray-600 text-center">
              {mode === 'login'
                ? 'Enter your credentials to access your account'
                : 'Fill in your details to get started'}
            </p>
          </div>

          {mode === 'login' ? <LoginForm /> : <RegisterForm />}

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              {mode === 'login' ? "Don't have an account? " : 'Already have an account? '}
              <button
                onClick={() => setMode(mode === 'login' ? 'register' : 'login')}
                className="text-purple-600 hover:text-purple-700 font-medium"
              >
                {mode === 'login' ? 'Sign up' : 'Log in'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}