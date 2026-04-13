import { useEffect, useState } from "react";
import About from "./About.jsx";
import Interests from "./Interests.jsx";
import Footer from "./Footer.jsx";
import Info from "./Info.jsx";

function getInitialTheme() {
  // 1) user choice wins
  const saved = localStorage.getItem("theme");
  if (saved === "light" || saved === "dark") return saved;

  // 2) otherwise use OS preference if available
  const prefersLight = window.matchMedia?.(
    "(prefers-color-scheme: light)",
  ).matches;
  return prefersLight ? "light" : "dark";
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    // Apply theme to <html>
    document.documentElement.setAttribute("data-theme", theme);
    // Persist
    localStorage.setItem("theme", theme);
  }, [theme]);

  const onToggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <>
      <Info onToggleTheme={onToggleTheme} theme={theme} />
      <About />
      <Interests />
      <Footer />
    </>
  );
}
