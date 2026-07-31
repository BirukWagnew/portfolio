import React, { useState } from 'react';
import { Cloud, Terminal, Layout, Server, Smartphone, Database, Code2, Search, Cpu, CheckCircle } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cloud': return <Cloud className="w-5 h-5" />;
      case 'Terminal': return <Terminal className="w-5 h-5" />;
      case 'Layout': return <Layout className="w-5 h-5" />;
      case 'Server': return <Server className="w-5 h-5" />;
      case 'Smartphone': return <Smartphone className="w-5 h-5" />;
      case 'Database': return <Database className="w-5 h-5" />;
      default: return <Code2 className="w-5 h-5" />;
    }
  };

  const filteredCategories = SKILL_CATEGORIES.map(cat => {
    const matchingSkills = cat.skills.filter(s =>
      s.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return {
      ...cat,
      skills: matchingSkills
    };
  }).filter(cat =>
    selectedCategory === 'All'
      ? cat.skills.length > 0
      : cat.name === selectedCategory && cat.skills.length > 0
  );

  return (
    <section id="skills" className="py-20 bg-[#090d16] relative border-t border-gray-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs font-mono">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & <span className="text-gradient-cyan">Technologies</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base">
            Modern tools, cloud platforms, languages, and frameworks I use to build robust software.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-4 py-2 rounded-xl text-xs font-medium font-mono transition-all duration-200 ${
                selectedCategory === 'All'
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'bg-gray-900 border border-gray-800 text-gray-400 hover:text-white hover:border-gray-700'
              }`}
            >
              All Skills
            </button>
            {SKILL_CATEGORIES.map(cat => (
              <button
                key={cat.name}
                onClick={() => setSelectedCategory(cat.name)}
                className={`px-4 py-2 rounded-xl text-xs font-medium font-mono flex items-center gap-1.5 transition-all duration-200 ${
                  selectedCategory === cat.name
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                    : 'bg-gray-900 border border-gray-800 text-gray-400 hover:text-white hover:border-gray-700'
                }`}
              >
                {getCategoryIcon(cat.iconName)}
                <span>{cat.name}</span>
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill (e.g. Docker, React)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-gray-900 border border-gray-800 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {filteredCategories.map((category) => (
            <div
              key={category.name}
              className="glass-card glass-card-hover rounded-2xl p-6 border border-gray-800/80 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-gray-800/60 pb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-indigo-950/80 border border-indigo-500/30 text-indigo-400">
                      {getCategoryIcon(category.iconName)}
                    </div>
                    <h3 className="font-bold text-white text-lg">{category.name}</h3>
                  </div>
                  <span className="text-xs font-mono text-gray-500">{category.skills.length} skills</span>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`px-3 py-1.5 rounded-lg border text-xs font-mono flex items-center gap-1.5 transition-all duration-200 ${
                        skill.highlight
                          ? 'bg-indigo-950/40 border-indigo-500/40 text-indigo-200 shadow-sm'
                          : 'bg-gray-900/60 border-gray-800 text-gray-300'
                      }`}
                    >
                      <CheckCircle className="w-3 h-3 text-indigo-400" />
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <div className="py-12 text-center text-gray-500 font-mono text-sm">
            No skills matching "{searchQuery}"
          </div>
        )}

      </div>
    </section>
  );
};
