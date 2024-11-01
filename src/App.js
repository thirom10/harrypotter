//import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/common/Footer';
import MovieSlider from './pages/MovieSlider';
import Galery from './pages/Galery';
import Navbar from './components/common/Navbar';
import Book from './pages/Book';
import BookList from './pages/BookList';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Galery />} />
          <Route path="/peliculas" element={<MovieSlider />} />
          <Route path="/book" element={<Book />} />
          <Route path="/books" element={<BookList/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;