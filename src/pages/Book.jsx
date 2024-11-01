import React, { useEffect, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import "../css/Book.css";

const Book = () => {
  const [spells, setSpells] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const spellsPerPage = 7; 

  useEffect(() => {
    const fetchSpells = async () => {
      try {
        const response = await fetch("https://hp-api.herokuapp.com/api/spells");
        const data = await response.json();
        setSpells(data);
      } catch (error) {
        console.error("Error al cargar los hechizos:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSpells();
  }, []);

  const groupedSpells = () => {
    const grouped = [];
    for (let i = 0; i < spells.length; i += spellsPerPage) {
      grouped.push(spells.slice(i, i + spellsPerPage));
    }
    return grouped;
  };

  return (
    <div className="book-container">
      {isLoading ? (
        <p>Cargando hechizos...</p>
      ) : (
        <HTMLFlipBook
          width={300}
          height={400}
          size="stretch"
          minWidth={250}
          maxWidth={600}
          minHeight={300}
          maxHeight={800}
          showCover={true}
          mobileScrollSupport={true}
        >
          <div className="page cover" data-density="hard">
            <h1 className="book-title">Libro de Hechizos</h1>
          </div>

          {groupedSpells().map((group, index) => (
            <div className="page" key={index}>
              {group.map((spell, spellIndex) => (
                <div className="spell-card" key={spellIndex}>
                  <h2 className="spell-title">{spell.name}</h2>
                  <p className="spell-description">{spell.description || "Sin descripción disponible"}</p>
                </div>
              ))}
            </div>
          ))}

          <div className="page cover" data-density="hard">
            <h1 className="book-title">Fin del Libro</h1>
          </div>
        </HTMLFlipBook>
      )}
    </div>
  );
};

export default Book;
