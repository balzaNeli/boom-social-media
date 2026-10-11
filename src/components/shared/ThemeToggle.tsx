import { useState } from "react";
import { Moon, Sun } from "lucide-react";
import "./ThemeToggle.css";

const KEY = "boom-theme";

/** Alterna .dark no <html>; escuro é o padrão (DS 2.4). */
export default function ThemeToggle() {
  const [dark, setDark] = useState(() =>
    document.documentElement.classList.contains("dark"),
  );

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem(KEY, next ? "dark" : "light");
  };

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-pressed={dark}
      aria-label={dark ? "Mudar para tema claro" : "Mudar para tema escuro"}
    >
      {dark ? <Sun size={20} aria-hidden /> : <Moon size={20} aria-hidden />}
    </button>
  );
}

// Aplica o tema salvo antes da primeira renderização (sem flash).
if (localStorage.getItem(KEY) === "light") {
  document.documentElement.classList.remove("dark");
}
