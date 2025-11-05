import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-105 transition"
      title="Toggle theme"
    >
      {theme === "light" ? (
        <Moon className="text-gray-800" />
      ) : (
        <Sun className="text-yellow-400" />
      )}
    </button>
  );
}

