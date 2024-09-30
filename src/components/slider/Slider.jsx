import { useState } from "react";
import "./Slider.scss";

function Slider({ images }) {
  const [imageIndex, setImageIndex] = useState(null);

  const changeSlider = (direction) => {
    if (direction === "left") {
      // If the current image is the first one, go to the last image
      setImageIndex(imageIndex === 0 ? images.length - 1 : imageIndex - 1);
    } else {
      // If the current image is the last one, go to the first image
      setImageIndex(imageIndex === images.length - 1 ? 0 : imageIndex + 1);
    }
  };


  return (
    <div className="slider">
      {imageIndex != null && (
        <div className="full-slider">
          <div className="arrow" onClick={() => changeSlider("left")}>
            <img src="/arrow.png" alt="" />
          </div>
          <div className="image-container">
            <img src={images[imageIndex]} alt="" />
          </div>
          <div className="arrow" onClick={() => changeSlider("right")}>
            <img src="/arrow.png" alt="" className="right" />
          </div>
          <div className="close" onClick={() => setImageIndex(null)}>
            X
          </div>
        </div>
      )}
      <div className="big-image">
        <img src={images[0]} alt="" onClick={() => setImageIndex(0)} />
      </div>
      <div className="small-image">
        {images.slice(1).map((image, index) => (
          <img
            src={image}
            alt=""
            key={index}
            onClick={() => setImageIndex(index + 1)}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
