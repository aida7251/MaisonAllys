import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function HeroAbout() {
  return (
    <>
      <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');

      .hero-about{

        position:relative;

        min-height:100vh;

        display:flex;
        align-items:center;
        justify-content:center;

        overflow:hidden;

      }

      .hero-image{

position:absolute;

inset:0;

width:100%;

height:100%;

object-fit:cover;

}

      .hero-overlay{

        position:absolute;

        inset:0;

        background:
        linear-gradient(
          rgba(20,18,15,.55),
          rgba(20,18,15,.65)
        );

      }

      .hero-content{

        position:relative;

        z-index:2;

        width:92%;
        max-width:1250px;

        color:white;

      }

      .hero-badge{

        display:inline-flex;

        align-items:center;

        gap:10px;

        padding:10px 22px;

        border-radius:999px;

        background:rgba(255,255,255,.12);

        backdrop-filter:blur(12px);

        border:1px solid rgba(255,255,255,.18);

        margin-bottom:28px;

        font-size:.85rem;

        text-transform:uppercase;

        letter-spacing:2px;

      }

      .hero-title{

        max-width:850px;

        font-family:'Cormorant Garamond',serif;

        font-size:5rem;

        line-height:1.05;

        font-weight:700;

        margin-bottom:30px;

      }

      .hero-text{

        max-width:700px;

        font-size:1.15rem;

        line-height:2;

        color:rgba(255,255,255,.88);

        margin-bottom:45px;

      }

      .hero-buttons{

        display:flex;

        gap:18px;

        flex-wrap:wrap;

      }

      .btn-primary{

        display:inline-flex;

        align-items:center;

        gap:12px;

        padding:18px 34px;

        border-radius:999px;

        background:#B75C3B;

        color:white;

        font-weight:600;

        transition:.35s;

      }

      .btn-primary:hover{

        background:#9D472A;

        transform:translateY(-3px);

      }

      .btn-secondary{

        display:inline-flex;

        align-items:center;

        justify-content:center;

        padding:18px 34px;

        border-radius:999px;

        border:1px solid rgba(255,255,255,.35);

        backdrop-filter:blur(12px);

        color:white;

        transition:.35s;

      }

      .btn-secondary:hover{

        background:rgba(255,255,255,.12);

      }

      .scroll{

        position:absolute;

        bottom:40px;

        left:50%;

        transform:translateX(-50%);

        color:white;

        animation:float 2s infinite;

        z-index:2;

      }

      @keyframes float{

        0%{

          transform:translate(-50%,0);

        }

        50%{

          transform:translate(-50%,10px);

        }

        100%{

          transform:translate(-50%,0);

        }

      }

      @media(max-width:992px){

        .hero-title{

          font-size:3.8rem;

        }

      }

      @media(max-width:768px){

        .hero-title{

          font-size:2.8rem;

        }

        .hero-text{

          font-size:1rem;

        }

        .hero-buttons{

          flex-direction:column;

        }

        .btn-primary,
        .btn-secondary{

          width:100%;

          justify-content:center;

        }

      }

      `}</style>

      <section className="hero-about">

  <img
    src="/images/about-hero.jpg"
    alt="Maison Allys"
    className="hero-image"
  />

  <div className="hero-overlay"></div>

  <div className="hero-content">

          <motion.div
            initial={{ opacity:0, y:40 }}
            animate={{ opacity:1, y:0 }}
            transition={{ duration:.7 }}
          >

            <div className="hero-badge">

              ✦ La Maison

            </div>

            <h1 className="hero-title">

              L'art de simplifier
              <br />
              l'exceptionnel.

            </h1>

            {/* <p className="hero-text">

              Maison Allys est née d'une conviction simple :
              le véritable luxe est celui qui vous libère du
              temps, des contraintes et des imprévus.
              Nous imaginons une conciergerie où chaque
              attention est pensée avec élégance,
              discrétion et excellence afin de transformer
              votre quotidien en une expérience unique.

            </p> */}

            <div className="hero-buttons">

              <NavLink
                to="/contact"
                className="btn-primary"
              >

                Découvrir Maison Allys

                <ArrowRight size={18}/>

              </NavLink>

              <NavLink
                to="/services"
                className="btn-secondary"
              >

                Nos services

              </NavLink>

            </div>

          </motion.div>

        </div>

        <div className="scroll">

          <ChevronDown size={34}/>

        </div>

      </section>

    </>
  );
}