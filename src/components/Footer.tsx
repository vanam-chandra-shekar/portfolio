import React from 'react';
import { socialLinks, aboutMe } from '../data/portfolioData';
import SocialLinks from './common/SocialLinks';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-background border-t border-primary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-accent font-bold text-xl">
              {aboutMe.name.split(' ')[0]}.<span className="text-highlight">dev</span>
            </a>
            <p className="text-soft-white/60 mt-2">
              Building beautiful digital experiences
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <SocialLinks links={socialLinks} />
            <p className="text-soft-white/60 mt-4">
              &copy; {currentYear} {aboutMe.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;