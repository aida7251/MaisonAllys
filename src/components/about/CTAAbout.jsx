import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";

export default function CTAAbout() {
  return (
    <>
      <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');

      .cta-about{

        position:relative;

        overflow:hidden;

        padding:160px 0;

        background:linear-gradient(135deg,#4B3222 0%,#6C4733 100%);

      }

      .cta-about::before{

        content:"";

        position:absolute;

        inset:0;

        background:
          radial-gradient(circle at top right,rgba(255,255,255,.08),transparent 30%),
          radial-gradient(circle at bottom left,rgba(183,92,59,.18),transparent 35%);

      }

      .cta-container{

        position:relative;

        width:92%;

        max-width:1200px;

        margin:auto;

        text-align:center;

        color:white;

      }

      .cta-badge{

        display:inline-flex;

        align-items:center;

        gap:10px;

        padding:12px 24px;

        border-radius:999px;

        background:rgba(255,255,255,.12);

        border:1px solid rgba(255,255,255,.15);

        backdrop-filter:blur(12px);

        font-size:.85rem;

        font-weight:600;

        letter-spacing:1px;

        text-transform:uppercase;

        margin-bottom:28px;

      }

      .cta-title{

        font-family:'Cormorant Garamond',serif;

        font-size:4.5rem;

        font-weight:600;

        line-height:1.1;

        margin-bottom:28px;

      }

      .cta-text{

        max-width:760px;

        margin:auto;

        font-size:1.1rem;

        line-height:2;

        color:rgba(255,255,255,.88);

      }

      .cta-buttons{

        display:flex;

        justify-content:center;

        flex-wrap:wrap;

        gap:20px;

        margin-top:55px;

      }

      .btn-primary{

        display:flex;

        align-items:center;

        gap:12px;

        padding:18px 36px;

        border-radius:999px;

        background:#B75C3B;

        color:white;

        text-decoration:none;

        font-weight:600;

        transition:.35s;

      }

      .btn-primary:hover{

        transform:translateY(-5px);

        background:#C86A45;

      }

      .btn-secondary{

        display:flex;

        align-items:center;

        gap:12px;

        padding:18px 36px;

        border-radius:999px;

        border:1px solid rgba(255,255,255,.35);

        color:white;

        text-decoration:none;

        backdrop-filter:blur(10px);

        transition:.35s;

      }

      .btn-secondary:hover{

        transform:translateY(-5px);

        background:rgba(255,255,255,.08);

      }

      .cta-footer{

        margin-top:70px;

        color:rgba(255,255,255,.65);

        font-size:.95rem;

        letter-spacing:.5px;

      }

      @media(max-width:768px){

        .cta-about{

          padding:110px 0;

        }

        .cta-title{

          font-size:2.8rem;

        }

        .cta-text{

          font-size:1rem;

        }

        .cta-buttons{

          flex-direction:column;

        }

        .btn-primary,
        .btn-secondary{

          justify-content:center;

          width:100%;

        }

      }

      `}</style>

      <section className="cta-about">

        <div className="cta-container">

          <motion.div
            initial={{opacity:0,y:40}}
            whileInView={{opacity:1,y:0}}
            transition={{duration:.8}}
            viewport={{once:true}}
          >

            <div className="cta-badge">

              ✦ Maison Allys

            </div>

            <h2 className="cta-title">

              Offrez-vous
              le luxe du temps.

            </h2>

            <p className="cta-text">

              Découvrez une nouvelle manière de vivre votre quotidien.
              Notre équipe vous accompagne avec discrétion, élégance
              et exigence afin que chaque instant soit consacré à
              l'essentiel.

            </p>

            <div className="cta-buttons">

              <NavLink
                to="/services"
                className="btn-primary"
              >

                Découvrir nos services

                <ArrowRight size={20}/>

              </NavLink>

              <NavLink
                to="/contact"
                className="btn-secondary"
              >

                <Phone size={20}/>

                Nous contacter

              </NavLink>

            </div>

            <div className="cta-footer">

              Maison Allys • Une conciergerie privée pensée pour celles
              et ceux qui recherchent l'excellence.

            </div>

          </motion.div>

        </div>

      </section>

    </>
  );
}