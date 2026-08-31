import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import App from "./App";

import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import HowItWorks from "./Pages/HowItWorks";
// import NotFound from "./pages/NotFound";


// Remonte automatiquement en haut à chaque changement de page
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>

      <ScrollToTop />

      <Routes>

        <Route element={<App />}>

          <Route
            index
            element={<Home />}
          />

          <Route
            path="services"
            element={<Services />}
          />

          <Route
            path="la-maison"
            element={<About />}
          />

          <Route
            path="contact"
            element={<Contact />}
          />

          <Route
            path="comment-ca-marche"
            element={<HowItWorks />}
          />

          {/* 
          <Route
            path="*"
            element={<NotFound />}
          />
          */}

        </Route>

      </Routes>

    </BrowserRouter>
  </React.StrictMode>
);