import React from "react";

export const Tile = ({ tile }) => {
  return (
    <div className="tile-container">
      {Object.values(tile).map((value, index) => (
        //Bold Name element (index 0)
        <p key={index} className={`${index === 0 ? "tile-title " : ""}tile`}>
          {value}
        </p>
      ))}
    </div>
  );
};
