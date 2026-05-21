import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">
          Get In <span className="text-gradient">Touch</span>
        </h2>
        <p className="section-subtitle">
          Have a project in mind or want to collaborate? I&apos;d love to hear from you.
        </p>
      </motion.div>

      <div className="grid gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="space-y-6"
        >
          <div className="glass-card flex items-start gap-4 p-6">
            <div className="rounded-lg bg-brand-50 p-3 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400">
              <Mail size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Email</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">hello@daganoo.dev</p>
              <a
                href="mailto:hello@daganoo.dev"
                className="text-sm text-brand-600 hover:text-brand-500 dark:text-brand-400 dark:hover:text-brand-300"
              >
                Send a message &rarr;
              </a>
            </div>
          </div>

          <div className="glass-card flex items-start gap-4 p-6">
            <div className="rounded-lg bg-brand-50 p-3 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400">
              <MapPin size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Location</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Agadir, Morocco</p>
              <p className="text-sm text-gray-400 dark:text-gray-500">
                Available for remote work worldwide
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {submitted ? (
            <div className="glass-card flex flex-col items-center p-8 text-center">
              <div className="mb-4 rounded-full bg-emerald-50 p-4 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
                <Send size={32} />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                Message Sent!
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Thank you for reaching out. I&apos;ll get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="glass-card space-y-5 p-6">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-gray-600 dark:text-gray-400"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none transition-colors focus:border-brand-500/50 focus:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder-gray-500 dark:focus:bg-white/10"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-600 dark:text-gray-400"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none transition-colors focus:border-brand-500/50 focus:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder-gray-500 dark:focus:bg-white/10"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-600 dark:text-gray-400"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  className="w-full resize-none rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none transition-colors focus:border-brand-500/50 focus:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder-gray-500 dark:focus:bg-white/10"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-600 px-6 py-3 font-medium text-white transition-all hover:bg-brand-500 hover:shadow-lg hover:shadow-brand-500/20"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};
