import React from 'react';
import { Facebook, Twitter, Instagram, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              iPhortuna
            </h3>
            <p className="text-gray-600">
              Discover your digital fortune and embrace the future.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <FooterLink href="#about">About</FooterLink>
              <FooterLink href="#careers">Careers</FooterLink>
              <FooterLink href="#press">Press</FooterLink>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <FooterLink href="#blog">Blog</FooterLink>
              <FooterLink href="#newsletter">Newsletter</FooterLink>
              <FooterLink href="#events">Events</FooterLink>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <FooterLink href="#privacy">Privacy</FooterLink>
              <FooterLink href="#terms">Terms</FooterLink>
              <FooterLink href="#cookies">Cookies</FooterLink>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-600 mb-4 md:mb-0">
              © 2024 iPhortuna. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <SocialLink href="#" icon={<Facebook className="w-5 h-5" />} />
              <SocialLink href="#" icon={<Twitter className="w-5 h-5" />} />
              <SocialLink href="#" icon={<Instagram className="w-5 h-5" />} />
              <SocialLink href="#" icon={<Github className="w-5 h-5" />} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string, children: React.ReactNode }) {
  return (
    <li>
      <a
        href={href}
        className="text-gray-600 hover:text-purple-600 transition-colors"
      >
        {children}
      </a>
    </li>
  );
}

function SocialLink({ href, icon }: { href: string, icon: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-gray-400 hover:text-purple-600 transition-colors"
    >
      {icon}
    </a>
  );
}