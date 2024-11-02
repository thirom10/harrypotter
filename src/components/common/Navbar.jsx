import "../../css/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h1>Harry Potter</h1>
      <ul>
        <a><Link to="/">Home</Link></a>
        <a><Link to="/book">Book</Link></a>
        <a><Link to="/">Gallery</Link></a>
        <a><Link to="/peliculas">Movies</Link></a>
        <a><Link to="/books">About This</Link></a>
      </ul>
      <button><Link to="/quiz">Discover your House!</Link></button>
    </nav>
  );
};
export default Navbar;
