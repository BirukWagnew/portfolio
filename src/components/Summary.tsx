import React from 'react';
import { UserCheck, GraduationCap, Target, CheckCircle2, Award } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION } from '../data/portfolioData';

export const Summary: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#090d16]/80 relative border-t border-gray-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-mono">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Professional Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="text-gradient-primary">Biruk Wagnew</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base">
            Combining Information Technology fundamentals with modern cloud automation and full-stack software development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Summary Bio Card */}
          <div className="lg:col-span-7 glass-card rounded-2xl p-8 border border-gray-800 flex flex-col justify-between space-y-6">
            <div className="space-y-4 text-left">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-indigo-600/20 border border-indigo-500/30 text-indigo-400">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Summary & Core Mission</h3>
                  <p className="text-xs text-indigo-400 font-mono">Cloud Engineer & Software Innovator</p>
                </div>
              </div>

              <p className="text-gray-300 text-base leading-relaxed">
                {PERSONAL_INFO.summary}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                {[
                  "Cloud Infrastructure Architecting",
                  "Automated CI/CD Pipelines",
                  "Modern React & Node.js Apps",
                  "Container Orchestration (Docker & K8s)",
                  "Mobile Solutions with Flutter",
                  "Cross-functional Team Leadership"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Callout Quote */}
            <div className="p-4 rounded-xl bg-gray-900/80 border border-indigo-500/20 text-indigo-200 text-sm italic font-medium text-left">
              "{PERSONAL_INFO.callToAction}"
            </div>
          </div>

          {/* Education & Academic Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Education Card */}
            <div className="glass-card rounded-2xl p-6 border border-gray-800 text-left space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-pink-600/20 border border-pink-500/30 text-pink-400">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">{EDUCATION.degree}</h4>
                    <p className="text-xs text-pink-300 font-mono">{EDUCATION.institution}</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-md bg-pink-950/60 border border-pink-500/30 text-pink-300 text-xs font-mono">
                  {EDUCATION.graduationYear}
                </span>
              </div>

              <div className="space-y-2 pt-2 border-t border-gray-800">
                {EDUCATION.highlights.map((h, i) => (
                  <div key={i} className="text-xs text-gray-400 flex items-start gap-2">
                    <Award className="w-3.5 h-3.5 text-pink-400 mt-0.5 flex-shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Focus Pillars */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card rounded-xl p-5 border border-gray-800 text-left space-y-2">
                <div className="text-indigo-400 font-mono text-2xl font-bold">GCP / AWS</div>
                <div className="text-xs font-semibold text-gray-300 uppercase">Cloud Platforms</div>
                <p className="text-[11px] text-gray-400">Deploying resilient cloud computing infrastructure.</p>
              </div>

              <div className="glass-card rounded-xl p-5 border border-gray-800 text-left space-y-2">
                <div className="text-pink-400 font-mono text-2xl font-bold">Full-Stack</div>
                <div className="text-xs font-semibold text-gray-300 uppercase">React + Node</div>
                <p className="text-[11px] text-gray-400">Creating sleek end-to-end web applications.</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
