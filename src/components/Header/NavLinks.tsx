import React from 'react';
import { Link } from 'react-router-dom';

const links = [
  { name: 'Home', href: '/' },
  { name: 'Features', href: '/features' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'Contact', href: '/contact' },
];

interface NavLinksProps {
  isMenuOpen: boolean;
}

export default function NavLinks({ isMenuOpen }: NavLinksProps) {
  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        {links.map((link) => (
          <Link
            key={link.name}
            to={link.href}
            className="text-gray-700 hover:text-indigo-600 font-medium transition-colors"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden">
          <div className="px-4 py-2 space-y-2">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="block py-2 text-gray-700 hover:text-indigo-600 font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/login"
              className="block py-2 text-white bg-indigo-600 rounded-lg text-center mt-4"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </>
  );
}