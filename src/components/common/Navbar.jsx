import "../../css/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h1>Harry Potter</h1>
      <ul>
        <a><Link to="/">Home</Link></a>
        <a><Link to="/">Houses</Link></a>
        <a><Link to="/">Gallery</Link></a>
        <a><Link to="/peliculas">Movies</Link></a>
        <a><Link to="/">About This</Link></a>
      </ul>
      <button>Discover your House!</button>
    </nav>
  );
};
export default Navbar;
