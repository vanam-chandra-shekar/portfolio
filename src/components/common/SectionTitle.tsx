import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-soft-white mb-2">
        {title}
      </h2>
      <p className="text-highlight text-lg">{subtitle}</p>
      <div className="w-24 h-1 bg-accent mx-auto mt-4"></div>
    </div>
  );
};

export default SectionTitle;