import React from 'react';
import { X, ExternalLink, CheckCircle2, Tag } from 'lucide-react';
import type { Project } from '../data/portfolioData';
import { GithubIcon } from './Icons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div
        className="glass-card rounded-2xl border border-gray-800 w-full max-w-3xl overflow-hidden shadow-2xl relative text-left my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar */}
        <div className="flex items-center justify-between p-6 border-b border-gray-800 bg-gray-900/60">
          <div>
            <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest">{project.category}</span>
            <h3 className="text-2xl font-bold text-white">{project.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Image Banner */}
          <div className="relative rounded-xl overflow-hidden border border-gray-800 aspect-video bg-gray-900">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Detailed Description */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-gray-300 uppercase tracking-wider font-mono">Overview</h4>
            <p className="text-gray-300 text-base leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Key Highlights */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-gray-300 uppercase tracking-wider font-mono">Key Architectural Features</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2 p-2.5 rounded-lg bg-gray-900/80 border border-gray-800 text-xs text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Tags */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-gray-300 uppercase tracking-wider font-mono flex items-center gap-1.5">
              <Tag className="w-4 h-4 text-pink-400" />
              <span>Technologies Used</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-lg bg-indigo-950/60 border border-indigo-500/30 text-indigo-200 text-xs font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-6 border-t border-gray-800 bg-gray-900/60 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-gray-800 hover:bg-gray-700 text-white text-xs font-medium flex items-center gap-2 transition-colors border border-gray-700"
            >
              <GithubIcon className="w-4 h-4" /> Source Code
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-medium flex items-center gap-2 shadow-md shadow-indigo-600/30 transition-transform hover:scale-105"
              >
                <ExternalLink className="w-4 h-4" /> Live Demo
              </a>
            )}
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-gray-900 border border-gray-800 text-gray-400 text-xs hover:text-white"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};
