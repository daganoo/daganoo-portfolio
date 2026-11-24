import { Link } from "react-router-dom";
import { m } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export const NotFound = () => {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center text-center">
      <m.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        <p className="font-mono text-8xl font-bold text-muted-foreground/20">404</p>
        <h1 className="mt-4 text-2xl font-bold tracking-tight">Page not found</h1>
        <p className="mt-2 text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 press rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>
      </m.div>
    </section>
  );
};
