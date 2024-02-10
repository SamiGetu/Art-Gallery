/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Slides from "../data/Slides.json";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Button from "./Button";
// /import Card from "./Card";
import { Link } from "react-router-dom";
import { Slideranim } from "../Anim/Slideramin";

export default function Slider() {
  const [currentIndex, setcurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const PrevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? Slides.length - 1 : currentIndex - 1;
    setDirection(-1);
    setcurrentIndex(newIndex);
  };

  const NextSlide = () => {
    const isLastSlide = currentIndex === Slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setDirection(1);
    setcurrentIndex(newIndex);
  };

  useEffect(() => {
    const intervalId = setTimeout(() => {
      NextSlide();
    }, 7000);

    return () => clearTimeout(intervalId);
  }, [currentIndex]);

  return (
    <div className="max-w-[90vw] h-screen  pt-[7rem] w-full m-auto py-16 px-4 relative group">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          variants={Slideranim}
          initial="enter"
          animate="center"
          exit="exit"
          custom={direction}
          transition={{ duration: 0.5 }}
          style={{
            backgroundImage: `url(${Slides[currentIndex].img})`,
            width: "100%",
            height: "100%",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="w-full h-full duration-500 relative"
        >
          <div className="relative h-full">
            <div className="absolute top-[20rem] md:left-[10rem] md:right-[15px] text-center space-y-5 sm:text-left md:w-[40%]">
              <h1 className="md:text-3xl text-xl text-white font-bold">
                {Slides[currentIndex].header}
              </h1>
              <p className="md:text-6xl text-3xl text-white font-bold">
                {Slides[currentIndex].pargraphe}
              </p>
              <Link to={"/shop"}>
                <Button
                  text={"Buy Now"}
                  style={"px-10 py-3 bg-white text-black font-bold mt-20"}
                />
              </Link>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] -left-6 text-2xl rotate-45 p-2 bg-gray-100 text-black cursor-pointer">
        <BsChevronLeft
          size={30}
          className="rotate-[-40deg]"
          onClick={PrevSlide}
        />
      </div>
      <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] -right-6 text-2xl rotate-45 p-2 bg-gray-100 text-black cursor-pointer">
        <BsChevronRight
          size={30}
          className="rotate-[-40deg]"
          onClick={NextSlide}
        />
      </div>
    </div>
  );
}
