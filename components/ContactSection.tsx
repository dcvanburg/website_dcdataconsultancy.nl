"use client";

import { useState } from "react";
import { contactSection, siteConfig } from "@/lib/site-content";
import { ArrowRight, Mail, Clock } from "lucide-react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id={contactSection.sectionId} className="py-28 md:py-36 surface-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          <div className="lg:col-span-5">
            <p className="eyebrow eyebrow-brand mb-6">{contactSection.eyebrow}</p>
            <h2 className="font-display font-bold text-4xl md:text-5xl leading-[1.05] tracking-tight text-balance mb-6">
              {contactSection.heading}
            </h2>
            <p className="text-ink-soft text-lg leading-relaxed mb-12">
              {contactSection.intro}
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-brand mt-0.5 shrink-0" aria-hidden="true" />
                <p className="text-ink-soft">{contactSection.responseTime}</p>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-brand mt-0.5 shrink-0" aria-hidden="true" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-mono text-sm text-ink-soft hover:text-brand transition-colors"
                >
                  MAIL_:: {siteConfig.email}
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="bg-canvas border border-rule p-8 md:p-10 rounded-lg"
            >
              {submitted ? (
                <div className="text-center py-12">
                  <p className="font-display font-semibold text-2xl text-ink mb-3">
                    Bedankt, je bericht is verstuurd.
                  </p>
                  <p className="text-ink-soft">
                    Ik neem binnen één werkdag contact op.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="md:col-span-1">
                    <label className="block font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted mb-2">
                      {contactSection.fields.name.label}
                    </label>
                    <input
                      type="text"
                      placeholder={contactSection.fields.name.placeholder}
                      required
                      className="w-full px-3.5 py-3 bg-surface border border-rule rounded-md text-ink placeholder:text-ink-faint focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand"
                    />
                  </div>
                  <div className="md:col-span-1">
                    <label className="block font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted mb-2">
                      {contactSection.fields.email.label}
                    </label>
                    <input
                      type="email"
                      placeholder={contactSection.fields.email.placeholder}
                      required
                      className="w-full px-3.5 py-3 bg-surface border border-rule rounded-md text-ink placeholder:text-ink-faint focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted mb-2">
                      {contactSection.fields.company.label}
                    </label>
                    <input
                      type="text"
                      placeholder={contactSection.fields.company.placeholder}
                      className="w-full px-3.5 py-3 bg-surface border border-rule rounded-md text-ink placeholder:text-ink-faint focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted mb-2">
                      {contactSection.fields.message.label}
                    </label>
                    <textarea
                      placeholder={contactSection.fields.message.placeholder}
                      required
                      rows={5}
                      className="w-full px-3.5 py-3 bg-surface border border-rule rounded-md text-ink placeholder:text-ink-faint focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand resize-none"
                    />
                  </div>
                  <div className="md:col-span-2 flex items-center justify-between gap-4 pt-2">
                    <p className="font-mono text-[11px] text-ink-muted">
                      {contactSection.alternative}{" "}
                      <a
                        href={contactSection.alternativeOptions[1].href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-brand"
                      >
                        LinkedIn
                      </a>
                    </p>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-brand text-brand-ink font-display font-semibold rounded-md hover:shadow-md hover:shadow-brand/20 transition-all"
                    >
                      {contactSection.submitLabel}
                      <ArrowRight className="w-4 h-4" />
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
