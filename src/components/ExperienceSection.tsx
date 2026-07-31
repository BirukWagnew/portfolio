import React, { useState } from 'react';
import { Briefcase, Award, GraduationCap, Calendar, MapPin, CheckCircle2, ChevronRight } from 'lucide-react';
import { EXPERIENCES, EDUCATION } from '../data/portfolioData';
import type { ExperienceItem } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  const [filterType, setFilterType] = useState<'All' | 'Work' | 'Leadership' | 'Internship' | 'Learning'>('All');

  const filteredExperiences = EXPERIENCES.filter((exp) => {
    if (filterType === 'All') return true;
    return exp.type === filterType;
  });

  const getTypeBadgeColor = (type: ExperienceItem['type']) => {
    switch (type) {
      case 'Work': return 'bg-indigo-950/80 border-indigo-500/40 text-indigo-300';
      case 'Leadership': return 'bg-purple-950/80 border-purple-500/40 text-purple-300';
      case 'Internship': return 'bg-pink-950/80 border-pink-500/40 text-pink-300';
      case 'Learning': return 'bg-cyan-950/80 border-cyan-500/40 text-cyan-300';
      default: return 'bg-gray-900 border-gray-800 text-gray-300';
    }
  };

  return (
    <section id="experience" className="py-20 bg-[#090d16] relative border-t border-gray-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career & Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Experience & <span className="text-gradient-cyan">Education</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base">
            My professional journey across software development, cloud computing labs, leadership roles, and telecommunications.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {(['All', 'Work', 'Leadership', 'Internship', 'Learning'] as const).map((type) => (
            <button
              key={type}
              onClick={() => setFilterType(type)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-200 ${
                filterType === type
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'bg-gray-900 border border-gray-800 text-gray-400 hover:text-white hover:border-gray-700'
              }`}
            >
              {type === 'All' ? 'All Roles' : type}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          
          {/* Experience Timeline Left Column */}
          <div className="lg:col-span-8 space-y-8 relative">
            
            {/* Timeline Vertical Line */}
            <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-gray-800 hidden sm:block" />

            {filteredExperiences.map((exp) => (
              <div
                key={exp.id}
                className="relative pl-0 sm:pl-16 group"
              >
                {/* Node Dot */}
                <div className="absolute left-3.5 top-5 -translate-x-1/2 w-5 h-5 rounded-full bg-gray-900 border-2 border-indigo-500 group-hover:bg-indigo-500 group-hover:scale-125 transition-all duration-300 hidden sm:flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-white" />
                </div>

                {/* Timeline Item Card */}
                <div className="glass-card glass-card-hover rounded-2xl p-6 border border-gray-800/80 space-y-4">
                  <div className="flex flex-wrap items-start justify-between gap-2 border-b border-gray-800/60 pb-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                          {exp.role}
                        </h3>
                        <span className={`px-2.5 py-0.5 rounded-md text-[11px] font-mono border ${getTypeBadgeColor(exp.type)}`}>
                          {exp.type}
                        </span>
                      </div>
                      <p className="text-sm font-semibold text-indigo-400 mt-1">
                        {exp.organization}
                      </p>
                    </div>

                    <div className="flex flex-col items-end text-xs font-mono text-gray-400 space-y-1">
                      <span className="flex items-center gap-1 bg-gray-900 px-2.5 py-1 rounded-lg border border-gray-800">
                        <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                        {exp.period}
                      </span>
                      {exp.location && (
                        <span className="flex items-center gap-1 text-gray-500 text-[11px]">
                          <MapPin className="w-3 h-3 text-pink-400" />
                          {exp.location}
                        </span>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.description.map((desc, dIdx) => (
                      <li key={dIdx} className="text-sm text-gray-300 flex items-start gap-2 leading-relaxed">
                        <ChevronRight className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Education & Achievements Right Column */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Education Highlight Card */}
            <div className="glass-card rounded-2xl p-6 border border-indigo-500/30 bg-gradient-to-b from-indigo-950/20 to-transparent space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-pink-600/20 border border-pink-500/30 text-pink-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">Degree & University</h3>
                  <span className="text-xs font-mono text-pink-400">{EDUCATION.graduationYear}</span>
                </div>
              </div>

              <div className="space-y-2 border-t border-gray-800/80 pt-4">
                <h4 className="font-semibold text-white text-base leading-snug">{EDUCATION.degree}</h4>
                <p className="text-xs text-indigo-300 font-mono">{EDUCATION.institution}</p>
              </div>

              <div className="space-y-2 pt-2">
                {EDUCATION.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-gray-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-pink-400 mt-0.5 flex-shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Leadership Spotlight: Hult Prize */}
            <div className="glass-card rounded-2xl p-6 border border-purple-500/30 space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-purple-600/20 border border-purple-500/30 text-purple-400">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">Hult Prize Leadership</h4>
                  <p className="text-xs font-mono text-purple-300">Campus & National Operations</p>
                </div>
              </div>

              <p className="text-xs text-gray-300 leading-relaxed">
                Spearheaded operations for Hult Prize Ethiopia and directed campus competitions at Wollo University, fostering tech startup innovation and social impact among youth.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
