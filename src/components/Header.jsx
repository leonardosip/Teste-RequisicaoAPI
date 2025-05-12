import { Link } from "react-router-dom";
import './header.css';

function Header(){
    return(
        <header>
            <h2>Lista de Usuarios Teste </h2>

            <div className="menu">
                <Link to='/'>Home</Link>
            </div>
        </header>
    )
}

export default Header;