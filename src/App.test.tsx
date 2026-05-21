import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "./hooks/useTheme";
import App from "./App";

test("renders hero section with name", () => {
  render(
    <MemoryRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </MemoryRouter>
  );
  const headings = screen.getAllByText(/marouane/i);
  expect(headings.length).toBeGreaterThanOrEqual(1);
});

test("renders navigation links", () => {
  render(
    <MemoryRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </MemoryRouter>
  );
  const aboutLinks = screen.getAllByText("About");
  const projectsLinks = screen.getAllByText("Projects");
  const skillsLinks = screen.getAllByText("Skills");
  expect(aboutLinks.length).toBeGreaterThanOrEqual(1);
  expect(projectsLinks.length).toBeGreaterThanOrEqual(1);
  expect(skillsLinks.length).toBeGreaterThanOrEqual(1);
});
