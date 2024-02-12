// ImageSlider.js
import { useState, useEffect } from "react";
import imageSlider from "../data/imageSlider.json";
import Button from "./Button";

const ImageSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % imageSlider.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => {
    setCurrentImage(index);
  };

  return (
    <div className="relative">
      <div className="absolute inset-0 flex flex-col items-center justify-center space-y-5 ">
        <p className="md:text-3xl text-2xl font-bold">New Arival</p>
        <h1 className="md:text-6xl text-3xl text-white font-bold text-center">
          Shop for Wall Art
        </h1>
        <Button
          text={"Buy Now"}
          style={"px-10 py-2 bg-white text-black font-bold"}
        />
      </div>

      <img
        src={imageSlider[currentImage]}
        alt={`Image ${currentImage + 1}`}
        className="w-full h-[95vh] object-cover bg-center"
      />

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {imageSlider.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === currentImage ? "bg-white" : "bg-gray-300"
            }`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
