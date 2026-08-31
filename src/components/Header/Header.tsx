import './Header.css'
import { Link } from 'react-router-dom';
export default function Header(){
    return(
        <>
            <header className='header'>
                <div className='logo'>
                    <h1><strong>Boom</strong></h1>
                </div>



                <nav className='header-nav'>
                    <ul>
                        <li><Link to="/">Início</Link></li>
                        <li><Link to="/sobre">Sobre</Link></li>
                    </ul>
                </nav>

                
                

            </header>
        
        </>


    )
}