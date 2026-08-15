import React, { useState } from 'react';
import { Rocket, ExternalLink, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { GithubIcon } from './Icons';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 bg-[#090d16]/90 relative border-t border-gray-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-950/60 border border-pink-500/30 text-pink-300 text-xs font-mono">
            <Rocket className="w-3.5 h-3.5" />
            <span>Featured Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured <span className="text-gradient-primary">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base">
            Scalable cloud infrastructure, full-stack applications, and interactive digital solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="max-w-lg mx-auto text-left">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="glass-card glass-card-hover rounded-2xl border border-gray-800/80 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Image Banner */}
                <div className="relative aspect-video overflow-hidden bg-gray-900 border-b border-gray-800/80">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-transparent to-transparent opacity-80" />
                  
                  {/* Category Tag Overlay */}
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-lg bg-gray-900/90 backdrop-blur-md border border-gray-700 text-indigo-300 text-[11px] font-mono">
                    {project.category}
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-3">
                  <h3
                    onClick={() => setSelectedProject(project)}
                    className="text-xl font-bold text-white group-hover:text-indigo-300 cursor-pointer transition-colors flex items-center justify-between"
                  >
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-indigo-400 transition-colors" />
                  </h3>

                  <p className="text-gray-400 text-sm line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-md bg-gray-900 border border-gray-800 text-gray-300 text-[11px] font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-2 py-0.5 text-[11px] font-mono text-gray-500">
                        +{project.tags.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer Links */}
              <div className="p-6 pt-0 border-t border-gray-800/40 mt-4 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 font-mono flex items-center gap-1"
                >
                  View Details & Specs →
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-gray-900 border border-gray-800 text-gray-400 hover:text-white hover:border-gray-700 transition-colors"
                    title="Source Code"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-indigo-950 border border-indigo-500/40 text-indigo-300 hover:text-white hover:bg-indigo-600 transition-colors"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
};
