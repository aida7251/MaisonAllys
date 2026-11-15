import { motion } from "framer-motion";

export default function HeroContact() {
  return (
    <>
      <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');

      .hero-contact{

        position:relative;

        min-height:100vh;

        min-height:100svh;

        padding:150px 0 90px;

        display:flex;

        align-items:center;

        justify-content:center;

        overflow:hidden;

        background:#241811;

      }

      .hero-contact .hero-image{

        position:absolute;

        inset:0;

        width:100%;

        height:100%;

        object-fit:cover;

        object-position:center center;

        z-index:0;

      }

      .hero-contact .hero-overlay{

        position:absolute;

        inset:0;

        background:linear-gradient(
          rgba(28,20,15,.55),
          rgba(28,20,15,.55)
        );

        z-index:1;

      }

      .hero-contact .hero-content{

        position:relative;

        z-index:2;

        width:90%;

        max-width:1100px;

        margin:auto;

        text-align:center;

        color:white;

      }

      .hero-contact .hero-badge{

        display:inline-flex;

        align-items:center;

        padding:12px 24px;

        border-radius:999px;

        background:rgba(255,255,255,.08);

        backdrop-filter:blur(12px);

        border:1px solid rgba(255,255,255,.15);

        text-transform:uppercase;

        letter-spacing:2px;

        font-size:.85rem;

      }

      .hero-contact .hero-title{

        margin-top:28px;

        font-family:'Cormorant Garamond',serif;

        font-size:clamp(2.4rem, 5.5vw, 5.3rem);

        line-height:1.05;

        max-width:760px;

        margin-left:auto;

        margin-right:auto;

      }

      .hero-contact .hero-description{

        margin-top:28px;

        max-width:650px;

        margin-left:auto;

        margin-right:auto;

        font-size:1.15rem;

        line-height:2;

        color:rgba(255,255,255,.85);

      }

      .hero-contact .hero-cards{

        margin-top:70px;

        display:grid;

        grid-template-columns:repeat(3,1fr);

        gap:24px;

        max-width:980px;

        margin-left:auto;

        margin-right:auto;

        text-align:left;

      }

      .hero-contact .hero-card{

        padding:28px;

        border-radius:24px;

        backdrop-filter:blur(18px);

        background:rgba(255,255,255,.08);

        border:1px solid rgba(255,255,255,.15);

      }

      .hero-contact .hero-card h3{

        font-family:'Cormorant Garamond',serif;

        font-size:2rem;

        margin-bottom:12px;

      }

      .hero-contact .hero-card p{

        color:rgba(255,255,255,.78);

        line-height:1.8;

      }

      /* Petits écrans d'ordinateur (peu de hauteur) */
      @media(max-height:800px){

        .hero-contact{
          padding:130px 0 60px;
        }

        .hero-contact .hero-title{
          font-size:clamp(2.2rem, 4.5vw, 4rem);
          margin-top:20px;
        }

        .hero-contact .hero-description{
          margin-top:18px;
          line-height:1.7;
        }

        .hero-contact .hero-cards{
          margin-top:36px;
        }

        .hero-contact .hero-card{
          padding:20px;
        }

        .hero-contact .hero-card h3{
          font-size:1.6rem;
          margin-bottom:8px;
        }

      }

      @media(max-width:1000px){

        .hero-contact .hero-cards{
          grid-template-columns:1fr;
          margin-top:40px;
        }

      }

      @media(max-width:768px){

        .hero-contact{
          padding:120px 0 60px;
        }

        .hero-contact .hero-description{
          font-size:1rem;
        }

        .hero-contact .hero-badge{
          font-size:.75rem;
          padding:10px 18px;
        }

      }

      `}</style>

  <section className="hero-contact">

  <img
    src="/images/contact.jpg"
    alt="Contact Maison Allys"
    className="hero-image"
  />

  <div className="hero-overlay"></div>

  <div className="hero-content">

    <motion.div
      initial={{ opacity:0, y:40 }}
      animate={{ opacity:1, y:0 }}
      transition={{ duration:.8 }}
    >

            <div className="hero-badge">

              ✦ Contact Maison Allys

            </div>

            <h1 className="hero-title">

              Créons ensemble
              une expérience
              sur mesure.

            </h1>

            <p className="hero-description">

              Une demande de service, un devis, une question ou une
              collaboration&nbsp;? Notre équipe vous accompagne avec
              discrétion, élégance et réactivité afin de répondre à
              chacune de vos attentes.

            </p>

            <div className="hero-cards">

              <div className="hero-card">

                <h3>

                  Réponse rapide

                </h3>

                <p>

                  Nous répondons généralement sous 24 heures ouvrées.

                </p>

              </div>

              <div className="hero-card">

                <h3>

                  Confidentialité

                </h3>

                <p>

                  Toutes vos demandes sont traitées avec la plus grande discrétion.

                </p>

              </div>

              <div className="hero-card">

                <h3>

                  Accompagnement

                </h3>

                <p>

                  Un interlocuteur dédié vous accompagne du premier échange jusqu'à la réalisation.

                </p>

              </div>

            </div>

          </motion.div>

        </div>

      </section>

    </>
  );
}