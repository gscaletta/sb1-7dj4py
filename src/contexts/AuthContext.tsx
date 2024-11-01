import React, { createContext, useContext, useState, useCallback } from 'react';
import { User } from '../types';

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, username: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = useCallback(async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // TODO: Implement actual API call
      const mockUser: User = {
        id: '1',
        email,
        username: email.split('@')[0],
        wallet: {
          balance: 0,
          transactions: []
        },
        rating: 5,
        activeListings: [],
        activeTickets: []
      };
      setUser(mockUser);
    } catch (error) {
      throw new Error('Login failed');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const register = useCallback(async (email: string, password: string, username: string) => {
    setIsLoading(true);
    try {
      // TODO: Implement actual API call
      const mockUser: User = {
        id: '1',
        email,
        username,
        wallet: {
          balance: 0,
          transactions: []
        },
        rating: 5,
        activeListings: [],
        activeTickets: []
      };
      setUser(mockUser);
    } catch (error) {
      throw new Error('Registration failed');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const logout = useCallback(() => {
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}