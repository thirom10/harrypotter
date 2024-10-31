//import logo from './logo.svg';
import "./App.css";
//import MovieSlider from './components/ui/MovieSlider';
import Galery from "./pages/Galery";
import Navbar from "./components/common/Navbar";
function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <div className="App">
        <Galery />
      </div>
    </>
  );
}

export default App;
