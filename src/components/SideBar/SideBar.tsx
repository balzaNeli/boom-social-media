import './SideBar.css';
import { Link } from 'react-router-dom';

export default function SideBar() {
    return (
        <aside className='sidebar'>
            <nav className='sidebar-nav'>
                <ul>
                    <li><Link to="/">Início</Link></li>
                    <li><Link to="/sobre">Sobre</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </nav>
        </aside>
    )
}