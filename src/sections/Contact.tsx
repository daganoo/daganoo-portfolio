import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Loader2 } from "lucide-react";
import { UpworkIcon } from "../components/icons/UpworkIcon";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mzdwaejr";

export const Contact = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="relative container-page mx-auto py-24">
      <div className="pointer-events-none absolute -left-28 top-1/4 hidden h-[500px] w-[500px] rounded-full opacity-25 blur-[110px] dark:block" style={{ background: "radial-gradient(circle at center, #7c3aed 0%, transparent 70%)" }} />
      <div className="pointer-events-none absolute -right-20 top-1/2 hidden h-[400px] w-[400px] rounded-full opacity-20 blur-[100px] dark:block" style={{ background: "radial-gradient(circle at center, #1e3a5f 0%, transparent 70%)" }} />
      <div className="relative z-[1]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
          Get In Touch
        </h2>
        <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
          Need AI features, a serverless backend, or automation workflows? Let&apos;s talk.
        </p>
      </motion.div>

      <div className="mt-12 grid gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="space-y-6"
        >
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-emerald-500/10 p-3 text-emerald-500">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-card-foreground">Email</h3>
                <p className="text-sm text-muted-foreground">marwan.dagana@gmail.com</p>
                <a
                  href="mailto:marwan.dagana@gmail.com"
                  className="text-sm text-emerald-500 transition-colors hover:text-emerald-400"
                >
                  Send a message &rarr;
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-violet-500/10 p-3 text-violet-500">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-card-foreground">Location</h3>
                <p className="text-sm text-muted-foreground">Marrakesh, Morocco</p>
                <p className="text-sm text-muted-foreground/70">
                  Available for remote work worldwide
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-green-500/10 p-3 text-green-500">
                <UpworkIcon size={24} />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-card-foreground">Freelance Collaboration</h3>
                <p className="mb-3 text-sm text-muted-foreground">
                  Open to new projects and collaborations on Upwork
                </p>
                <a
                  href="https://www.upwork.com/freelancers/~01205234478041cf4f"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md bg-green-600 px-3 py-1.5 text-sm font-medium text-white transition-all hover:bg-green-500"
                >
                  <UpworkIcon size={14} />
                  Hire me on Upwork
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {status === "success" ? (
            <div className="flex flex-col items-center rounded-xl border border-border bg-card p-8 text-center shadow-sm">
              <div className="mb-4 rounded-full bg-green-500/10 p-4 text-green-500">
                <Send size={32} />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-card-foreground">Message Sent!</h3>
              <p className="text-muted-foreground">
                Thank you for reaching out. I&apos;ll get back to you soon.
              </p>
            </div>
          ) : status === "error" ? (
            <div className="flex flex-col items-center rounded-xl border border-border bg-card p-8 text-center shadow-sm">
              <div className="mb-4 rounded-full bg-red-500/10 p-4 text-red-500">
                <Send size={32} />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-card-foreground">Something went wrong</h3>
              <p className="mb-4 text-muted-foreground">
                Please try again or email me directly.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="text-sm text-primary transition-colors hover:text-primary/80"
              >
                Try again
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 rounded-xl border border-border bg-card p-6 shadow-sm">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-ring"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-ring"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full resize-none rounded-md border border-input bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-ring"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-60"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
      </div>
    </section>
  );
};
