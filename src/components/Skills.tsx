import React from 'react';
import { aboutMe } from '../data/portfolioData';
import SectionTitle from './common/SectionTitle';
import {
  Blocks, Braces, Database, Globe, Terminal, Cpu,
  Box, Layers, Cloud, Workflow, GitBranch, Monitor,
  Palette, Settings, Server, Code2
} from 'lucide-react';

const Skills: React.FC = () => {
  const tools = [
    { name: 'React', icon: <Blocks />, color: 'rgb(97, 218, 251)' },
    { name: 'TypeScript', icon: <Braces />, color: 'rgb(49, 120, 198)' },
    { name: 'Node.js', icon: <Server />, color: 'rgb(83, 158, 67)' },
    { name: 'MongoDB', icon: <Database />, color: 'rgb(0, 237, 100)' },
    { name: 'Docker', icon: <Box />, color: 'rgb(13, 136, 209)' },
    { name: 'AWS', icon: <Cloud />, color: 'rgb(255, 153, 0)' },
    { name: 'Python', icon: <Terminal />, color: 'rgb(255, 212, 59)' },
    { name: 'Git', icon: <GitBranch />, color: 'rgb(240, 80, 50)' },
    { name: 'Vue.js', icon: <Layers />, color: 'rgb(65, 184, 131)' },
    { name: 'Next.js', icon: <Globe />, color: 'rgb(255, 255, 255)' },
    { name: 'GraphQL', icon: <Cpu />, color: 'rgb(229, 53, 171)' },
    { name: 'CI/CD', icon: <Workflow />, color: 'rgb(252, 108, 133)' },
    { name: 'Tailwind', icon: <Palette />, color: 'rgb(56, 189, 248)' },
    { name: 'Redux', icon: <Settings />, color: 'rgb(118, 74, 188)' },
    { name: 'Kubernetes', icon: <Monitor />, color: 'rgb(50, 109, 230)' },
    { name: 'Express', icon: <Code2 />, color: 'rgb(147, 147, 147)' },
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Gradient background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-background"></div>
      <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-highlight/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle title="Frameworks and Tools" subtitle="Technologies I Work With" />

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Glow effect */}
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"
                style={{ backgroundColor: tool.color }}
              ></div>

              {/* Icon container */}
              <div
                className="relative w-16 h-16 flex items-center justify-center rounded-xl bg-background/40 backdrop-blur-sm border border-primary/20 group-hover:border-primary/40 transition-all duration-300"
                style={{
                  boxShadow: `0 0 20px ${tool.color}15`,
                }}
              >
                {/* Icon with color */}
                <div
                  className="transition-transform duration-300 group-hover:scale-110"
                  style={{ color: tool.color }}
                >
                  {tool.icon}
                </div>
              </div>

              {/* Tool name */}
              <span className="mt-3 text-sm text-soft-white/80 group-hover:text-soft-white transition-colors duration-300">
                {tool.name}
              </span>
            </div>
          ))}
        </div>

        {/* Additional skills */}
        <div className="mt-16 flex flex-wrap justify-center gap-4">
          {aboutMe.skills
            .filter(skill => !tools.map(t => t.name).includes(skill))
            .map((skill, index) => (
              <div
                key={index}
                className="px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm text-soft-white/70 hover:text-accent hover:bg-primary/30 transition-all duration-300 text-sm"
              >
                {skill}
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;