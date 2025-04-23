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
              className="bg-primary/20 backdrop-blur-sm rounded-lg p-8 hover:shadow-lg transition-all group"
            >
              <div className="flex items-start gap-6">
                <div className="rounded-full bg-highlight/20 p-4 text-accent group-hover:text-highlight transition-colors">
                  <Trophy size={32} />
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-soft-white mb-3">{achievement.title}</h3>
                  <p className="text-soft-white/80 text-lg mb-4">{achievement.description}</p>
                  <span className="text-highlight text-sm font-medium px-3 py-1 bg-highlight/10 rounded-full">
                    {achievement.date}
                  </span>
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