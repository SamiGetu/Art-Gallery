import { useState, useEffect } from "react";
import { RiMenu4Fill } from "react-icons/ri";
import { FaXmark } from "react-icons/fa6";
import NavLink from "../data/NavLink.json";
import { motion, AnimatePresence } from "framer-motion";
import { DropMenu, LinkDrop } from "../Anim/Navanim";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [open, setopen] = useState(false);
  const [change, setchange] = useState(false);

  const ChangeColor = () => {
    if (window.scrollY >= 80) {
      setchange(true);
    } else {
      setchange(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(ChangeColor);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="fixed w-full z-10">
        <div>
          <nav
            className={`${
              change
                ? "h-[6rem] bg-white text-black font-medium fixed w-full z-10 duration-500"
                : "h-[0]"
            }`}
          >
            <h1 className="font-bold text-4xl  absolute top-7 left-10">Logo</h1>
            <ul className="flex justify-center space-x-10 text-xl font-medium  pt-10">
              {NavLink.map((link) => (
                <li
                  className="md:block hidden cursor-pointer relative navLink"
                  key={link.Name}
                >
                  <Link to={link.Path}>{link.Name}</Link>
                </li>
              ))}
              <RiMenu4Fill
                size={"2rem"}
                className="absolute right-20 top-"
                onClick={() => setopen(true)}
              />
            </ul>
          </nav>
        </div>
        <div>
          <AnimatePresence>
            {open && (
              <motion.div
                variants={DropMenu}
                initial="initial"
                animate="animate"
                exit="exit"
                className="bg-black/30 absolute h-[70vh] w-full backdrop-blur-[7px] origin-top pt-20 z-10"
              >
                <ul className="flex flex-col justify-center items-center space-y-10 tracking-[0.5rem] text-white md:text-6xl text-4xl font-bold">
                  {NavLink.map((link) => (
                    <motion.li
                      key={link.Name}
                      variants={LinkDrop}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                    >
                      <Link to={link.Path}>{link.Name}</Link>
                    </motion.li>
                  ))}
                  <FaXmark
                    size={"2rem"}
                    className="absolute right-20 top-0"
                    onClick={() => setopen(false)}
                  />
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default NavBar;
