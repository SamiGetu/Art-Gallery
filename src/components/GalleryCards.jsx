/* eslint-disable no-undef */
import Card from "../../components/Card";

import gallery from "../../data/gallery.json";
import { useState } from "react";

export default function GalleryCards() {
  const [fullscreenImage, setFullscreenImage] = useState(false);

  const openFullscreen = (image) => {
    setFullscreenImage(image);
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
  };
  return (
    <>
      <div className="h-[100vh] mb-[30rem] pt-[15rem]">
        <div className="flex flex-wrap justify-center space-x-5 ">
          <div onClick={() => openFullscreen(gallery[0].img)}>
            <Card
              size={"w-[20vw] h-[70vh] bg-black"}
              image={gallery[0].img}
              imgstyle={
                "object-cover h-full w-full grayscale-[] hover:grayscale-0 hover:scale-105 duration-500 cursor-pointer"
              }
            />
          </div>
          <div onClick={() => openFullscreen(gallery[1].img)}>
            <Card
              size={"w-[20vw] h-[60vh] mt-[3rem]  bg-black"}
              image={gallery[1].img}
              imgstyle={
                "object-cover h-full w-full grayscale-[] hover:grayscale-0 hover:scale-105 duration-500 cursor-pointer"
              }
            />
          </div>
          <div onClick={() => openFullscreen(gallery[2].img)}>
            <Card
              size={"w-[20vw] h-[70vh] bg-black"}
              image={gallery[2].img}
              imgstyle={
                "object-cover h-full w-full grayscale-[] hover:grayscale-0 hover:scale-105 duration-500 cursor-pointer"
              }
            />
          </div>
          <div onClick={() => openFullscreen(gallery[3].img)}>
            <Card
              size={"w-[20vw] h-[60vh] mt-[3rem] bg-black"}
              image={gallery[3].img}
              imgstyle={
                "object-cover h-full w-full grayscale-[] hover:grayscale-0 hover:scale-105 duration-500 cursor-pointer"
              }
            />
          </div>
        </div>
        {fullscreenImage && (
          <div className="fixed top-0 left-0 z-50 w-full h-full bg-black/75 backdrop-blur-[5px] flex justify-center items-center">
            <div
              className="absolute top-0 right-0 p-4 cursor-pointer"
              onClick={closeFullscreen}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M14.293 5.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 11-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <img
              src={fullscreenImage}
              alt="Fullscreen"
              className="max-w-[100%] max-h-[90%] rounded-xl shadow-2xl shadow-white/50"
            />
          </div>
        )}
      </div>
    </>
  );
}
