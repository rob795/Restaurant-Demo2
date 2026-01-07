import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { restaurantInfo } from '../../data/mock';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/menu', label: 'Menu' },
    { path: '/contact', label: 'Contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#ECEC75] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span 
              className="text-2xl md:text-3xl font-bold text-[#0f172a]"
              style={{ fontFamily: "'Crimson Text', serif" }}
            >
              {restaurantInfo.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[#0f172a] font-medium transition-all duration-200 hover:opacity-70 ${
                  isActive(link.path) ? 'border-b-2 border-[#0f172a]' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href={`tel:${restaurantInfo.phone}`}
              className="flex items-center text-[#0f172a] hover:opacity-70 transition-opacity"
            >
              <Phone size={18} className="mr-2" />
              <span className="font-medium">{restaurantInfo.phone}</span>
            </a>
            <Link
              to="/contact"
              className="bg-[#0f172a] text-white px-6 py-2.5 rounded-md font-semibold hover:bg-[#1e293b] transition-all duration-200 hover:-translate-y-0.5"
            >
              Reserve Table
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-[#0f172a]"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-6">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-[#0f172a] font-medium py-2 transition-all duration-200 ${
                    isActive(link.path) ? 'font-bold' : ''
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a 
                href={`tel:${restaurantInfo.phone}`}
                className="flex items-center text-[#0f172a] py-2"
              >
                <Phone size={18} className="mr-2" />
                <span className="font-medium">{restaurantInfo.phone}</span>
              </a>
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="bg-[#0f172a] text-white px-6 py-3 rounded-md font-semibold text-center"
              >
                Reserve Table
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
