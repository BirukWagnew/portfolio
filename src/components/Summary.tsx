import React, { useState } from 'react';
import { 
  UserCheck, 
  GraduationCap, 
  Target, 
  CheckCircle2, 
  Award, 
  MapPin, 
  Cloud, 
  Code, 
  Cpu, 
  Maximize2, 
  X, 
  Zap, 
  ShieldCheck, 
  Terminal,
  ArrowRight
} from 'lucide-react';
import { PERSONAL_INFO, EDUCATION } from '../data/portfolioData';
import profileImg from '../assets/profile.jpg';

export const Summary: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'story' | 'expertise' | 'education' | 'strengths'>('story');
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="about" className="py-24 bg-[#090d16] relative border-t border-gray-800/80 overflow-hidden">
      {/* Background Decorative Lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-950/70 border border-indigo-500/30 text-indigo-300 text-xs font-mono tracking-wide shadow-lg shadow-indigo-950/50">
            <UserCheck className="w-3.5 h-3.5 text-indigo-400" />
            <span>PROFESSIONAL PROFILE</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            About <span className="text-gradient-primary">Biruk Wagnew</span>
          </h2>
          
          <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Information Technology Specialist, Cloud Architect & Full-Stack Developer bridging system performance with sleek digital experiences.
          </p>
        </div>

        {/* Main 2-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Premium Photo Showcase Card */}
          <div className="lg:col-span-5 relative group">
            {/* Glowing Ambient Backdrop Frame */}
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-[28px] blur-md opacity-50 group-hover:opacity-80 transition duration-700 group-hover:blur-lg" />
            
            {/* Card Outer */}
            <div className="relative rounded-[24px] bg-gray-950 border border-gray-800 overflow-hidden shadow-2xl">
              
              {/* Image Container with Custom Vignette Overlay */}
              <div className="relative h-[480px] sm:h-[520px] w-full overflow-hidden bg-slate-900">
                <img
                  src={profileImg}
                  alt="Biruk Wagnew - Cloud Engineer & Developer"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Dark Gradient Overlay at Bottom of Image for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-[#090d16]/30 to-transparent" />
                
                {/* Tech Bracket Accents */}
                <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-indigo-400/80 rounded-tl pointer-events-none" />
                <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-indigo-400/80 rounded-tr pointer-events-none" />
                <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-purple-400/80 rounded-bl pointer-events-none" />
                <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-purple-400/80 rounded-br pointer-events-none" />

                {/* Status Badge - Top Center */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 px-3.5 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium flex items-center gap-2 shadow-lg">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span>Open for Opportunities</span>
                </div>

                {/* Full Photo Lightbox Trigger Button */}
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="absolute top-4 right-4 p-2 rounded-xl bg-gray-900/80 hover:bg-indigo-600 text-gray-300 hover:text-white border border-gray-700/60 transition-all duration-200 shadow-lg group/btn cursor-pointer z-10"
                  title="View full portrait"
                >
                  <Maximize2 className="w-4 h-4 transition-transform group-hover/btn:scale-110" />
                </button>

                {/* Floating Bio Overlay Card inside Image */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl glass-card border border-white/10 space-y-2 text-left">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white tracking-tight">{PERSONAL_INFO.name}</h3>
                    <span className="px-2.5 py-0.5 rounded-md bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-mono font-semibold">
                      BSIT '26
                    </span>
                  </div>
                  
                  <p className="text-xs text-gray-300 font-mono flex items-center gap-2">
                    <Cloud className="w-3.5 h-3.5 text-indigo-400 inline" />
                    <span>Cloud Engineer & Full-Stack Developer</span>
                  </p>
                  
                  <div className="flex items-center gap-1.5 text-[11px] text-gray-400 pt-1">
                    <MapPin className="w-3.5 h-3.5 text-pink-400" />
                    <span>{PERSONAL_INFO.location}</span>
                  </div>
                </div>

              </div>

              {/* Bottom Quick Highlights Bar */}
              <div className="grid grid-cols-3 divide-x divide-gray-800 bg-gray-950/90 py-3 text-center">
                <div>
                  <div className="text-base font-bold text-indigo-400 font-mono">GCP/AWS</div>
                  <div className="text-[10px] text-gray-400 uppercase font-mono">Cloud Native</div>
                </div>
                <div>
                  <div className="text-base font-bold text-purple-400 font-mono">Full-Stack</div>
                  <div className="text-[10px] text-gray-400 uppercase font-mono">React & Node</div>
                </div>
                <div>
                  <div className="text-base font-bold text-pink-400 font-mono">DevOps</div>
                  <div className="text-[10px] text-gray-400 uppercase font-mono">Docker & K8s</div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Details & Tabs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Interactive Tab Headers */}
            <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-gray-900/80 border border-gray-800">
              {[
                { id: 'story', label: 'My Story', icon: Target },
                { id: 'expertise', label: 'Cloud & Tech', icon: Cpu },
                { id: 'education', label: 'Education', icon: GraduationCap },
                { id: 'strengths', label: 'Key Highlights', icon: Award }
              ].map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-600/30'
                        : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/60'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-indigo-400'}`} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Tab Content 1: My Story */}
            {activeTab === 'story' && (
              <div className="glass-card rounded-2xl p-6 sm:p-8 border border-gray-800 space-y-6 animate-fadeIn">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs uppercase tracking-wider">
                    <Terminal className="w-4 h-4" />
                    <span>Background & Mission</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Passionate about building scalable digital solutions
                  </h3>
                </div>

                <p className="text-gray-300 text-base leading-relaxed">
                  {PERSONAL_INFO.summary}
                </p>

                <p className="text-gray-400 text-sm leading-relaxed">
                  With a solid foundation in Information Technology from Wollo University, I specialize in automating cloud workflows, building robust full-stack applications with React and Node.js, and implementing containerized microservices using Docker & Kubernetes.
                </p>

                {/* Callout Quote Box */}
                <div className="p-4 rounded-xl bg-indigo-950/40 border border-indigo-500/30 text-indigo-200 text-sm italic leading-relaxed">
                  "{PERSONAL_INFO.callToAction}"
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-gray-800/80">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    <span>Get in touch for opportunities</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            )}

            {/* Tab Content 2: Cloud & Tech */}
            {activeTab === 'expertise' && (
              <div className="glass-card rounded-2xl p-6 sm:p-8 border border-gray-800 space-y-6 animate-fadeIn">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-purple-400 font-mono text-xs uppercase tracking-wider">
                    <Cloud className="w-4 h-4" />
                    <span>Domain Focus</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Technical Core Pillars</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-gray-900/90 border border-gray-800 space-y-2">
                    <div className="flex items-center gap-2 text-indigo-400 font-bold">
                      <Cloud className="w-5 h-5" />
                      <span>Cloud & DevOps</span>
                    </div>
                    <p className="text-xs text-gray-400">
                      GCP, AWS, Docker, Kubernetes, Linux, CI/CD pipelines, automated deployments.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-gray-900/90 border border-gray-800 space-y-2">
                    <div className="flex items-center gap-2 text-purple-400 font-bold">
                      <Code className="w-5 h-5" />
                      <span>Full-Stack Development</span>
                    </div>
                    <p className="text-xs text-gray-400">
                      React, TypeScript, Node.js, Express, REST APIs, MongoDB, PostgreSQL.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-gray-900/90 border border-gray-800 space-y-2">
                    <div className="flex items-center gap-2 text-pink-400 font-bold">
                      <Zap className="w-5 h-5" />
                      <span>Mobile Apps</span>
                    </div>
                    <p className="text-xs text-gray-400">
                      Cross-platform mobile application development using Flutter & Dart.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-gray-900/90 border border-gray-800 space-y-2">
                    <div className="flex items-center gap-2 text-emerald-400 font-bold">
                      <ShieldCheck className="w-5 h-5" />
                      <span>Security & Quality</span>
                    </div>
                    <p className="text-xs text-gray-400">
                      Hardened Linux servers, secure authentication, clean architecture patterns.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Tab Content 3: Education */}
            {activeTab === 'education' && (
              <div className="glass-card rounded-2xl p-6 sm:p-8 border border-gray-800 space-y-6 animate-fadeIn">
                <div className="flex items-center justify-between border-b border-gray-800 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-pink-600/20 border border-pink-500/30 text-pink-400">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{EDUCATION.degree}</h3>
                      <p className="text-xs text-pink-300 font-mono">{EDUCATION.institution}</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-pink-950/70 border border-pink-500/30 text-pink-300 text-xs font-mono font-semibold">
                    Graduation: {EDUCATION.graduationYear}
                  </span>
                </div>

                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider font-mono">Academic Highlights & Focus</h4>
                  <div className="grid grid-cols-1 gap-2.5">
                    {EDUCATION.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-sm text-gray-300 p-3 rounded-xl bg-gray-900/60 border border-gray-800/80">
                        <CheckCircle2 className="w-4 h-4 text-pink-400 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Tab Content 4: Key Highlights */}
            {activeTab === 'strengths' && (
              <div className="glass-card rounded-2xl p-6 sm:p-8 border border-gray-800 space-y-6 animate-fadeIn">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-wider">
                    <Award className="w-4 h-4" />
                    <span>Capabilities</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">What I Bring to the Table</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Cloud Infrastructure Architecting (GCP & AWS)",
                    "Automated CI/CD Deployment Pipelines",
                    "Modern React & TypeScript Web Apps",
                    "Container Orchestration (Docker & Kubernetes)",
                    "Cross-Platform Mobile Apps with Flutter",
                    "Linux System Administration & Scripting",
                    "RESTful API & Database Design",
                    "Collaborative Problem Solving & Agile Flow"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-gray-900/80 border border-gray-800 text-sm text-gray-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>

      </div>

      {/* Full Portrait Lightbox Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-xl animate-fadeIn">
          <div className="relative max-w-lg w-full bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden shadow-2xl">
            
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-gray-900/80 hover:bg-red-600 text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative max-h-[70vh] overflow-hidden bg-slate-950 p-2">
              <img
                src={profileImg}
                alt="Biruk Wagnew"
                className="w-full h-full object-contain mx-auto max-h-[65vh] rounded-2xl"
              />
            </div>

            {/* Modal Footer Info */}
            <div className="p-6 text-left space-y-3 bg-gray-900 border-t border-gray-800">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white">{PERSONAL_INFO.name}</h3>
                  <p className="text-xs text-indigo-400 font-mono">Cloud Engineer & Full-Stack Developer</p>
                </div>
                <a
                  href="#contact"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-semibold hover:shadow-lg transition-all"
                >
                  Contact Me
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
