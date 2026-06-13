"use client";

import { useState } from "react";
import { contact, siteConfig } from "@/lib/site-content";
import { Mail, MapPin, Send } from "lucide-react";

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mailto fallback
    const subject = encodeURIComponent(
      `Bericht van ${formState.name} via dcdataconsultancy.nl`
    );
    const body = encodeURIComponent(
      `Naam: ${formState.name}\nE-mail: ${formState.email}\n\nBericht:\n${formState.message}`
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id={contact.sectionId} className="py-20 md:py-28 section-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: info */}
          <div>
            <p className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-4">
              Contact
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              {contact.heading}
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-10">
              {contact.intro}
            </p>

            {/* Contact details */}
            <div className="space-y-5">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-4 text-white/70 hover:text-white transition-colors group"
              >
                <div className="w-11 h-11 rounded-xl bg-white/5 group-hover:bg-blue-500/20 flex items-center justify-center border border-white/10 transition-colors">
                  <Mail size={20} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-white/40 text-xs mb-0.5">E-mail</p>
                  <span className="font-medium">{siteConfig.email}</span>
                </div>
              </a>

              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-white/70 hover:text-white transition-colors group"
              >
                <div className="w-11 h-11 rounded-xl bg-white/5 group-hover:bg-blue-500/20 flex items-center justify-center border border-white/10 transition-colors">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 text-blue-400"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white/40 text-xs mb-0.5">LinkedIn</p>
                  <span className="font-medium">{contact.linkedinLabel}</span>
                </div>
              </a>

              <div className="flex items-center gap-4 text-white/70">
                <div className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                  <MapPin size={20} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-white/40 text-xs mb-0.5">Locatie</p>
                  <span className="font-medium">{siteConfig.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div>
            {submitted ? (
              <div className="h-full flex items-center justify-center text-center py-16">
                <div>
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                    <svg
                      className="w-8 h-8 text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-white text-xl font-bold mb-2">
                    Bedankt voor je bericht!
                  </h3>
                  <p className="text-white/60">
                    Je e-mailclient opent automatisch. Ik reageer zo snel mogelijk.
                  </p>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5"
                noValidate
              >
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-white/70 text-sm font-medium mb-2"
                  >
                    {contact.fields.name.label}
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    placeholder={contact.fields.name.placeholder}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-white/70 text-sm font-medium mb-2"
                  >
                    {contact.fields.email.label}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    placeholder={contact.fields.email.placeholder}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-white/70 text-sm font-medium mb-2"
                  >
                    {contact.fields.message.label}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formState.message}
                    onChange={handleChange}
                    placeholder={contact.fields.message.placeholder}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl transition-colors shadow-lg shadow-blue-500/25"
                >
                  <Send size={18} />
                  {contact.submitLabel}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
