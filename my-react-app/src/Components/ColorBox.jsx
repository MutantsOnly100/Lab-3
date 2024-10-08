import React, { useState } from "react";
import colors from "../data/data";

// eslint-disable-next-line react/prop-types
const ColorBox = ({ color }) => {
  const [currentColor, setCurrentColor] = useState(color);

  const changeColor = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setCurrentColor(randomColor);
  };

  return (
    <div
      onClick={changeColor}
      style={{
        backgroundColor: currentColor,
        width: "50px",
        height: "50px",
        cursor: "pointer",
      }}
    ></div>
  );
};

export default ColorBox;
