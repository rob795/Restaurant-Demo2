import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react';
import { restaurantInfo } from '../../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f172a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 
              className="text-2xl font-bold mb-4"
              style={{ fontFamily: "'Crimson Text', serif" }}
            >
              {restaurantInfo.name}
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              {restaurantInfo.description}
            </p>
            <div className="flex space-x-4">
              <a 
                href={restaurantInfo.socialLinks.instagram}
                className="p-2 bg-white/10 rounded-full hover:bg-[#ECEC75] hover:text-[#0f172a] transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href={restaurantInfo.socialLinks.facebook}
                className="p-2 bg-white/10 rounded-full hover:bg-[#ECEC75] hover:text-[#0f172a] transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href={restaurantInfo.socialLinks.twitter}
                className="p-2 bg-white/10 rounded-full hover:bg-[#ECEC75] hover:text-[#0f172a] transition-all duration-200"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col space-y-3">
              <Link to="/" className="text-gray-400 hover:text-[#ECEC75] transition-colors">
                Home
              </Link>
              <Link to="/menu" className="text-gray-400 hover:text-[#ECEC75] transition-colors">
                Our Menu
              </Link>
              <Link to="/contact" className="text-gray-400 hover:text-[#ECEC75] transition-colors">
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin size={20} className="text-[#ECEC75] mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  {restaurantInfo.address.street}<br />
                  {restaurantInfo.address.city}, {restaurantInfo.address.state} {restaurantInfo.address.zip}
                </span>
              </div>
              <div className="flex items-center">
                <Phone size={20} className="text-[#ECEC75] mr-3 flex-shrink-0" />
                <a 
                  href={`tel:${restaurantInfo.phone}`}
                  className="text-gray-400 hover:text-[#ECEC75] transition-colors"
                >
                  {restaurantInfo.phone}
                </a>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="text-[#ECEC75] mr-3 flex-shrink-0" />
                <a 
                  href={`mailto:${restaurantInfo.email}`}
                  className="text-gray-400 hover:text-[#ECEC75] transition-colors"
                >
                  {restaurantInfo.email}
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center">
              <Clock size={20} className="text-[#ECEC75] mr-2" />
              Hours
            </h4>
            <div className="space-y-2">
              {restaurantInfo.hours.map((item) => (
                <div key={item.day} className="flex justify-between text-gray-400">
                  <span>{item.day}</span>
                  <span className={item.time === 'Closed' ? 'text-red-400' : ''}>
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-500">
          <p>&copy; {currentYear} {restaurantInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
