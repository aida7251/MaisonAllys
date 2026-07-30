import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Outlet />
      </main>

      {/* <Footer /> */}
      {/* ou <Footer /> si tu veux l'afficher sur toutes les pages */}
    </>
  );
}