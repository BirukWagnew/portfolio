import React from 'react';
import { ArrowUp, Terminal, Cloud } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05080f] border-t border-gray-800/80 py-12 text-gray-400 text-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-pink-500 p-0.5 flex items-center justify-center">
              <div className="w-full h-full bg-[#05080f] rounded-[6px] flex items-center justify-center">
                <Terminal className="w-4 h-4 text-indigo-400" />
              </div>
            </div>
            <div className="text-left">
              <div className="font-bold text-white text-base">{PERSONAL_INFO.name}</div>
              <div className="text-xs text-gray-500 font-mono flex items-center gap-1">
                <Cloud className="w-3 h-3 text-indigo-400" /> Cloud Engineer & Full-Stack Developer
              </div>
            </div>
          </div>

          {/* Copyright & Stack Note */}
          <div className="text-center md:text-right space-y-1">
            <p className="text-xs text-gray-400">
              © 2026 <span className="text-white font-medium">{PERSONAL_INFO.name}</span>. All rights reserved.
            </p>
            <p className="text-[11px] font-mono text-gray-500">
              Built with <span className="text-indigo-400 font-semibold">React</span>, <span className="text-purple-400 font-semibold">TypeScript</span>, and <span className="text-pink-400 font-semibold">Tailwind CSS</span>.
            </p>
          </div>

          {/* Scroll To Top Button */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-gray-900 border border-gray-800 text-gray-400 hover:text-white hover:border-indigo-500/50 hover:bg-gray-800 transition-all duration-200"
            title="Scroll to Top"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>

        </div>
      </div>
    </footer>
  );
};
