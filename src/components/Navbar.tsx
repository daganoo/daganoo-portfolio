import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, User, FolderKanban, Mail, Sun, Moon, FileText } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

const navLinks = [
  { label: "Home", href: "/", icon: Home, subtitle: "Overview and highlights" },
  { label: "About", href: "/about", icon: User, subtitle: "Bio and expertise" },
  { label: "Projects", href: "/projects", icon: FolderKanban, subtitle: "GitHub repos, open-source, and experiments" },
  { label: "Contact", href: "/contact", icon: Mail, subtitle: "Let's build together" },
];

const drawerBackdrop = { hidden: { opacity: 0 }, visible: { opacity: 1 } };
const drawerPanel = {
  hidden: { x: "100%" },
  visible: { x: 0, transition: { type: "spring" as const, damping: 25, stiffness: 200 } },
  exit: { x: "100%", transition: { duration: 0.2 } },
};

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { theme, setTheme, cycle } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setDrawerOpen(false); }, [location.pathname]);

  useEffect(() => {
    if (drawerOpen) {
      document.documentElement.style.overflow = "hidden";
      document.documentElement.style.overscrollBehavior = "none";
    } else {
      document.documentElement.style.overflow = "";
      document.documentElement.style.overscrollBehavior = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
      document.documentElement.style.overscrollBehavior = "";
    };
  }, [drawerOpen]);

  return (
    <>
    <nav
      className={`fixed top-0 z-50 h-16 w-full border-b border-border transition-colors ${
        scrolled || drawerOpen ? "bg-background/95 backdrop-blur-sm" : "bg-background"
      }`}
    >
      <div className="container-page mx-auto flex h-full items-center justify-between">
        <Link to="/" className="text-xl font-bold tracking-tight text-foreground">
          Marouane Dagana | Portfolio
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive ? "text-foreground" : "text-foreground/60 hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href="/resume.html"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open resume"
            className="rounded-md p-2 text-primary transition-colors hover:bg-primary/10"
          >
            <FileText size={18} />
          </a>
          <button
            onClick={cycle}
            aria-label="Cycle theme"
            className="relative rounded-md p-2 transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            <Sun size={18} className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon size={18} className="absolute inset-0 m-auto rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </button>
        </div>

        <button
          className="rounded-md p-2 text-foreground/60 transition-colors hover:text-foreground md:hidden"
          onClick={() => setDrawerOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </div>
    </nav>

    <AnimatePresence>
      {drawerOpen && (
        <>
          <motion.div
            key="backdrop"
            variants={drawerBackdrop}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed inset-0 z-50 bg-black/60 md:hidden"
            onClick={() => setDrawerOpen(false)}
          />
          <motion.div
            key="drawer"
            variants={drawerPanel}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed right-0 top-0 z-[60] flex h-dvh w-80 max-w-[85vw] flex-col bg-background shadow-2xl md:hidden"
          >
            <div className="flex h-16 shrink-0 items-center justify-between border-b border-border px-6">
              <span className="text-lg font-semibold text-foreground">Menu</span>
              <button
                onClick={() => setDrawerOpen(false)}
                aria-label="Close menu"
                className="rounded-md p-2 text-foreground/60 transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto overscroll-contain px-4 py-4">
              <p className="mb-3 px-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                Main
              </p>
              <nav className="space-y-1">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      to={link.href}
                      onClick={() => setDrawerOpen(false)}
                      className={`flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-accent ${
                        isActive ? "bg-accent/50 text-foreground" : "text-foreground/70"
                      }`}
                    >
                      <link.icon size={20} className="mt-0.5 shrink-0" />
                      <div className="min-w-0">
                        <p className="text-sm font-medium">{link.label}</p>
                        <p className="truncate text-xs text-muted-foreground">{link.subtitle}</p>
                      </div>
                    </Link>
                  );
                })}
               </nav>

              <p className="mb-3 mt-8 px-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                Resume
              </p>
              <a
                href="/resume.html"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-primary transition-colors hover:bg-primary/10"
              >
                <FileText size={20} className="shrink-0" />
                <span className="text-sm font-medium">View Resume</span>
              </a>

              <p className="mb-3 mt-8 px-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                Preferences
              </p>
              <div className="space-y-1">
                {(["light", "dark"] as const).map((t) => {
                  const Icon = t === "light" ? Sun : Moon;
                  const isActive = theme === t;
                  return (
                    <button
                      key={t}
                      onClick={() => setTheme(t)}
                      className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors hover:bg-accent ${
                        isActive ? "bg-accent/50 text-foreground" : "text-foreground/70"
                      }`}
                    >
                      <Icon size={20} className="shrink-0" />
                      <span className="text-sm font-medium capitalize">{t}</span>
                      {isActive && <span className="ml-auto h-2 w-2 rounded-full bg-primary" />}
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
    </>
  );
};
