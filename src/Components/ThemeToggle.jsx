import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const ThemeToggle = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark-mode");
      setDark(true);
    }
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark-mode");
    setDark(!dark);
    localStorage.setItem("theme", dark ? "light" : "dark");
  };

  return (
    <button
      id="modeToggle"
      className="btn btn-sm rounded-circle ms-2"
      onClick={toggleTheme}
    >
      {dark ? "☀️" : "🌙"}
    </button>
  );
};

export default ThemeToggle;

