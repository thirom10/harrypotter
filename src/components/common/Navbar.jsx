import "../../css/Navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Harry potter</h1>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/peliculas">Peliculas</Link></li>
        <li><Link to="/canciones">Canciones</Link></li>
        <li><Link to="/miembros">Miembros</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>
    </nav>
  );
};
export default Navbar;
