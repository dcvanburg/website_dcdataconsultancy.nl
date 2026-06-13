"use client";

import { useState } from "react";
import { contactSection, siteConfig } from "@/lib/site-content";
import { Mail, MapPin, Send, Clock } from "lucide-react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Aanvraag van ${form.name}${form.company ? ` (${form.company})` : ""}`
    );
    const body = encodeURIComponent(
      `Naam: ${form.name}\nE-mail: ${form.email}\nBedrijf: ${form.company}\n\n${form.message}`
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id={contactSection.sectionId} className="py-20 md:py-28 section-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="text-blue-300 font-semibold text-sm uppercase tracking-widest mb-3">
              {contactSection.eyebrow}
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
              {contactSection.heading}
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              {contactSection.intro}
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-white/80">
                <Mail className="w-5 h-5 text-blue-400 shrink-0" aria-hidden="true" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-white transition-colors text-sm"
                >
                  {siteConfig.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <MapPin className="w-5 h-5 text-blue-400 shrink-0" aria-hidden="true" />
                <span className="text-sm">
                  {siteConfig.city}, {siteConfig.country} (werkt door heel Nederland)
                </span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <Clock className="w-5 h-5 text-blue-400 shrink-0" aria-hidden="true" />
                <span className="text-sm">{contactSection.responseTime}</span>
              </div>
            </div>

            <div className="text-sm text-white/60">
              <p className="font-semibold text-white mb-2">{contactSection.alternative}</p>
              <div className="flex flex-wrap gap-3">
                {contactSection.alternativeOptions.map((opt) => (
                  <a
                    key={opt.href}
                    href={opt.href}
                    target={opt.href.startsWith("http") ? "_blank" : undefined}
                    rel={opt.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="px-4 py-2 rounded-lg border border-white/20 hover:bg-white/5 hover:border-white/40 text-white/80 hover:text-white transition-colors text-xs"
                  >
                    {opt.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 md:p-8 space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label={contactSection.fields.name.label} required>
                  <input
                    type="text"
                    required
                    placeholder={contactSection.fields.name.placeholder}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </Field>
                <Field label={contactSection.fields.email.label} required>
                  <input
                    type="email"
                    required
                    placeholder={contactSection.fields.email.placeholder}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </Field>
              </div>
              <Field label={contactSection.fields.company.label}>
                <input
                  type="text"
                  placeholder={contactSection.fields.company.placeholder}
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </Field>
              <Field label={contactSection.fields.message.label} required>
                <textarea
                  required
                  rows={5}
                  placeholder={contactSection.fields.message.placeholder}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                />
              </Field>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors shadow-lg shadow-blue-500/25"
              >
                {contactSection.submitLabel}
                <Send className="w-4 h-4" aria-hidden="true" />
              </button>
              <p className="text-xs text-white/40 pt-2">
                Door versturen open je je eigen mailprogramma. We slaan geen data op deze website
                op.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  children,
  required,
}: {
  label: string;
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-white/80 mb-1.5">
        {label}
        {required ? <span className="text-blue-400 ml-1">*</span> : null}
      </span>
      {children}
    </label>
  );
}
