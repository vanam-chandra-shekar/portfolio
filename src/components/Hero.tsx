import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { aboutMe } from '../data/portfolioData';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section 
      id="home" 
      className="min-h-screen bg-background pt-20 flex flex-col justify-center relative overflow-hidden"
    >
      {/* Abstract background elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center gap-12 max-w-5xl mx-auto">
          {/* Profile Image */}
          <div className="flex-shrink-0 mx-auto md:mx-0 order-1 md:order-none animate-fade-in">
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-highlight/30 shadow-xl shadow-primary/20">
              <img 
                src={aboutMe.profileImage}
                alt={aboutMe.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 rounded-full ring-4 ring-accent/20 shadow-inner"></div>
            </div>
          </div>
          
          <div className="flex-1 animate-fade-in text-center md:text-left">
            <span className="inline-block text-highlight mb-2 px-3 py-1 rounded-full bg-primary/20 text-sm font-medium">
              {aboutMe.title}
            </span>
            
            <h1 className="text-4xl md:text-6xl font-bold text-soft-white mb-6 leading-tight">
              Hi, I'm <span className="text-accent">{aboutMe.name}</span>
              <br />
              <span className="text-highlight">I build things for the web</span>
            </h1>
            
            <p className="text-lg md:text-xl text-soft-white/80 mb-8 leading-relaxed">
              {aboutMe.introduction}
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <button 
                onClick={() => navigate('/projects')}
                className="px-6 py-3 bg-secondary hover:bg-highlight transition-colors rounded-md text-soft-white font-medium flex items-center gap-2"
              >
                View my work 
                <ArrowRight size={18} />
              </button>
              
              <a 
                href="#contact"
                className="px-6 py-3 bg-primary/30 hover:bg-primary/50 transition-colors rounded-md text-soft-white font-medium"
                onClick={(e) => {
                  e.preventDefault();
                  const contactSection = document.querySelector('#contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Contact me
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-20 flex flex-wrap gap-8 justify-center animate-slide-up">
          {/* <div className="text-center">
            <h3 className="text-accent font-bold text-3xl mb-1">5+</h3>
            <p className="text-soft-white/70">Years Experience</p>
          </div> */}
          {/* <div className="text-center">
            <h3 className="text-accent font-bold text-3xl mb-1">20+</h3>
            <p className="text-soft-white/70">Projects Completed</p>
          </div> */}
          {/* <div className="text-center">
            <h3 className="text-accent font-bold text-3xl mb-1">10+</h3>
            <p className="text-soft-white/70">Satisfied Clients</p>
          </div> */}
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-highlight" size={32} />
      </div>
    </section>
  );
};

export default Hero;