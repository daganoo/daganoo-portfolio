import { useState, useRef, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import { m } from "framer-motion";
import { ExternalLink, Search, ChevronLeft, ChevronRight } from "lucide-react";
import { projects, projectCategories } from "../data/projects";
import { ProjectCategory } from "../types";
import { GithubIcon } from "../components/icons/GithubIcon";
import { TechIcon } from "../components/TechIcon";
import { thumbnail } from "../utils/images";

const ITEMS_PER_PAGE = 8;

const gridVars = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
};

const cardVars = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" as const } },
};

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "All">("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const sectionRef = useRef<HTMLElement>(null);
  const shouldScrollRef = useRef(false);

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

  const scrollToSection = useCallback(() => {
    if (sectionRef.current) {
      const y = sectionRef.current.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "instant" as ScrollBehavior });
    }
  }, []);

  const handlePageChange = useCallback((page: number) => {
    shouldScrollRef.current = true;
    setCurrentPage(page);
  }, []);

  useEffect(() => {
    if (shouldScrollRef.current) {
      shouldScrollRef.current = false;
      scrollToSection();
    }
  }, [currentPage, scrollToSection]);

  return (
    <section ref={sectionRef} className="relative container-page mx-auto py-24">
      <div className="relative z-[1]">
      <m.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
          All Projects
        </h2>
        <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
          A selection of projects showcasing my work across cloud infrastructure, AI, full-stack
          development, and workflow automation.
        </p>
      </m.div>

      <div className="mt-12 mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {projectCategories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                activeCategory === category
                  ? "border-primary bg-primary text-primary-foreground"
                  : "glass-button text-foreground/70 hover:text-foreground"
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
            className="w-full glass-input rounded-2xl py-2.5 pl-10 pr-4 text-sm outline-none placeholder:text-muted-foreground sm:w-64"
          />
        </div>
      </div>

      <m.div
        key={`${activeCategory}-${currentPage}`}
        variants={gridVars}
        initial="hidden"
        animate="visible"
        className="grid gap-8 md:grid-cols-2"
      >
          {paginated.length === 0 ? (
            <m.p
              variants={cardVars}
              className="col-span-full py-16 text-center text-muted-foreground"
            >
              No projects match your search.
            </m.p>
          ) : (
            paginated.map((project) => (
              <m.div
                key={project.id}
                variants={cardVars}
                className="group relative flex h-full flex-col overflow-hidden glass-card rounded-3xl text-card-foreground card-hover"
              >
                <Link to={`/projects/${project.id}`} className="flex flex-1 flex-col">
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-muted to-background">
                    <img
                      src={thumbnail(project.image)}
                    decoding="async"
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
                          className="inline-flex items-center gap-1.5 rounded-md border border-border/60 bg-muted/50 px-2 py-0.5 text-[11px] text-muted-foreground"
                        >
                          <TechIcon name={tag} />
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
              </m.div>
            ))
          )}
      </m.div>

      {totalPages > 1 && (
        <div className="mt-12 flex items-center justify-center gap-2">
          <button
            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="glass-button inline-flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground hover:text-foreground disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={18} />
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`inline-flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium transition-colors ${
                page === currentPage
                  ? "bg-primary text-primary-foreground"
                  : "glass-button text-muted-foreground hover:text-foreground"
              }`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="glass-button inline-flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground hover:text-foreground disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      )}
      </div>
    </section>
  );
};
