import React from 'react';
import { achievements } from '../data/portfolioData';
import SectionTitle from '../components/common/SectionTitle';
import { Trophy } from 'lucide-react';

const AchievementsPage: React.FC = () => {
  return (
    <main className="py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Achievements" subtitle="My Proud Moments" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          {achievements.map((achievement) => (
            <div 
              key={achievement.id}
              className="bg-primary/20 backdrop-blur-sm rounded-lg overflow-hidden hover:shadow-lg transition-all group"
            >
              {/* Achievement Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={achievement.image} 
                  alt={achievement.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background opacity-90"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-start gap-6">
                    <div className="rounded-full bg-highlight/20 p-4 text-accent group-hover:text-highlight transition-colors backdrop-blur-sm flex-shrink-0">
                      <Trophy size={32} />
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-bold text-soft-white mb-3">{achievement.title}</h3>
                      <p className="text-soft-white/90 text-lg mb-4">{achievement.description}</p>
                      <span className="text-highlight text-sm font-medium px-3 py-1 bg-highlight/10 rounded-full backdrop-blur-sm">
                        {achievement.date}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default AchievementsPage;