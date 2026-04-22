import React from 'react';
import { Fish, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { navigation } from '../../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Fish className="h-6 w-6 text-teal-400" />
              <span className="ml-2 font-bold text-lg">Mural Fish Seed Hatchery</span>
            </div>
            <p className="text-gray-400 mb-4">
              Providing premium quality fish seeds for farmers and aquaculture businesses across India since 2010.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="text-gray-400 hover:text-teal-400 transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-teal-400 mr-2 mt-0.5" />
                <span className="text-gray-400">
                  Mural Fish Farms, Nellore District, Andhra Pradesh, 524004, India
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-teal-400 mr-2" />
                <a href="tel:+919876543210" className="text-gray-400 hover:text-teal-400 transition-colors">
                  +91 9876543210
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-teal-400 mr-2" />
                <a href="mailto:info@muralfishseed.com" className="text-gray-400 hover:text-teal-400 transition-colors">
                  info@muralfishseed.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates on fish farming techniques and product availability.
            </p>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 bg-gray-800 text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                required
              />
              <button 
                type="submit" 
                className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Mural Fish Seed Hatchery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;