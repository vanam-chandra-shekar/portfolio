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
      className="bg-primary/20 backdrop-blur-sm rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 group"
    >
      {/* Image Section */}
      <div className="relative overflow-hidden h-64">
        <img 
          src={achievement.image} 
          alt={achievement.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-70"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold text-soft-white mb-1">{achievement.title}</h3>
          <span className="text-sm font-medium px-3 py-1 bg-highlight/20 text-highlight rounded-full backdrop-blur-sm">
            {achievement.date}
          </span>
        </div>
      </div>

      {/* Description Section */}
      <div className="p-6">
        <p className="text-soft-white/80 mb-4 text-lg">
          {achievement.description}
        </p>
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-highlight/20 p-3 text-accent group-hover:text-highlight transition-colors backdrop-blur-sm">
            <Trophy size={24} />
          </div>
          <span className="text-soft-white text-sm">Achievement</span>
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