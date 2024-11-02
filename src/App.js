//import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/common/Footer';
import MovieSlider from './pages/MovieSlider';
import Galery from './pages/Galery';
import Navbar from './components/common/Navbar';
import Book from './pages/Book';
import BookList from './pages/BookList';
import Quiz from './pages/Quiz';

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
          <Route path="/quiz" element={<Quiz/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;