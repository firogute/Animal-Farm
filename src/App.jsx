import { useEffect, useState } from "react";
import Animal from "./component/Animal";

const userSearchAnimal = () => {
  const [animals, setAnimals] = useState([]);

  const handleChange = async (q) => {
    const response = await fetch(
      "http://localhost:8080/?" + new URLSearchParams({ q })
    );
    const data = await response.json();
    setAnimals(data);
    localStorage.setItem("lastQuery", q);
  };

  useEffect(() => {
    const lastQuery = localStorage.getItem("lastQuery");
    if (lastQuery) handleChange(lastQuery);
  }, []);

  return { handleChange, animals };
};

function App() {
  const { handleChange, animals } = userSearchAnimal();

  return (
    <div
      style={{
        padding: "4rem",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        backgroundColor: "#f9fafb",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "3rem",
          color: "#2d3748",
          marginBottom: "2rem",
        }}
      >
        🐾 Animal Farm
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "2rem",
        }}
      >
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Search for an animal..."
          onChange={(e) => handleChange(e.target.value)}
          style={{
            width: "60%",
            padding: "0.75rem 1.25rem",
            fontSize: "1rem",
            borderRadius: "10px",
            border: "1px solid #cbd5e0",
            boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
            outline: "none",
          }}
        />
      </div>

      <ul
        style={{
          listStyleType: "none",
          padding: 0,
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        {animals.length > 0 ? (
          animals.map((animal) => <Animal key={animal.id} {...animal} />)
        ) : (
          <li
            style={{
              textAlign: "center",
              color: "#718096",
              fontSize: "1.2rem",
              marginTop: "2rem",
            }}
          >
            No animals found
          </li>
        )}
      </ul>
    </div>
  );
}

export default App;
