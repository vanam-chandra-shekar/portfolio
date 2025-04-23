import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Download } from 'lucide-react';
import { aboutMe } from '../data/portfolioData';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Certificates', href: '/certificates' },
    { name: 'Achievements', href: '/achievements' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-sm shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div>
            <Link 
              to="/"
              className="text-accent font-bold text-xl"
            >
              {aboutMe.name.split(' ')[0]}.<span className="text-highlight">dev</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-soft-white hover:text-accent transition-colors ${
                  location.pathname === item.href ? 'text-accent' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href={aboutMe.resumeUrl}
              className="flex items-center gap-2 px-4 py-2 rounded-md bg-primary hover:bg-secondary text-soft-white transition-colors"
              download
            >
              <Download size={16} />
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-soft-white hover:text-accent transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-sm shadow-lg transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-y-0' : '-translate-y-full opacity-0 pointer-events-none'
          }`}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-soft-white hover:text-accent py-2 transition-colors ${
                  location.pathname === item.href ? 'text-accent' : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a
              href={aboutMe.resumeUrl}
              className="flex items-center gap-2 px-4 py-2 rounded-md bg-primary hover:bg-secondary text-soft-white transition-colors w-max"
              download
            >
              <Download size={16} />
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;