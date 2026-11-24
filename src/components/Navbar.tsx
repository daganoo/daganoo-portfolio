import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { m, AnimatePresence } from "framer-motion";
import { Menu, X, Home, User, FolderKanban, Mail, Sun, Moon, FileText } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

const navLinks = [
  { label: "Home", href: "/", icon: Home, subtitle: "Overview and highlights" },
  { label: "Projects", href: "/projects", icon: FolderKanban, subtitle: "GitHub repos, open-source, and experiments" },
  { label: "About", href: "/about", icon: User, subtitle: "Bio and expertise" },
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
    <div aria-hidden className={`nav-veil ${scrolled ? "nav-veil-on" : ""}`} />
    <nav className="fixed inset-x-0 top-3 z-50 px-3 sm:px-6 lg:px-10">
      <div
        className={`glass-nav mx-auto flex h-14 max-w-[1400px] items-center justify-between rounded-full pl-5 pr-2 sm:pl-6 ${
          scrolled || drawerOpen ? "glass-nav-scrolled" : ""
        }`}
      >
        <Link to="/" className="text-lg font-bold tracking-tight text-foreground sm:text-xl">
          Marouane Dagana | Portfolio
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.href}
                to={link.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-[colors,transform] active:scale-95 ${
                  isActive ? "glass-pill-active text-foreground" : "text-foreground/80 hover:bg-foreground/5 hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <button
            onClick={() => window.open("/resume.pdf", "_blank")}
            aria-label="Open resume"
            className="ml-2 rounded-full p-2.5 text-primary transition-colors hover:bg-foreground/5"
          >
            <FileText size={18} />
          </button>
          <button
            onClick={cycle}
            aria-label="Cycle theme"
            className="relative rounded-full p-2.5 transition-colors hover:bg-foreground/5"
          >
            <Sun size={18} className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon size={18} className="absolute inset-0 m-auto rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </button>
        </div>

        <button
          className="rounded-full p-2.5 text-foreground/70 transition-colors hover:bg-foreground/5 hover:text-foreground md:hidden"
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
          <m.div
            key="backdrop"
            variants={drawerBackdrop}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed inset-0 z-50 bg-black/40 md:hidden"
            onClick={() => setDrawerOpen(false)}
          />
          <m.div
            key="drawer"
            variants={drawerPanel}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="glass-panel fixed bottom-3 right-3 top-3 z-[60] flex w-80 max-w-[85vw] flex-col overflow-hidden rounded-[2rem] md:hidden"
          >
            <div className="flex h-16 shrink-0 items-center justify-between border-b border-foreground/10 px-6">
              <span className="text-lg font-semibold text-foreground">Menu</span>
              <button
                onClick={() => setDrawerOpen(false)}
                aria-label="Close menu"
                className="rounded-full p-2 text-foreground/60 transition-colors hover:bg-foreground/5 hover:text-foreground"
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
                      className={`flex items-start gap-3 rounded-2xl px-3 py-2.5 transition-colors hover:bg-foreground/5 ${
                        isActive ? "glass-pill-active text-foreground" : "text-foreground/70"
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
              <button
                onClick={() => window.open("/resume.pdf", "_blank")}
                className="flex items-center gap-3 rounded-2xl px-3 py-2.5 text-primary transition-colors hover:bg-foreground/5"
              >
                <FileText size={20} className="shrink-0" />
                <span className="text-sm font-medium">View Resume</span>
              </button>

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
                      className={`flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-left transition-colors hover:bg-foreground/5 ${
                        isActive ? "glass-pill-active text-foreground" : "text-foreground/70"
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
          </m.div>
        </>
      )}
    </AnimatePresence>
    </>
  );
};
