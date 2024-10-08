import ColorBox from "./ColorBox";
import colors from "../data/data";

const ColorBoxesContainer = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gap: "10px",
      }}
    >
      {Array.from({ length: 25 }).map((_, index) => (
        <ColorBox key={index} color={colors[index % colors.length]} />
      ))}
    </div>
  );
};

export default ColorBoxesContainer;
