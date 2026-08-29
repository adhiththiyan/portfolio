"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight, MapPin, Clock } from "lucide-react";

const contactContent = {
  badge: "Get In Touch",
  heading: "Let's Build Something Together",
  description:
    "Whether you have a project in mind, a role to fill, or just want to chat about technology — my inbox is always open.",
  location: "Based in India — available for remote work worldwide",
  responseTime: "Usually responds within 24 hours",
  formTitle: "Send a Message",
  submitLabel: "Send Message",
  fields: {
    name: { label: "Name", placeholder: "John Doe" },
    email: { label: "Email", placeholder: "john@example.com" },
    subject: { label: "Subject", placeholder: "Project Inquiry / Job Opportunity / ..." },
    message: { label: "Message", placeholder: "Tell me about your project or idea..." },
  },
};

const contactLinks = [
  {
    label: "GitHub",
    value: "github.com/adhiththiyan",
    href: "https://github.com/adhiththiyan",
    icon: <Mail size={20} />,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/adhithiyan-s-735851267",
    href: "https://www.linkedin.com/in/adhithiyan-s-735851267",
    icon: <Mail size={20} />,
  },
  {
    label: "Email",
    value: "adhithiyan.sg@gmail.com",
    href: "mailto:adhithiyan.sg@gmail.com",
    icon: <Mail size={20} />,
  },
];

export function ContactSection({ id }: { id?: string }) {
  return (
    <section id={id} className="py-24 md:py-32 relative bg-background border-t border-border overflow-hidden">
      <div className="glow-bottom" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-primary/5 text-primary border border-primary/20 tracking-wider uppercase backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                {contactContent.badge}
              </span>

              <h2 className="text-4xl md:text-5xl font-heading font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-muted-foreground/60 leading-tight py-1">
                {contactContent.heading}
              </h2>

              <p className="text-lg text-muted-foreground/80 leading-relaxed">
                {contactContent.description}
              </p>
            </div>

            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <MapPin size={15} className="text-primary/70 shrink-0" />
                <span>{contactContent.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={15} className="text-primary/70 shrink-0" />
                <span>{contactContent.responseTime}</span>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              {contactLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.1 * index }}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 p-4 rounded-2xl border border-border bg-card/40 backdrop-blur-md hover:border-primary/30 hover:bg-card/60 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                    {link.icon}
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">{link.label}</span>
                    <span className="text-sm text-foreground truncate">{link.value}</span>
                  </div>
                  <ArrowRight size={16} className="ml-auto text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-1 transition-all duration-200 shrink-0" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="relative border border-border bg-card/40 backdrop-blur-md rounded-2xl p-8 h-full"
          >
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-primary/10 rounded-full blur-[60px] pointer-events-none" />

            <div className="relative z-10 space-y-10">
              <h3 className="text-xl font-heading font-semibold text-foreground">
                {contactContent.formTitle}
              </h3>

              <div className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs text-muted-foreground font-medium uppercase tracking-wider">
                      {contactContent.fields.name.label}
                    </label>
                    <input
                      type="text"
                      placeholder={contactContent.fields.name.placeholder}
                      className="w-full bg-background/60 border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:bg-background/80 transition-all duration-200"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-xs text-muted-foreground font-medium uppercase tracking-wider">
                      {contactContent.fields.email.label}
                    </label>
                    <input
                      type="email"
                      placeholder={contactContent.fields.email.placeholder}
                      className="w-full bg-background/60 border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:bg-background/80 transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs text-muted-foreground font-medium uppercase tracking-wider">
                    {contactContent.fields.subject.label}
                  </label>
                  <input
                    type="text"
                    placeholder={contactContent.fields.subject.placeholder}
                    className="w-full bg-background/60 border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:bg-background/80 transition-all duration-200"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs text-muted-foreground font-medium uppercase tracking-wider">
                    {contactContent.fields.message.label}
                  </label>
                  <textarea
                    rows={5}
                    placeholder={contactContent.fields.message.placeholder}
                    className="w-full bg-background/60 border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:bg-background/80 transition-all duration-200 resize-none"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm tracking-wide hover:opacity-90 transition-all duration-200"
                >
                  {contactContent.submitLabel}
                  <ArrowRight size={16} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
