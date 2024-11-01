import { useState, useEffect } from "react";
import "../css/Galery.css";

const Galery = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("characters");
  const [itemsToShow, setItemsToShow] = useState(20);

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
      .then((result) => {
        setData(result);
        setItemsToShow(20);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  useEffect(() => {
    fetchHpApi(filter);
  }, [filter]);

  const loadMoreItems = () => {
    setItemsToShow((prev) => prev + 20);
  };

  return (
    <div className="galery_container">
      <h1>Welcome to the Harry Potter Gallery!</h1>
      <div className="filter">
        <button
          onClick={() => setFilter("characters")}
          className={filter === "characters" ? "active" : ""}
        >
          Todos los Personajes
        </button>
        <button
          onClick={() => setFilter("students")}
          className={filter === "students" ? "active" : ""}
        >
          Alumnos
        </button>
        <button
          onClick={() => setFilter("teachers")}
          className={filter === "teachers" ? "active" : ""}
        >
          Profesores
        </button>
        <button
          onClick={() => setFilter("spells")}
          className={filter === "spells" ? "active" : ""}
        >
          Hechizos
        </button>
      </div>

      <div className="galery">
        {data.slice(0, itemsToShow).map((item, index) => (
          <div
            className="item"
            key={index}
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
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
      {itemsToShow < data.length && (
        <button onClick={loadMoreItems}>Ver más</button>
      )}
    </div>
  );
};

export default Galery;