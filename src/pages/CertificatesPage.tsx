import React from 'react';
import { certificates } from '../data/portfolioData';
import SectionTitle from '../components/common/SectionTitle';
import { Medal, ExternalLink } from 'lucide-react';

const CertificatesPage: React.FC = () => {
  return (
    <main className="py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Certificates" subtitle="Education & Credentials" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {certificates.map((certificate) => (
            <div 
              key={certificate.id}
              className="bg-primary/20 backdrop-blur-sm rounded-lg overflow-hidden hover:shadow-lg transition-all group"
            >
              {/* Certificate Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={certificate.image} 
                  alt={certificate.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
                <div className="absolute top-4 left-4">
                  <div className="rounded-full bg-highlight/30 p-2 backdrop-blur-sm">
                    <Medal className="text-accent" size={20} />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-soft-white mb-2">{certificate.name}</h3>
                <p className="text-highlight mb-1">{certificate.issuer}</p>
                <p className="text-soft-white/70 text-sm mb-4">{certificate.date}</p>
                
                {certificate.credentialId && (
                  <p className="text-soft-white/70 text-sm mb-4">
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
          ))}
        </div>
      </div>
    </main>
  );
};

export default CertificatesPage;