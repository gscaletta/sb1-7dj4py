import React, { useState } from 'react';
import { Menu, X, User, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import AuthModal from './auth/AuthModal';

export default function Navbar() {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              iPhortuna
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#testimonials">Testimonials</NavLink>
            <NavLink href="#pricing">Pricing</NavLink>
            {user ? (
              <div className="relative group">
                <button className="flex items-center space-x-2 text-gray-700 hover:text-purple-600">
                  <User className="w-5 h-5" />
                  <span>{user.username}</span>
                </button>
                <div className="absolute right-0 w-48 mt-2 py-2 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <button
                    onClick={logout}
                    className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-purple-50"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => setShowAuthModal(true)}
                className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors"
              >
                Get Started
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <MobileNavLink href="#features">Features</MobileNavLink>
              <MobileNavLink href="#testimonials">Testimonials</MobileNavLink>
              <MobileNavLink href="#pricing">Pricing</MobileNavLink>
              {user ? (
                <>
                  <div className="px-3 py-2 text-base font-medium text-gray-700">
                    {user.username}
                  </div>
                  <button
                    onClick={logout}
                    className="flex items-center w-full px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setShowAuthModal(true)}
                  className="w-full bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors mt-4"
                >
                  Get Started
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </nav>
  );
}

function NavLink({ href, children }: { href: string, children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-gray-600 hover:text-purple-600 transition-colors"
    >
      {children}
    </a>
  );
}

function MobileNavLink({ href, children }: { href: string, children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-purple-600 transition-colors"
    >
      {children}
    </a>
  );
}