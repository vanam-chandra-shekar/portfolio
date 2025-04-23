import React from 'react';
import { Trophy } from 'lucide-react';
import { achievements } from '../data/portfolioData';
import SectionTitle from './common/SectionTitle';

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Achievements" subtitle="My Proud Moments" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {achievements.map((achievement, index) => (
            <div 
              key={achievement.id}
              className="bg-primary/20 backdrop-blur-sm rounded-lg overflow-hidden hover:shadow-lg transition-all group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Achievement Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={achievement.image} 
                  alt={achievement.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-70"></div>
              </div>
              
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-highlight/20 p-3 text-accent group-hover:text-highlight transition-colors flex-shrink-0">
                    <Trophy size={24} />
                  </div>
                  
                  <div>
                      <h3 className=" text-xl font-bold text-red-500 mb-2"></h3>
                      <p className="text-accent/80 mb-3">{achievement.description}</p>
                      <span className="text-accent text-sm">{achievement.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;