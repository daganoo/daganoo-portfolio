import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Search, ChevronLeft, ChevronRight } from "lucide-react";
import { projects, projectCategories } from "../data/projects";
import { ProjectCategory } from "../types";
import { GithubIcon } from "../components/icons/GithubIcon";

const ITEMS_PER_PAGE = 8;

const cardVars = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "All">("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const sectionRef = useRef<HTMLElement>(null);

  const catFiltered = activeCategory === "All"
    ? [...projects].reverse()
    : [...projects].reverse().filter((p) => p.category === activeCategory);

  const q = searchTerm.toLowerCase();
  const filtered = q
    ? catFiltered.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q)) ||
          p.category.toLowerCase().includes(q)
      )
    : catFiltered;

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleCategoryChange = (category: ProjectCategory | "All") => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (sectionRef.current) {
          const y = sectionRef.current.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top: y, behavior: "auto" });
        }
      });
    });
    return () => cancelAnimationFrame(raf);
  }, [currentPage]);

  return (
    <section ref={sectionRef} className="relative container-page mx-auto py-24">
      <div className="pointer-events-none absolute -right-28 top-1/3 hidden h-[550px] w-[550px] rounded-full opacity-20 blur-[120px] dark:block" style={{ background: "radial-gradient(circle at center, #7c3aed 0%, transparent 65%)" }} />
      <div className="relative z-[1]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
          All Projects
        </h2>
        <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
          A selection of projects showcasing my work across cloud infrastructure, AI, full-stack
          development, and workflow automation.
        </p>
      </motion.div>

      <div className="mt-12 mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {projectCategories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`rounded-md border px-3 py-2 text-sm font-medium transition-colors ${
                activeCategory === category
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-background text-foreground/60 hover:bg-accent hover:text-accent-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="relative">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search projects..."
            className="w-full rounded-md border border-input bg-background py-2.5 pl-10 pr-4 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-ring sm:w-64"
          />
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <AnimatePresence mode="wait">
          {paginated.length === 0 ? (
            <motion.p
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full py-16 text-center text-muted-foreground"
            >
              No projects match your search.
            </motion.p>
          ) : (
            paginated.map((project) => (
              <motion.div
                key={project.id}
                layout
                variants={cardVars}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card text-card-foreground shadow-sm transition-shadow hover:border-border/80 hover:shadow-md"
              >
                <Link to={`/projects/${project.id}`} className="flex flex-1 flex-col">
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-muted to-background">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-3">
                      <span className="inline-flex items-center rounded-md border border-border px-2.5 py-0.5 text-xs font-semibold text-foreground">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
                    <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>
                    <div className="mb-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-border/60 bg-muted/50 px-2 py-0.5 text-[11px] text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
                <div className="flex items-center gap-4 px-6 pb-6">
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                  {project.links.source && (
                    <a
                      href={project.links.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <GithubIcon size={16} />
                      Source
                    </a>
                  )}
                  {project.links.linkedin && (
                    <a
                      href={project.links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-[#0a66c2] transition-colors hover:text-[#004182]"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      LinkedIn
                    </a>
                  )}
                </div>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>

      {totalPages > 1 && (
        <div className="mt-12 flex items-center justify-center gap-2">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={18} />
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`inline-flex h-10 w-10 items-center justify-center rounded-lg text-sm font-medium transition-colors ${
                page === currentPage
                  ? "bg-primary text-primary-foreground"
                  : "border border-border text-muted-foreground hover:bg-accent hover:text-foreground"
              }`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      )}
      </div>
    </section>
  );
};
