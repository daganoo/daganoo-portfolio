import { About } from "../sections/About";
import { Skills } from "../sections/Skills";
import { Experience } from "../sections/Experience";

export const AboutPage = () => {
  return (
    <div className="bg-background">
      <About />
      <Skills />
      <Experience />
    </div>
  );
};
