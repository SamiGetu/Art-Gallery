export const Slideranim = {
  enter: (direction) => {
    return {
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      position: "absolute", // Ensure absolute positioning
      top: 0, // Adjust top position as needed
      left: 0, // Adjust left position as needed
    };
  },
  center: {
    x: 0,
    transition: { duration: 0 },
    opacity: 1,
    position: "absolute", // Ensure absolute positioning
    top: 0, // Adjust top position as needed
    left: 0, // Adjust left position as needed
  },
  exit: (direction) => {
    return {
      x: direction < 0 ? "100%" : "-100%",
      transition: { duration: 0 },
      opacity: 0,
      position: "absolute", // Ensure absolute positioning
      top: 0, // Adjust top position as needed
      left: 0, // Adjust left position as needed
    };
  },
};
