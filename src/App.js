//import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/common/Footer';
import MovieSlider from './components/ui/MovieSlider';
import Galery from './pages/Galery';
import Navbar from './components/common/Navbar';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Galery />} />
          <Route path="/peliculas" element={<MovieSlider />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;