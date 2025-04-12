import React from "react";

const Animal = ({ type, name, age, color, size }) => {
  return (
    <li
      style={{
        backgroundColor: color || "#fff",
        padding: "1rem",
        borderRadius: "8px",
        margin: "0.5rem 0",
        transition: "transform 0.2s",
      }}
      role="listitem"
      aria-label={`Animal: ${name}, Type: ${type}, Age: ${age}`}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      Name: <strong>{name}</strong> | Type: {type} | Age: {age} | Size: {size}
    </li>
  );
};

export default Animal;
