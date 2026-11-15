import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroServices() {

  return (

    <>

      <style>{`

      .hero-services{

        position:relative;

        min-height:100vh;

        min-height:100svh;

        padding:150px 0 90px;

        overflow:hidden;

        display:flex;

        align-items:center;

        justify-content:center;

        background:#19120C;

      }

      .hero-services .hero-image{

        position:absolute;

        inset:0;

        width:100%;

        height:100%;

        object-fit:cover;

        object-position:center center;

        z-index:0;

      }

      .hero-services .hero-overlay{

        position:absolute;

        inset:0;

        background:linear-gradient(
          rgba(25,18,12,.55),
          rgba(25,18,12,.55)
        );

        z-index:1;

      }

      .hero-services .hero-content{

        position:relative;

        z-index:2;

        text-align:center;

        color:white;

        width:90%;

        max-width:1100px;

        margin:auto;

        display:flex;

        flex-direction:column;

        align-items:center;

      }

      .hero-services .hero-badge{

        display:inline-block;

        padding:10px 22px;

        border:1px solid rgba(255,255,255,.3);

        border-radius:50px;

        backdrop-filter:blur(15px);

        letter-spacing:3px;

        text-transform:uppercase;

        font-size:.8rem;

        margin-bottom:25px;

      }

      .hero-services .hero-title{

        font-family:"Cormorant Garamond",serif;

        font-size:clamp(2.4rem, 5.5vw, 5rem);

        line-height:1.1;

        margin-bottom:25px;

      }

      .hero-services .hero-title span{

        color:#E1CBB2;

      }

      .hero-services .hero-description{

        max-width:720px;

        font-size:1.15rem;

        line-height:1.9;

        color:rgba(255,255,255,.9);

        margin-bottom:45px;

      }

      .hero-services .hero-btn{

        display:inline-flex;

        align-items:center;

        gap:12px;

        background:#B75C3B;

        color:white;

        text-decoration:none;

        padding:18px 34px;

        border-radius:50px;

        font-weight:600;

        transition:.35s;

      }

      .hero-services .hero-btn:hover{

        transform:translateY(-4px);

        background:#9C472C;

        gap:18px;

      }

      .hero-services .scroll-indicator{

        position:absolute;

        bottom:35px;

        left:50%;

        transform:translateX(-50%);

        z-index:2;

        color:white;

        font-size:.85rem;

        letter-spacing:2px;

        opacity:.8;

      }

      /* Petits écrans d'ordinateur (peu de hauteur) */
      @media(max-height:800px){

        .hero-services{
          padding:130px 0 70px;
        }

        .hero-services .hero-title{
          font-size:clamp(2.2rem, 4.5vw, 4rem);
          margin-bottom:18px;
        }

        .hero-services .hero-badge{
          margin-bottom:18px;
        }

        .hero-services .hero-description{
          line-height:1.7;
          margin-bottom:30px;
        }

        .hero-services .scroll-indicator{
          bottom:20px;
        }

      }

      @media(max-width:600px){

        .hero-services{
          padding:120px 0 70px;
        }

        .hero-services .hero-description{
          font-size:1rem;
        }

        .hero-services .hero-badge{
          font-size:.7rem;
          letter-spacing:2px;
        }

      }

      `}</style>

      <section className="hero-services">

        <img
          src="/images/services-hero.jpg"
          alt="Services Maison Allys"
          className="hero-image"
        />

        <div className="hero-overlay"></div>

        <motion.div

          className="hero-content"

          initial={{opacity:0,y:50}}

          animate={{opacity:1,y:0}}

          transition={{duration:.8}}

        >

          <div className="hero-badge">

            Maison Allys

          </div>

          <h1 className="hero-title">

            Des services conçus <br/>

            <span>autour de votre quotidien.</span>

          </h1>

          <p className="hero-description">

            Chaque besoin est unique. Découvrez une sélection de services
            lifestyle pensés pour vous faire gagner du temps, simplifier
            votre organisation et vous offrir une expérience entièrement
            personnalisée.

          </p>

          <a

            href="#services-list"

            className="hero-btn"

          >

            Découvrir nos services

            <ArrowRight size={20}/>

          </a>

        </motion.div>

        <div className="scroll-indicator">

          SCROLL

        </div>

      </section>

    </>

  );

}
