import { Link } from 'react-router-dom';
import './Nav.css'
import logo from '../../img/logo.jpg'

const Nav = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <Link className="nav-link" to="proyecto36/"><img src={logo} className='logo'/></Link>
                
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link" to="proyecto36/futbol">Futbol</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="proyecto36/tenis">Tenis</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="proyecto36/voley">Voley</Link>
                    </li>
                </ul>
                <form className="d-flex">
                    <button className="btn btn-outline-success" type="submit">Mi cuenta</button>
                </form>
                </div>
            </div>
        </nav>
     );
}
 
export default Nav;