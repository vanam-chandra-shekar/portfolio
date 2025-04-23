import React from 'react';
import { projects } from '../data/portfolioData';
import SectionTitle from '../components/common/SectionTitle';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsPage: React.FC = () => {
  return (
    <main className="py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Projects" subtitle="My Recent Work" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-primary/20 backdrop-blur-sm rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 group"
            >
              <div className="relative overflow-hidden h-64">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-70"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-soft-white mb-1">{project.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="text-xs px-2 py-1 rounded-full bg-highlight/30 text-soft-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-soft-white/80 mb-6 text-lg">
                  {project.description}
                </p>
                
                <div className="flex items-center space-x-4">
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-md bg-secondary hover:bg-highlight text-soft-white transition-colors flex items-center gap-2"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
                  
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-md bg-primary/50 hover:bg-primary text-soft-white transition-colors flex items-center gap-2"
                    >
                      <Github size={18} />
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProjectsPage;