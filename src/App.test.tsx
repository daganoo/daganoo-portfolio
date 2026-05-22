import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "./hooks/useTheme";
import App from "./App";

test("renders hero section with name on home page", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
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
    <MemoryRouter initialEntries={["/"]}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </MemoryRouter>
  );
  const aboutLinks = screen.getAllByText("About");
  const projectsLinks = screen.getAllByText("Projects");
  const contactLinks = screen.getAllByText("Contact");
  expect(aboutLinks.length).toBeGreaterThanOrEqual(1);
  expect(projectsLinks.length).toBeGreaterThanOrEqual(1);
  expect(contactLinks.length).toBeGreaterThanOrEqual(1);
});
