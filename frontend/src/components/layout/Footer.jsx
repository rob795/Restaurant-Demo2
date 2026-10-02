import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
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
            <p className="text-sm text-gray-400">Fictional restaurant. Social profiles are not connected in this demo.</p>
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
                Contact Demo
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Sample Contact Details</h4>
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
                <span className="text-gray-400 break-words">
                  {restaurantInfo.phone}
                </span>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="text-[#ECEC75] mr-3 flex-shrink-0" />
                <span className="text-gray-400 break-words">
                  {restaurantInfo.email}
                </span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center">
              <Clock size={20} className="text-[#ECEC75] mr-2" />
              Sample Hours
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
          <p>&copy; {currentYear} {restaurantInfo.name}. Fictional restaurant design demo.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
