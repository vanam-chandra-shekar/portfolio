import React from 'react';
import * as LucideIcons from 'lucide-react';
import { SocialLink } from '../../types';

interface SocialLinksProps {
  links: SocialLink[];
}

const SocialLinks: React.FC<SocialLinksProps> = ({ links }) => {
  return (
    <div className="flex items-center space-x-4">
      {links.map((link) => {
        // Dynamically get the icon from Lucide React
        const IconComponent = LucideIcons[link.icon as keyof typeof LucideIcons];
        
        return (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-soft-white hover:text-accent transition-colors"
            aria-label={link.platform}
          >
            {IconComponent && <IconComponent size={20} />}
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;