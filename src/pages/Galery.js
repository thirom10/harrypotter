// Requerimentos
import { useState, useEffect } from "react";
// Hoja de Estilos
import "../css/Galery.css";
const Galery = () => {
  const [data, setData] = useState([]);
  // { String } filter - Guarda el parametro que define el filtro que se realizara
  const [filter, setFilter] = useState("characters");
  const fetchHpApi = (filter) => {
    let url;

    switch (filter) {
      case "students":
        url = "https://hp-api.onrender.com/api/characters/students";
        break;
      case "teachers":
        url = "https://hp-api.onrender.com/api/characters/staff";
        break;
      case "characters":
        url = "https://hp-api.onrender.com/api/characters";
        break;
      case "spells":
        url = "https://hp-api.herokuapp.com/api/spells";
        break;

      default:
        return;
    }

    fetch(url)
      .then((response) => response.json())
      .then((result) => setData(result.slice(0, 20))) // Limitar a 10 elementos
      .catch((error) => console.error("Error fetching data:", error));
  };
  console.log(data);
  useEffect(() => {
    fetchHpApi(filter);
  }, [filter]);

  return (
    <div className="galery_container">
      <h1>Welcome to the Harry Potter Gallery!</h1>
      <div className="filter">
        <button onClick={() => setFilter("characters")}>
          Todos los Personajes
        </button>
        <button onClick={() => setFilter("students")}>Alumnos</button>
        <button onClick={() => setFilter("teachers")}>Profesores</button>
        <button onClick={() => setFilter("spells")}>Hechizos</button>
      </div>

      <div className="galery">
        {data.map((item, index) => (
          <div
            className="item"
            key={index}
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundSize: "cover", 
              backgroundPosition: "center", 
              width: "19.5vw", 
              height: "22vw", 
            }}
            id={item.house}
          >
            {filter === "students" ||
            filter === "teachers" ||
            filter === "characters" ? (
              <>
                <h3 className="item-name">{item.name}</h3>
                <p className="item-description" id={item.house}>
                  Casa: {item.house || "N/A"}
                </p>
              </>
            ) : filter === "spells" ? (
              <>
                <h3 className="item-name">{item.name}</h3>
                <p className="item-description">
                  <strong>Efecto:</strong> {item.description || "N/A"}
                </p>
              </>
            ) : null}
          </div>
        ))}
      </div>
      <button>Ver mas</button>
    </div>
  );
};
export default Galery;
