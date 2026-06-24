import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ExternalLink, X, Maximize2 } from "lucide-react";
import { projects } from "../data/projects";
import { GithubIcon } from "../components/icons/GithubIcon";

export const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  if (!project) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Project not found</h1>
          <Link to="/projects" className="mt-4 inline-flex items-center gap-2 text-primary hover:underline">
            <ArrowLeft size={16} />
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container-page mx-auto py-24">
      <Link
        to="/projects"
        className="mb-8 inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
      >
        <ArrowLeft size={16} />
        Back to Projects
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div
          className="group relative mb-10 cursor-pointer overflow-hidden rounded-xl bg-gradient-to-br from-muted to-background"
          onClick={() => setLightboxOpen(true)}
        >
          <img
            src={project.image}
            alt={project.title}
            className="h-64 w-full object-cover md:h-80"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/20">
            <Maximize2 className="text-white opacity-0 transition-opacity group-hover:opacity-100" size={32} />
          </div>
        </div>

        <div className="mb-6">
          <span className="inline-flex items-center rounded-md border border-border px-3 py-1 text-xs font-semibold">
            {project.category}
          </span>
        </div>

        <h1 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl">
          {project.title}
        </h1>

        <div className="mb-8 max-w-3xl space-y-4 text-base leading-relaxed text-muted-foreground">
          {project.longDescription.split("\n\n").map((block, i) => {
            const trimmed = block.trim();
            if (trimmed.startsWith("✦")) {
              const header = trimmed.split("\n")[0];
              const body = trimmed.split("\n").slice(1).join("\n");
              return (
                <div key={i} className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">{header}</h3>
                  <p className="whitespace-pre-line">{body.trim()}</p>
                </div>
              );
            }
            return <p key={i} className="whitespace-pre-line">{trimmed}</p>;
          })}
        </div>

        <div className="mb-10 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-border/60 bg-muted/50 px-3 py-1 text-sm text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-4">
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-lg bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <ExternalLink size={18} />
              Live Demo
            </a>
          )}
          {project.links.source && (
            <a
              href={project.links.source}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-lg border border-input bg-background px-8 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <GithubIcon size={18} />
              View on GitHub
            </a>
          )}
        </div>
      </motion.div>

      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxOpen(false)}
          >
            <button
              className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
              onClick={() => setLightboxOpen(false)}
            >
              <X size={24} />
            </button>
            <motion.img
              src={project.image}
              alt={project.title}
              className="max-h-[90vh] max-w-full rounded-lg object-contain"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
