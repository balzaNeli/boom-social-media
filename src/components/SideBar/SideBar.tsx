import { NavLink } from "react-router-dom";
import { Home, Info, LogIn, UserPlus } from "lucide-react";
import "./SideBar.css";

const linkClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? "side-link active" : "side-link";

export default function SideBar() {
  return (
    <aside className="sidebar">
      <nav className="sidebar-nav" aria-label="Seções">
        <NavLink to="/" end className={linkClass}>
          <Home size={24} aria-hidden />
          <span>Início</span>
        </NavLink>
        <NavLink to="/sobre" className={linkClass}>
          <Info size={24} aria-hidden />
          <span>Sobre</span>
        </NavLink>
        <NavLink to="/login" className={linkClass}>
          <LogIn size={24} aria-hidden />
          <span>Entrar</span>
        </NavLink>
      </nav>

      <div className="invite-card">
        <UserPlus size={20} aria-hidden />
        <p className="invite-title">Convide alguém</p>
        <p className="invite-text">Círculos crescem por convite.</p>
      </div>
    </aside>
  );
}
