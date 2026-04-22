import React, { useState, useEffect } from 'react';
import { Fish, Menu, X } from 'lucide-react';
import { navigation } from '../../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Fish className={`h-8 w-8 ${isScrolled ? 'text-teal-600' : 'text-white'}`} />
            <div className={`ml-2 font-semibold text-xl ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
              <span className="font-bold">Mural</span> Fish Seed Hatchery
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex">
            <ul className="flex space-x-8">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={`font-medium transition-colors duration-200 ${
                      isScrolled 
                        ? 'text-gray-600 hover:text-teal-600' 
                        : 'text-white hover:text-teal-200'
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white shadow-lg absolute w-full top-full left-0">
          <ul className="py-2">
            {navigation.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="block px-4 py-2 text-gray-600 hover:bg-teal-50 hover:text-teal-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;