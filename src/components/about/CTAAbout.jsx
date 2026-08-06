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

        min-height:720px;

        display:flex;

        align-items:center;

        justify-content:center;

      }

      .cta-background{

        position:absolute;

        inset:0;

        width:100%;

        height:100%;

        object-fit:cover;

        object-position:center center;

        z-index:0;

        transition:transform .8s;

      }

      .cta-about:hover .cta-background{

        transform:scale(1.04);

      }

      .cta-overlay{

        position:absolute;

        inset:0;

        background:linear-gradient(

          rgba(32,22,16,.55),

          rgba(32,22,16,.55)

        );

        z-index:1;

      }

      .cta-container{

        position:relative;

        z-index:2;

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

        background:rgba(255,255,255,.15);

        border:1px solid rgba(255,255,255,.20);

        backdrop-filter:blur(12px);

        font-size:.85rem;

        font-weight:600;

        letter-spacing:1px;

        text-transform:uppercase;

        margin-bottom:30px;

      }

      .cta-title{

        font-family:'Cormorant Garamond',serif;

        font-size:4.5rem;

        line-height:1.1;

        margin-bottom:28px;

      }

      .cta-text{

        max-width:760px;

        margin:auto;

        font-size:1.1rem;

        line-height:2;

        color:rgba(255,255,255,.92);

      }      .cta-buttons{

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

        background:rgba(255,255,255,.08);

        backdrop-filter:blur(10px);

        color:white;

        text-decoration:none;

        transition:.35s;

      }

      .btn-secondary:hover{

        transform:translateY(-5px);

        background:rgba(255,255,255,.18);

      }

      .cta-footer{

        margin-top:70px;

        color:rgba(255,255,255,.75);

        font-size:1rem;

        line-height:1.8;

      }

      @media(max-width:768px){

        .cta-about{

          min-height:620px;

          padding:90px 0;

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

      `}</style>      <section className="cta-about">

        <img
          src="/images/cta-about.jpg"
          alt="Maison Allys"
          className="cta-background"
        />

        <div className="cta-overlay"></div>

        <div className="cta-container">

          <motion.div
            initial={{ opacity:0, y:40 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration:.8 }}
            viewport={{ once:true }}
          >

            <div className="cta-badge">

              ✦ Maison Allys

            </div>

            <h2 className="cta-title">

              Confiez-nous vos projets,
              profitez pleinement
              de l'essentiel.

            </h2>

            <p className="cta-text">

              Voyage, événement, surprise,
              recherche de prestataire ou
              demande particulière :
              Maison Allys vous accompagne
              avec attention pour transformer
              vos idées en projets
              soigneusement organisés.

            </p>

            <div className="cta-buttons">

              <NavLink
                to="/services"
                className="btn-primary"
              >

                Découvrir nos services

                <ArrowRight size={20} />

              </NavLink>

              <NavLink
                to="/contact"
                className="btn-secondary"
              >

                <Phone size={20} />

                Nous contacter

              </NavLink>

            </div>

            <div className="cta-footer">

              Maison Allys • Une maison de services lifestyle
              pensée pour vous faire gagner du temps et
              prendre soin des projets qui comptent.

            </div>

          </motion.div>

        </div>

      </section>

    </>

  );

}