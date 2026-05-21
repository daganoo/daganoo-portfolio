import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ExternalLink } from "lucide-react";

const easeOutExpo = [0.25, 0.46, 0.45, 0.94] as const;

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOutExpo },
  },
};

const nameReveal = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const letter = {
  hidden: { opacity: 0, y: 40, rotateX: -90 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.5, ease: easeOutExpo },
  },
};

const firstName = "Marouane".split("");
const lastName = "Dagana".split("");

const LetterSpan = ({
  char,
  gradient,
  disabled,
}: {
  char: string;
  gradient: boolean;
  disabled: boolean;
}) => (
  <motion.span
    variants={disabled ? undefined : letter}
    className={`inline-block ${gradient ? "text-gradient" : "text-gray-800 dark:text-gray-200"}`}
  >
    {char === " " ? "\u00A0" : char}
  </motion.span>
);

const BreakSpan = ({ disabled }: { disabled: boolean }) => (
  <motion.span
    variants={disabled ? undefined : letter}
    className="block h-0 w-full select-none"
    aria-hidden="true"
  >
    &nbsp;
  </motion.span>
);

export const Hero = () => {
  const prefersReduced = !!useReducedMotion();

  return (
    <section
      id="hero"
      className="section-container relative flex min-h-screen flex-col items-center justify-center text-center"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="max-w-3xl"
      >
        <motion.p
          variants={item}
          className="mb-4 font-mono text-sm text-brand-500 dark:text-brand-400"
        >
          Hello, I&apos;m
        </motion.p>

        <motion.h1
          className="mb-2 text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl"
          variants={prefersReduced ? undefined : nameReveal}
          initial={prefersReduced ? undefined : "hidden"}
          animate={prefersReduced ? undefined : "visible"}
        >
          {firstName.map((char, i) => (
            <LetterSpan
              key={`f-${i}`}
              char={char}
              gradient
              disabled={prefersReduced}
            />
          ))}
          <BreakSpan disabled={prefersReduced} />
          {lastName.map((char, i) => (
            <LetterSpan
              key={`l-${i}`}
              char={char}
              gradient={false}
              disabled={prefersReduced}
            />
          ))}
        </motion.h1>

        <motion.p
          variants={item}
          className="mb-8 text-xl leading-relaxed text-gray-500 dark:text-gray-400 sm:text-2xl"
        >
          AWS Cloud &amp; AI Engineer crafting serverless solutions
          <br />
          with Amazon Bedrock, Lambda, and full-stack React applications.
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-6 py-3 font-medium text-white transition-all hover:bg-brand-500 hover:shadow-lg hover:shadow-brand-500/20"
          >
            <ExternalLink size={18} />
            View My Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl border border-gray-200 px-6 py-3 font-medium text-gray-600 transition-all hover:border-gray-300 hover:text-gray-900 dark:border-white/10 dark:text-gray-300 dark:hover:border-white/20 dark:hover:text-white"
          >
            Get In Touch
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        className="absolute bottom-10 animate-bounce text-gray-300 transition-colors hover:text-gray-600 dark:text-gray-500 dark:hover:text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        aria-label="Scroll down"
      >
        <ArrowDown size={24} />
      </motion.a>
    </section>
  );
};
