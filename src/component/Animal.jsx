import React from "react";

const Animal = ({ type, name, age }) => {
  return (
    <li>
      Name = <strong>{name}</strong> Type = {type} Age = {age}
    </li>
  );
};

export default Animal;
