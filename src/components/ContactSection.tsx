import React, { useState } from 'react';
import { Check, Copy, Mail, Phone, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';
import { GithubIcon, LinkedinIcon } from './Icons';

const FIELD_CLASS =
  'w-full rounded-xl border border-[var(--hairline)] bg-[var(--bg-sunken)] px-3.5 py-2.5 text-sm text-strong placeholder:text-[var(--text-muted)] transition-colors focus:border-[var(--hairline-strong)] focus:outline-none';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  /**
   * No backend: the form composes a pre-filled message and hands it to the
   * visitor's mail client, so nothing can silently fail server-side.
   */
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name') ?? '');
    const email = String(data.get('email') ?? '');
    const subject = String(data.get('subject') ?? '');
    const message = String(data.get('message') ?? '');

    const body = `${message}\n\n—\n${name}\n${email}`;
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <section id="contact" className="section divider-top">
      <div className="container-page">
        <SectionHeading
          eyebrow="Contact"
          title={
            <>
              Let&rsquo;s talk about your <span className="text-gold-gradient">next system</span>
            </>
          }
          description="Available for cloud, DevOps and full-stack roles, and for freelance work. The fastest route is email — the form below opens a pre-filled message."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="card h-full p-6 sm:p-7">
              <ul className="grid gap-4">
                <li>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="group flex items-center gap-3"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-[var(--hairline-strong)] bg-[var(--accent-soft)] text-accent">
                      <Mail className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-mono text-[0.65rem] uppercase tracking-widest text-dim">
                        Email
                      </span>
                      <span className="block truncate text-sm text-strong group-hover:text-accent">
                        {PERSONAL_INFO.email}
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${PERSONAL_INFO.phone.replace(/\s/g, '')}`}
                    className="group flex items-center gap-3"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-[var(--hairline-strong)] bg-[var(--accent-soft)] text-accent">
                      <Phone className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block font-mono text-[0.65rem] uppercase tracking-widest text-dim">
                        Phone
                      </span>
                      <span className="block text-sm text-strong group-hover:text-accent">
                        {PERSONAL_INFO.phone}
                      </span>
                    </span>
                  </a>
                </li>
              </ul>

              <div className="mt-6 flex flex-wrap gap-3 border-t border-[var(--hairline)] pt-6">
                <a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btn btn-secondary"
                >
                  <GithubIcon className="h-4 w-4" />
                  GitHub
                </a>
                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btn btn-secondary"
                >
                  <LinkedinIcon className="h-4 w-4" />
                  LinkedIn
                </a>
                <button type="button" onClick={copyEmail} className="btn btn-ghost hairline border">
                  {copied ? (
                    <Check className="h-4 w-4 text-accent" aria-hidden="true" />
                  ) : (
                    <Copy className="h-4 w-4" aria-hidden="true" />
                  )}
                  {copied ? 'Copied' : 'Copy email'}
                </button>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-body">
                Based in {PERSONAL_INFO.location}, working remotely across time zones.
              </p>
            </div>
          </Reveal>

          <Reveal delay={80} className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="card grid gap-4 p-6 sm:p-7">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm text-body">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Your name"
                    className={FIELD_CLASS}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm text-body">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@company.com"
                    className={FIELD_CLASS}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="mb-1.5 block text-sm text-body">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="Role, project or question"
                  className={FIELD_CLASS}
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm text-body">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="A few lines about what you need."
                  className={`${FIELD_CLASS} resize-y`}
                />
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button type="submit" className="btn btn-primary">
                  <Send className="h-4 w-4" aria-hidden="true" />
                  Send Message
                </button>
                <p aria-live="polite" className="text-sm text-dim">
                  {sent
                    ? 'Your mail client should now be open with the message ready to send.'
                    : ''}
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
