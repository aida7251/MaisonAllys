import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  const isHome = location.pathname === "/";

  useEffect(() => {

    const handleScroll = () => {

      if (isHome) {

        setScrolled(window.scrollY > 30);

      }

    };

    if (isHome) {

      window.addEventListener("scroll", handleScroll);

      handleScroll();

      return () =>
        window.removeEventListener("scroll", handleScroll);

    } else {

      setScrolled(true);

    }

  }, [isHome]);

  useEffect(() => {

    setMenuOpen(false);

  }, [location.pathname]);

  return (
    <>
    <style>{`

@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');

*{

margin:0;

padding:0;

box-sizing:border-box;

}

body{

font-family:'Inter',sans-serif;

background:#FBEEDA;

color:#4B3222;

overflow-x:hidden;

}

a{

text-decoration:none;

}

.navbar{

position:fixed;

top:0;

left:0;

width:100%;

padding:18px 0;

z-index:9999;

transition:.4s;

background:${scrolled ? "rgba(251,238,218,.96)" : "transparent"};

backdrop-filter:${scrolled ? "blur(14px)" : "none"};

box-shadow:${scrolled ? "0 10px 35px rgba(0,0,0,.08)" : "none"};

}

.container{

width:100%;

max-width:none;

padding:0 30px;

display:flex;

align-items:center;

justify-content:space-between;

}

.logo{

display:flex;

align-items:center;

gap:18px;

text-decoration:none;

margin-right:auto;

}

.logo-image{

width:110px;

height:110px;

object-fit:contain;

transform:scale(1.25);

transform-origin:left center;

margin-left:-18px;

flex-shrink:0;

}

.logo-text{

font-family:'Cormorant Garamond',serif;

font-size:2rem;

font-weight:600;

line-height:1;

color:#4B3222;

white-space:nowrap;

}

.logo-text span{

color:#B75C3B;

}

nav{

display:flex;

align-items:center;

gap:42px;

}

.nav-link{

position:relative;

font-size:.95rem;

font-weight:500;

color:#4B3222;

transition:.3s;

}

.nav-link::after{

content:"";

position:absolute;

left:0;

bottom:-8px;

width:0;

height:2px;

background:#B75C3B;

transition:.35s;

}

.nav-link:hover{

color:#B75C3B;

}

.nav-link:hover::after{

width:100%;

}

.nav-link.active{

color:#B75C3B;

font-weight:600;

}

.nav-link.active::after{

width:100%;

}

.contact-btn{

padding:14px 30px;

border-radius:999px;

background:#B75C3B;

color:white;

font-weight:600;

transition:.35s;

}

.contact-btn:hover{

background:#9D472A;

transform:translateY(-3px);

}

.menu{

display:none;

cursor:pointer;

color:#4B3222;

z-index:10001;

}

@media(max-width:980px){

.logo-image{

width:80px;

height:80px;

transform:scale(1.1);

margin-left:-8px;

}

.logo-text{

font-size:1.6rem;

}

.menu{

display:block;

}

.contact-btn{

display:none;

}

nav{

position:fixed;

top:90px;

left:${menuOpen ? "0" : "-100%"};

width:100%;

height:calc(100vh - 90px);

background:#FBEEDA;

display:flex;

flex-direction:column;

justify-content:center;

align-items:center;

gap:35px;

transition:.4s;

}

.nav-link{

font-size:1.2rem;

}

}

`}</style>     <header className="navbar">
        <div className="container">

         <NavLink
  to="/"
  className="logo"
>

  <img
    src="/images/logo.png"
    alt="Maison Allys"
    className="logo-image"
  />

  <div className="logo-text">

    MAISON <span>ALLYS</span>

  </div>

</NavLink>

          <nav>

            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Accueil
            </NavLink>

            <NavLink
              to="/la-maison"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              La Maison
            </NavLink>

            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Services
            </NavLink>

            <NavLink
              to="/comment-ca-marche"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Comment ça marche
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </NavLink>

          </nav>

          {/* <NavLink
            to="/contact"
            className="contact-btn"
          >
            Nous contacter
          </NavLink> */}

          <div
            className="menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X size={30} />
            ) : (
              <Menu size={30} />
            )}
          </div>

        </div>
      </header>

    </>
  );

}