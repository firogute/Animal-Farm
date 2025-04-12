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
    handleChange(lastQuery);
  }, []);
  return { handleChange, animals };
};

function App() {
  const { handleChange, animals } = userSearchAnimal();
  return (
    <div style={{ padding: "6rem" }}>
      <h1>Animal Farm</h1>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Search....."
        onChange={(e) => handleChange(e.target.value)}
      />

      <ul>
        {animals.map((animal) => {
          return <Animal key={animal.id} {...animal} />;
        })}

        {animals.length == 0 && "No animals found"}
      </ul>
    </div>
  );
}

export default App;
