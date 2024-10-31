/* css del slider */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "../../css/MovieSlider.css";
import axios from "axios";
const MovieSlider = () => {
    const [movies, setMovies] = useState([]);
    const [currentMovie, setCurrentMovie] = useState(null);
  
    useEffect(() => {
      const fetchMovies = async () => {
        try {
          const response = await axios.get("https://api.potterdb.com/v1/movies");
          setMovies(response.data.data);
          setCurrentMovie(response.data.data[0]);
        } catch (error) {
          console.error("Error fetching movies:", error);
        }
      };
  
      fetchMovies();
    }, []);
  
    const settings = {
      centerMode: true,
      centerPadding: "0",
      slidesToShow: 3,
      infinite: true,
      focusOnSelect: true,
      beforeChange: (current, next) => setCurrentMovie(movies[next]),
    };
  
    return (
      <div className="slider-container">
        <Slider {...settings}>
          {movies.map((movie, index) => (
            <div
              key={movie.id}
              className={`movie-card ${currentMovie?.id === movie.id ? "active" : ""}`}
            >
              <h3>{movie.attributes.title}</h3>
            </div>
          ))}
        </Slider>
  
        {currentMovie && (
          <div className="movie-info">
            <h2>{currentMovie.attributes.title}</h2>
            <p>{currentMovie.attributes.description || "no hay descricpion"}</p>
          </div>
        )}
      </div>
    );
  };

export default MovieSlider;