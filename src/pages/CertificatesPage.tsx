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
              className="bg-primary/20 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all group"
            >
              <div className="rounded-full bg-highlight/20 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <Medal className="text-accent group-hover:text-highlight transition-colors" size={24} />
              </div>
              
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
          ))}
        </div>
      </div>
    </main>
  );
};

export default CertificatesPage;