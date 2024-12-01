import React, { useState } from 'react';
import { Search, LogIn, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import NavLinks from './NavLinks';
import TopBar from '../TopBar/TopBar';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <TopBar />
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="text-2xl font-bold text-indigo-600">EduERP</Link>
            </div>
            
            {/* Navigation Links - Now with proper spacing */}
            <div className="hidden md:flex flex-grow justify-center">
              <NavLinks isMenuOpen={isMenuOpen} />
            </div>
            
            {/* Right Section - Search and Login */}
            <div className="hidden md:flex items-center gap-4 flex-shrink-0">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-48 lg:w-64 pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              
              <Link
                to="/login"
                className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors whitespace-nowrap"
              >
                <LogIn className="h-5 w-5" />
                <span>Login</span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg hover:bg-gray-100"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6 text-gray-600" />
                ) : (
                  <Menu className="h-6 w-6 text-gray-600" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Search - Shown below header when menu is open */}
          {isMenuOpen && (
            <div className="md:hidden py-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}