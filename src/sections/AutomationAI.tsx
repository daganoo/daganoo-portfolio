import { motion } from "framer-motion";
import { Workflow, Sparkles, Zap, Cloud, Code2 } from "lucide-react";

const automations = [
  {
    icon: Workflow,
    title: "n8n Workflows",
    description: "Custom automation workflows connecting AWS services, APIs, and third-party tools for business process automation.",
    tags: ["n8n", "Webhooks", "Scheduling", "Error Handling"],
  },
  {
    icon: Sparkles,
    title: "AI Integrations",
    description: "Amazon Bedrock and OpenAI integrations for intelligent content generation, classification, and decision-making pipelines.",
    tags: ["Bedrock", "Claude", "Lambda", "API Gateway"],
  },
  {
    icon: Cloud,
    title: "Serverless Automation",
    description: "Event-driven architectures using AWS Lambda, Step Functions, and SQS for scalable, cost-effective automation.",
    tags: ["Step Functions", "SQS", "EventBridge", "SNS"],
  },
  {
    icon: Code2,
    title: "CI/CD Pipelines",
    description: "Automated build, test, and deployment workflows with GitHub Actions and AWS CodePipeline.",
    tags: ["GitHub Actions", "Docker", "Terraform", "CloudFormation"],
  },
];

export const AutomationAI = () => {
  return (
    <section className="container-page mx-auto py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
          Automation &amp; AI
        </h2>
        <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
          n8n workflows and AI integrations that automate repetitive tasks, connect services,
          and bring intelligence to everyday business operations.
        </p>
      </motion.div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {automations.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <item.icon size={24} className="text-primary" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-card-foreground">
              {item.title}
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border/60 bg-muted/70 px-3 py-1 text-[11px] font-medium text-foreground/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
