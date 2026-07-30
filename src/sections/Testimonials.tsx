import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { UpworkIcon } from "../components/icons/UpworkIcon";
import { testimonials } from "../data/testimonials";
import type { Testimonial } from "../types";

const platformIcon: Record<Testimonial["platform"], { icon: React.FC<{ size: number }>; label: string }> = {
  upwork: { icon: UpworkIcon, label: "Upwork" },
  linkedin: { icon: ({ size }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ), label: "LinkedIn" },
  direct: { icon: ({ size }) => <Star size={size} />, label: "Client" },
};

export const Testimonials = () => {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute right-0 top-0 -z-10 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 h-96 w-96 rounded-full bg-secondary blur-3xl" />

      <div className="container-page mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
            What Clients Say
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Feedback from clients and collaborators I&apos;ve worked with.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => {
            const PlatformIcon = platformIcon[t.platform].icon;
            return (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm"
              >
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: t.rating }).map((_, starIdx) => (
                    <Star
                      key={starIdx}
                      size={16}
                      className="fill-amber-400 text-amber-400 [&_svg]:italic"
                      strokeWidth={1.5}
                    />
                  ))}
                  <span className="ml-1.5 text-sm font-medium text-amber-500">5.0</span>
                </div>

                <blockquote className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
                  &ldquo;{t.content}&rdquo;
                </blockquote>

                <div className="flex items-center justify-between border-t border-border pt-4">
                  <div>
                    <p className="text-sm font-semibold text-card-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                  <a
                    href="https://www.upwork.com/freelancers/~01205234478041cf4f"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 rounded-md border border-border/60 px-2.5 py-1 text-xs text-muted-foreground transition-colors hover:bg-border/30"
                    title={platformIcon[t.platform].label}
                  >
                    <PlatformIcon size={14} />
                    {platformIcon[t.platform].label}
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
