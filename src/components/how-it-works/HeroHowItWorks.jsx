import { motion } from "framer-motion";

export default function HeroHowItWorks() {

  return (

    <>

      <style>{`

      @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');

      .hero-how{

        position:relative;

        width:100%;

        height:85vh;

        display:flex;

        align-items:center;

        justify-content:center;

        overflow:hidden;

      }

      .hero-how img{

        position:absolute;

        inset:0;

        width:100%;

        height:100%;

        object-fit:cover;

      }

      .hero-how::before{

        content:"";

        position:absolute;

        inset:0;

        background:linear-gradient(
          rgba(0,0,0,.55),
          rgba(0,0,0,.45),
          rgba(0,0,0,.60)
        );

        z-index:1;

      }

      .hero-how-content{

        position:relative;

        z-index:2;

        width:90%;

        max-width:900px;

        text-align:center;

        color:white;

      }

      .hero-how-subtitle{

        font-family:Inter,sans-serif;

        text-transform:uppercase;

        letter-spacing:5px;

        font-size:.9rem;

        margin-bottom:25px;

      }

      .hero-how-title{

        font-family:'Cormorant Garamond',serif;

        font-size:5rem;

        line-height:1.1;

        margin-bottom:28px;

      }

      .hero-how-title span{

        color:#E1CBB2;

      }

      .hero-how-text{

        max-width:760px;

        margin:auto;

        font-size:1.15rem;

        line-height:1.9;

      }

      @media(max-width:900px){

        .hero-how-title{

          font-size:3.5rem;

        }

      }

      @media(max-width:700px){

        .hero-how{

          height:70vh;

        }

        .hero-how-title{

          font-size:2.7rem;

        }

        .hero-how-text{

          font-size:1rem;

        }

      }

      `}</style>
            <section className="hero-how">

        <img
          src="/images/how-it-works-hero.jpg"
          alt="Comment fonctionne Maison Allys"
        />

        <motion.div
          className="hero-how-content"
          initial={{ opacity:0, y:60 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:1 }}
        >

          <p className="hero-how-subtitle">

            Maison Allys

          </p>

          <h1 className="hero-how-title">

            Comment <span>ça marche ?</span>

          </h1>

          <p className="hero-how-text">

            Chez Maison Allys, chaque projet débute par un échange.
            Nous prenons le temps de comprendre vos besoins afin de
            vous proposer un accompagnement personnalisé, clair et
            adapté à vos envies, à vos contraintes et à votre budget.

          </p>

        </motion.div>

      </section>

    </>

  );

}