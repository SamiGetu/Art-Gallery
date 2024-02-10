/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import React from "react";
import ReactDOM from "react-dom/client";
import { useEffect } from "react";

import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Gallery from "./Pages/Gallery/Gallery";
import PageNotFound from "./Pages/PageNotFound.jsx";
import Shop from "./Pages/shop/Shop.jsx";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Tranding from "./Pages/Tranding.jsx";

const ScrollToTop = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Scroll to top whenever the location changes
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Return null so this component doesn't render anything
  return null;
};

const router = createBrowserRouter([
  {
    path: "*",
    element: (
      <>
        <PageNotFound />
      </>
    ),
  },
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <Home />
        <Tranding />
        <About />
        <Contact />
        <Footer />
      </>
    ),
  },
  {
    path: "/gallery",
    element: (
      <>
        <ScrollToTop />
        <Gallery />
      </>
    ),
  },
  {
    path: "/shop",
    element: (
      <>
        <ScrollToTop />
        <Shop />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
