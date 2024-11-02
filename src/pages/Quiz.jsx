import React, { useState } from 'react';
import Modal from 'react-modal';
import '../css/Quiz.css';

Modal.setAppElement('#root');

const questions = [
  "Me siento cómodo liderando a un grupo.",
  "Valoro mucho la amistad y el trabajo en equipo.",
  "Disfruto resolver problemas complejos.",
  "Me gusta ayudar a los demás.",
  "Siento curiosidad por la magia y lo desconocido.",
  "Me atrevo a enfrentar mis miedos.",
  "Prefiero seguir las reglas.",
  "Soy competitivo por naturaleza.",
  "Busco siempre aprender cosas nuevas.",
  "Me siento atraído por el poder y la influencia.",
  "Me importa mucho lo que piensen los demás de mí.",
  "Prefiero trabajar solo.",
  "Disfruto de los retos.",
  "A veces actúo sin pensar en las consecuencias.",
  "Me gusta resolver misterios.",
  "Valoro la creatividad.",
  "Soy leal a mis amigos.",
  "Me gusta tomar riesgos.",
  "Prefiero evitar conflictos.",
  "Creo en la importancia de la estrategia.",
];

const options = ["Muy en desacuerdo", "En desacuerdo", "Normal", "De acuerdo", "Muy de acuerdo"];

const houseTraits = {
  Gryffindor: [2, 0, 0, 1, 0, 2, 0, 1, 0, 1, 1, 0, 2, 2, 0, 1, 1, 2, 1, 1],
  Hufflepuff: [1, 2, 0, 2, 1, 0, 2, 0, 1, 0, 1, 2, 0, 0, 1, 0, 2, 0, 2, 1],
  Ravenclaw: [0, 1, 2, 0, 2, 1, 0, 1, 2, 0, 0, 1, 1, 0, 2, 2, 1, 0, 0, 1],
  Slytherin: [1, 0, 1, 0, 1, 1, 1, 2, 0, 2, 2, 1, 1, 1, 0, 1, 0, 1, 0, 2],
};

const Quiz = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState(Array(questions.length).fill(0));
  const [results, setResults] = useState(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleOptionChange = (optionIndex) => {
    const newResponses = [...responses];
    newResponses[currentQuestionIndex] = optionIndex;
    setResponses(newResponses);
  };


  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      calculateResults();
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const calculateResults = () => {
    const houseScores = { Gryffindor: 0, Hufflepuff: 0, Ravenclaw: 0, Slytherin: 0 };

    responses.forEach((response, index) => {
      Object.keys(houseTraits).forEach((house) => {
        houseScores[house] += houseTraits[house][index] * response;
      });
    });

    const totalResponses = responses.length * 4; // Máxima puntuación posible
    const housePercentages = {};
    Object.keys(houseScores).forEach((house) => {
      housePercentages[house] = ((houseScores[house] / totalResponses) * 100).toFixed(2);
    });

    setResults(housePercentages);
    closeModal();
  };

  return (
    <div className="quiz-container">
      <h1>¡Bienvenido al test de casas de Hogwarts!</h1>
      <button onClick={openModal} className="start-button">Ver qué casa soy</button>
      
      {results && (
        <div className="results">
          <h2>Resultados</h2>
          <p>Gryffindor: {results.Gryffindor}%</p>
          <p>Hufflepuff: {results.Hufflepuff}%</p>
          <p>Ravenclaw: {results.Ravenclaw}%</p>
          <p>Slytherin: {results.Slytherin}%</p>
        </div>
      )}

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Quiz Modal"
        className="modal"
        overlayClassName="overlay"
      >
        <h2>Pregunta {currentQuestionIndex + 1}</h2>
        <p>{questions[currentQuestionIndex]}</p>

        {options.map((option, optionIndex) => (
          <label key={optionIndex} className="option">
            <input
              type="radio"
              name={`question-${currentQuestionIndex}`}
              value={optionIndex}
              checked={responses[currentQuestionIndex] === optionIndex}
              onChange={() => handleOptionChange(optionIndex)}
            />
            {option}
          </label>
        ))}

        <div className="navigation-buttons">
          {currentQuestionIndex > 0 && (
            <button onClick={handlePrevious} className="nav-button">Atrás</button>
          )}
          <button onClick={handleNext} className="nav-button">
            {currentQuestionIndex < questions.length - 1 ? "Siguiente" : "Ver Resultados"}
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Quiz;
