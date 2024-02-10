export const DropMenu = {
  initial: {
    y: "-100%",
  },
  animate: {
    y: "0%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    y: "-100%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
};
export const LinkDrop = {
  initial: {
    y: "-10rem",
  },
  animate: {
    y: "0",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    y: "-10rem",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
};
