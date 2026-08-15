import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, TwitterIcon, MediumIcon, DevToIcon } from './Icons';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;

    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name || 'Someone'}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    window.open(`mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`, '_self');

    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 5000);
  };

  return (
    <section id="contact" className="py-20 bg-[#090d16]/95 relative border-t border-gray-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Call To Action Banner */}
        <div className="mb-16 glass-card rounded-3xl p-8 sm:p-12 border border-indigo-500/30 bg-gradient-to-r from-indigo-950/40 via-purple-950/30 to-pink-950/30 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-3xl mx-auto space-y-6 relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Let's Build Something <span className="text-gradient-primary">Amazing Together</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              "{PERSONAL_INFO.callToAction}"
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:to-pink-500 text-white font-bold text-base shadow-xl shadow-indigo-600/30 hover:scale-105 transition-all duration-200 flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                <span>Send Direct Email</span>
              </a>
              <button
                onClick={handleCopyEmail}
                className="px-6 py-4 rounded-2xl bg-gray-900 border border-gray-700 hover:border-indigo-500 text-gray-200 font-semibold text-base transition-all duration-200 flex items-center gap-2"
              >
                {copied ? <CheckCircle2 className="w-5 h-5 text-emerald-400" /> : <Copy className="w-5 h-5 text-indigo-400" />}
                <span>{copied ? 'Email Copied!' : 'Copy Email Address'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Contact Info Cards & Quick Message Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
          
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl font-bold text-white">Contact Information</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Feel free to reach out via email, phone, or connect with me across my social profiles.
            </p>

            <div className="space-y-4">
              {/* Email Card */}
              <div className="glass-card rounded-2xl p-5 border border-gray-800 flex items-center gap-4">
                <div className="p-3.5 rounded-xl bg-indigo-600/20 border border-indigo-500/30 text-indigo-400">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-xs font-mono text-gray-400 uppercase">Email Address</div>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-base font-semibold text-white hover:text-indigo-300 transition-colors truncate block">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div className="glass-card rounded-2xl p-5 border border-gray-800 flex items-center gap-4">
                <div className="p-3.5 rounded-xl bg-pink-600/20 border border-pink-500/30 text-pink-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-gray-400 uppercase">Location</div>
                  <div className="text-base font-semibold text-white">
                    {PERSONAL_INFO.location}
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              <div className="glass-card rounded-2xl p-5 border border-gray-800 flex items-center gap-4">
                <div className="p-3.5 rounded-xl bg-purple-600/20 border border-purple-500/30 text-purple-400">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-gray-400 uppercase">Phone</div>
                  <div className="text-base font-semibold text-white">
                    {PERSONAL_INFO.phone}
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links Bar */}
            <div className="pt-4 space-y-3">
              <div className="text-xs font-mono text-gray-400 uppercase tracking-wider">Connect Across Platforms</div>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: 'GitHub', icon: <GithubIcon className="w-4 h-4" />, url: PERSONAL_INFO.socials.github },
                  { name: 'LinkedIn', icon: <LinkedinIcon className="w-4 h-4" />, url: PERSONAL_INFO.socials.linkedin },
                  { name: 'Twitter / X', icon: <TwitterIcon className="w-4 h-4" />, url: PERSONAL_INFO.socials.twitter },
                  { name: 'Medium', icon: <MediumIcon className="w-4 h-4" />, url: PERSONAL_INFO.socials.medium },
                  { name: 'Dev.to', icon: <DevToIcon className="w-4 h-4" />, url: PERSONAL_INFO.socials.devto }
                ].map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 rounded-xl bg-gray-900 border border-gray-800 text-gray-300 hover:text-white hover:border-indigo-500/50 hover:bg-gray-800 text-xs font-mono flex items-center gap-2 transition-colors"
                  >
                    {s.icon}
                    <span>{s.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Quick Contact Form */}
          <div className="lg:col-span-7 glass-card rounded-3xl p-8 border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-2">Send a Message</h3>
            <p className="text-gray-400 text-sm mb-6">
              Have a question, job opportunity, or project inquiry? Drop me a note below.
            </p>

            {formSubmitted ? (
              <div className="p-8 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-3 animate-fadeIn">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="text-xl font-bold text-white">Thank You!</h4>
                <p className="text-sm text-emerald-200">
                  Your message has been logged. Biruk will respond shortly at <span className="underline">{formData.email || 'your email'}</span>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-gray-300 mb-1.5">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-800 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-300 mb-1.5">Your Email</label>
                  <input
                    type="email"
                    required
                    placeholder="jane@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-800 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-300 mb-1.5">Message</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Hi Biruk, we would like to discuss a Cloud / DevOps opportunity..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-800 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-sm shadow-lg shadow-indigo-600/30 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Message</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
