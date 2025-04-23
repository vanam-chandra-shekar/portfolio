import React from 'react';
import { Medal, ExternalLink } from 'lucide-react';
import { certificates } from '../data/portfolioData';
import SectionTitle from './common/SectionTitle';

const Certificates: React.FC = () => {
  return (
    <section id="certificates" className="py-20 bg-primary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Certificates" subtitle="Education & Credentials" />
        
        <div className="mt-12 relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-highlight/30 hidden md:block"></div>
          
          <div className="space-y-12 relative">
            {certificates.map((certificate, index) => (
              <div 
                key={certificate.id}
                className={`flex flex-col md:flex-row items-center md:items-start gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                  <div 
                    className={`bg-primary/20 backdrop-blur-sm p-6 rounded-lg hover:shadow-md transition-all ${
                      index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'
                    } md:max-w-lg animate-fade-in`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Medal className="text-accent" size={20} />
                      <h3 className="text-xl font-bold text-soft-white">{certificate.name}</h3>
                    </div>
                    <p className="text-highlight mb-1">{certificate.issuer}</p>
                    <p className="text-soft-white/70 text-sm mb-4">{certificate.date}</p>
                    
                    {certificate.credentialId && (
                      <p className="text-soft-white/70 text-sm mb-2">
                        Credential ID: {certificate.credentialId}
                      </p>
                    )}
                    
                    {certificate.url && (
                      <a
                        href={certificate.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-accent hover:text-highlight transition-colors"
                      >
                        View Certificate
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
                
                {/* Certificate Image */}
                <div className={`w-full md:w-1/2 ${
                  index % 2 === 0 ? 'md:text-left' : 'md:text-right'
                }`}>
                  <div 
                    className={`rounded-lg overflow-hidden ${
                      index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
                    } md:max-w-lg shadow-lg shadow-primary/20 group`}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={certificate.image} 
                        alt={certificate.name} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-soft-white font-medium">{certificate.name}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-highlight border-4 border-background"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;