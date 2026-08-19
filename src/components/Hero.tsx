import React from 'react';
import { Cloud, ArrowRight, Download, Terminal, MapPin, Server, ShieldCheck, Code } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-radial-glow grid-background">
      {/* Background Decorative Ambient Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-purple-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-pink-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Copy & Actions */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Status / Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs font-mono tracking-wide shadow-inner">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Open for Cloud Engineering & Full-Stack Roles</span>
            </div>

            {/* Main Title & Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Hi, I'm <span className="text-gradient-primary">{PERSONAL_INFO.name}</span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-gray-300 flex flex-wrap items-center gap-2">
                <Cloud className="w-6 h-6 text-indigo-400 inline" />
                <span className="text-gradient-cyan">Cloud Engineer</span>
                <span className="text-gray-500">•</span>
                <span>Full-Stack Developer</span>
              </p>
            </div>

            {/* Tagline & Location */}
            <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
              {PERSONAL_INFO.tagline}
            </p>

            <div className="flex items-center gap-2 text-sm text-gray-400 font-medium">
              <MapPin className="w-4 h-4 text-pink-400" />
              <span>{PERSONAL_INFO.location}</span>
              <span className="mx-2 text-gray-600">•</span>
              <span className="text-gray-300 font-mono">BSIT Graduate 2026</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:to-pink-500 text-white font-semibold text-sm shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center gap-2"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="px-6 py-3.5 rounded-xl bg-gray-900/90 hover:bg-gray-800 border border-gray-700/80 hover:border-indigo-500/50 text-gray-200 font-semibold text-sm transition-all duration-200 flex items-center gap-2"
              >
                <Download className="w-4 h-4 text-indigo-400" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Core Tech Stack Badges */}
            <div className="pt-4 border-t border-gray-800/80">
              <p className="text-xs uppercase font-mono tracking-widest text-gray-500 mb-3">Core Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {['GCP', 'AWS', 'Docker', 'Kubernetes', 'React', 'TypeScript', 'Node.js', 'Python', 'Linux', 'Flutter'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg bg-gray-900/80 border border-gray-800 text-gray-300 text-xs font-mono hover:border-indigo-500/40 hover:text-indigo-300 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Code Terminal / Card Visual */}
          <div className="lg:col-span-5 relative">
            <div className="glass-card rounded-2xl p-6 border border-gray-800 shadow-2xl relative z-10 overflow-hidden group">
              {/* Terminal Window Bar */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="text-xs font-mono text-gray-400 ml-2">biruk@cloud-station:~</span>
                </div>
                <Terminal className="w-4 h-4 text-indigo-400" />
              </div>

              {/* Code Snippet Content */}
              <div className="font-mono text-xs sm:text-sm text-left space-y-2 leading-relaxed">
                <p className="text-purple-400">
                  <span className="text-pink-400">const</span> engineer = {'{'}
                </p>
                <p className="pl-4 text-gray-300">
                  name: <span className="text-emerald-300">"{PERSONAL_INFO.name}"</span>,
                </p>
                <p className="pl-4 text-gray-300">
                  education: <span className="text-emerald-300">"BSIT, Wollo University (2026)"</span>,
                </p>
                <p className="pl-4 text-gray-300">
                  focus: [<span className="text-indigo-300">"Cloud"</span>, <span className="text-indigo-300">"DevOps"</span>, <span className="text-indigo-300">"Full-Stack"</span>, <span className="text-indigo-300">"AI"</span>],
                </p>
                <p className="pl-4 text-gray-300">
                  cloudPlatforms: [<span className="text-amber-300">"GCP"</span>, <span className="text-amber-300">"AWS"</span>],
                </p>
                <p className="pl-4 text-gray-300">
                  containerization: [<span className="text-cyan-300">"Docker"</span>, <span className="text-cyan-300">"Kubernetes"</span>],
                </p>
                <p className="pl-4 text-gray-300">
                  status: <span className="text-emerald-400">"Ready to Deploy Solutions 🚀"</span>
                </p>
                <p className="text-purple-400">{'}'};</p>

                <div className="pt-3 border-t border-gray-800/60 text-gray-400 space-y-1">
                  <p className="text-gray-200">
                    <span className="text-indigo-400">$</span> kubectl apply -f profile.yaml
                  </p>
                  <div className="text-emerald-400 text-[11px] font-mono leading-relaxed pl-4 animate-fadeIn">
                    deployment.apps/biruk-wagnew-profile created<br />
                    service/biruk-wagnew-service created<br />
                    ingress.networking.k8s.io/portfolio-ingress created
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stat Pill Cards Below Terminal */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              <div className="glass-card p-3 rounded-xl border border-gray-800 text-center">
                <div className="text-indigo-400 flex justify-center mb-1"><Server className="w-5 h-5" /></div>
                <div className="text-lg font-bold text-white">GCP / AWS</div>
                <div className="text-[10px] font-mono text-gray-400">Cloud Ready</div>
              </div>
              <div className="glass-card p-3 rounded-xl border border-gray-800 text-center">
                <div className="text-purple-400 flex justify-center mb-1"><Code className="w-5 h-5" /></div>
                <div className="text-lg font-bold text-white">React + Node</div>
                <div className="text-[10px] font-mono text-gray-400">Full-Stack</div>
              </div>
              <div className="glass-card p-3 rounded-xl border border-gray-800 text-center">
                <div className="text-pink-400 flex justify-center mb-1"><ShieldCheck className="w-5 h-5" /></div>
                <div className="text-lg font-bold text-white">CI / CD</div>
                <div className="text-[10px] font-mono text-gray-400">DevOps Flow</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
