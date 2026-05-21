import { motion } from "framer-motion";
import { Code2, Cloud, Sparkles, Zap } from "lucide-react";

const highlights = [
  {
    icon: Cloud,
    label: "AWS Cloud",
    description: "Serverless architectures, EC2, S3, Lambda, DynamoDB",
  },
  {
    icon: Sparkles,
    label: "AI & Machine Learning",
    description: "Amazon Bedrock, generative AI pipelines, prompt engineering",
  },
  {
    icon: Code2,
    label: "Full-Stack Development",
    description: "React, TypeScript, Node.js, Express, REST APIs",
  },
  {
    icon: Zap,
    label: "Automation",
    description: "n8n workflows, CI/CD, infrastructure as code",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i, duration: 0.5 },
  }),
};

export const About = () => {
  return (
    <section id="about" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">
          About <span className="text-gradient">Me</span>
        </h2>
        <p className="section-subtitle">
          I&apos;m a Software Engineering Master&apos;s student at Ibn Zohr
          University in Agadir and a freelance AWS &amp; AI developer. I build
          cloud-native applications, automate workflows, and craft AI-powered
          solutions for startups and businesses.
        </p>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {highlights.map((item, i) => (
          <motion.div
            key={item.label}
            className="glass-card flex flex-col items-center p-6 text-center"
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="mb-4 rounded-xl bg-brand-50 p-3 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400">
              <item.icon size={24} />
            </div>
            <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
              {item.label}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
