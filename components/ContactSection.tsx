"use client";

import { useState } from "react";
import { contactSection, siteConfig } from "@/lib/site-content";
import { ArrowRight, Mail, Clock } from "lucide-react";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function ContactSection({ bare = false }: { bare?: boolean }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "w-full px-3.5 py-3 bg-surface border border-rule rounded-lg text-ink placeholder:text-ink-faint focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-colors";
  const labelClass =
    "block font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted mb-2";

  return (
    <section id={contactSection.sectionId} className={`py-24 md:py-32 surface-canvas ${bare ? "" : "border-t border-rule"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="eyebrow eyebrow-brand mb-6">{bare ? "Direct contact" : contactSection.eyebrow}</p>
            {!bare && (
              <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl leading-[1.05] tracking-tight text-balance text-ink mb-6">
                {contactSection.heading}
              </h2>
            )}
            <p className="text-ink-soft text-lg leading-relaxed mb-12">
              {bare
                ? "Eén aanspreekpunt, korte lijnen. Vul het formulier in of pak direct een van de kanalen hieronder."
                : contactSection.intro}
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 rounded-xl border border-rule bg-surface px-5 py-4">
                <Clock className="w-5 h-5 text-brand shrink-0" aria-hidden="true" />
                <p className="text-ink-soft text-sm">{contactSection.responseTime}</p>
              </div>
              <a
                href={`mailto:${siteConfig.email}`}
                className="group flex items-center gap-4 rounded-xl border border-rule bg-surface px-5 py-4 hover:border-brand/40 transition-colors"
              >
                <Mail className="w-5 h-5 text-brand shrink-0" aria-hidden="true" />
                <span className="font-mono text-sm text-ink-soft group-hover:text-brand transition-colors break-all">
                  {siteConfig.email}
                </span>
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-rule bg-surface px-5 py-4 hover:border-brand/40 transition-colors"
              >
                <LinkedinIcon className="w-5 h-5 text-brand shrink-0" />
                <span className="text-sm text-ink-soft group-hover:text-brand transition-colors">
                  Connect via LinkedIn
                </span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="bg-surface border border-rule p-7 md:p-10 rounded-2xl shadow-xl shadow-ink/5"
            >
              {submitted ? (
                <div className="text-center py-16">
                  <div className="mx-auto mb-5 w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-brand" aria-hidden="true" />
                  </div>
                  <p className="font-display font-bold text-2xl text-ink mb-3 tracking-tight">
                    Bedankt, je bericht is verstuurd.
                  </p>
                  <p className="text-ink-soft">Ik neem binnen één werkdag contact op.</p>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>{contactSection.fields.name.label}</label>
                    <input type="text" placeholder={contactSection.fields.name.placeholder} required className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>{contactSection.fields.email.label}</label>
                    <input type="email" placeholder={contactSection.fields.email.placeholder} required className={inputClass} />
                  </div>
                  <div className="md:col-span-2">
                    <label className={labelClass}>{contactSection.fields.company.label}</label>
                    <input type="text" placeholder={contactSection.fields.company.placeholder} className={inputClass} />
                  </div>
                  <div className="md:col-span-2">
                    <label className={labelClass}>{contactSection.fields.message.label}</label>
                    <textarea placeholder={contactSection.fields.message.placeholder} required rows={5} className={`${inputClass} resize-none`} />
                  </div>
                  <div className="md:col-span-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-1">
                    <p className="font-mono text-[11px] text-ink-muted">
                      {contactSection.responseTime}
                    </p>
                    <button
                      type="submit"
                      className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-brand text-brand-ink font-display font-semibold rounded-lg shadow-lg shadow-brand/20 hover:shadow-xl hover:shadow-brand/30 hover:-translate-y-0.5 transition-all"
                    >
                      {contactSection.submitLabel}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
