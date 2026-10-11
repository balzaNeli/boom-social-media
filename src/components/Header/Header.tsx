import { Link, NavLink } from "react-router-dom";
import Burst from "../shared/Burst";
import ThemeToggle from "../shared/ThemeToggle";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo" aria-label="Boom, início">
        <Burst size={28} className="logo-burst" />
        <span className="wordmark">Boom</span>
      </Link>

      <nav className="header-nav" aria-label="Principal">
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? "nav-pill active" : "nav-pill")}
        >
          Início
        </NavLink>
        <NavLink
          to="/sobre"
          className={({ isActive }) => (isActive ? "nav-pill active" : "nav-pill")}
        >
          Sobre
        </NavLink>
        <Link to="/login" className="nav-cta">
          Entrar
        </Link>
        <ThemeToggle />
      </nav>
    </header>
  );
}
