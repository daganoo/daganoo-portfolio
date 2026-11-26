import { About } from "../sections/About";
import { TechStack } from "../sections/TechStack";
import { Experience } from "../sections/Experience";

export const AboutPage = () => {
  return (
    <div>
      <About />
      <section className="relative container-page mx-auto py-24">
        <TechStack className="" />
      </section>
      <Experience />
    </div>
  );
};
