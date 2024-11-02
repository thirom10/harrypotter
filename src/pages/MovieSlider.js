import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "../css/MovieSlider.css";
import axios from "axios";

const MovieSlider = () => {
    const [movies, setMovies] = useState([]);
    const [currentMovie, setCurrentMovie] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDes, setIsDes] = useState(false);
    const descriptionRef = useRef(null);

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
        beforeChange: (current, next) => {
            setCurrentMovie(movies[next]);
            setIsDes(false); // Colapsa la descripción al cambiar de película
        },
    };

    const handleTrailerClick = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const toggleDescription = () => {
        setIsDes(!isDes); // Alterna el estado de la descripción
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {movies.map((movie) => (
                    <div
                        key={movie.id}
                        className={`movie-card ${currentMovie?.id === movie.id ? "active" : ""}`}
                    >
                        <img className="img-card" src={movie.attributes.poster} alt={movie.attributes.title} />
                        <h3>{movie.attributes.title}</h3>
                    </div>
                ))}
            </Slider>

            {currentMovie && (
                <div className="movie-info">
                    <h2>{currentMovie.attributes.title}</h2>
                    <p><strong>Director:</strong> {currentMovie.attributes.directors.join(", ")}</p>
                    <p><strong>Productores:</strong> {currentMovie.attributes.producers.join(", ")}</p>
                    <p><strong>Compositores:</strong> {currentMovie.attributes.music_composers.join(", ")}</p>
                    <p><strong>Fecha de Estreno:</strong> {currentMovie.attributes.release_date}</p>
                    <p
                        className={`description ${isDes ? "expanded" : ""}`}
                        ref={descriptionRef}
                        onClick={toggleDescription}
                    >
                        {isDes
                            ? currentMovie.attributes.summary
                            : `${currentMovie.attributes.summary.slice(0, 100)}...`}
                    </p>
                    <button className="trailer-button" onClick={handleTrailerClick}>Ver Tráiler</button>
                </div>
            )}

            {isModalOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-button" onClick={closeModal}>X</button>
                        <iframe
                            width="560"
                            height="315"
                            src={currentMovie && currentMovie.attributes.trailer.replace("watch?v=", "embed/")}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
        </div>
    );
};


export default MovieSlider;
