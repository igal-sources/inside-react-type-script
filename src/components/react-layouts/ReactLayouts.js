import React from "react";
// import * as images from "../../assets/images"
import "./react-layouts.css";

const ReactLayouts = () => {
  function importAll(r) {
    return r.keys().map(r);
  }

  const images = importAll(require.context("../../assets/images", false, /\.(png|jpe?g|svg)$/));

  return (
    <div>
      <h1>🔥 Gallery In Grid 🔥</h1>
      <div className="grid-container">
      {images &&
        images.map((img, index) => (
          <img key={index} src={images[index]} />
        ))}
      </div>
      <h1>🔥 Gallery In Flex 🔥</h1>
      <div className="flex-container">
      {images &&
        images.map((img, index) => (
          <img key={index} src={images[index]} />
        ))}
      </div>
    </div>
  );
};

export default ReactLayouts;
