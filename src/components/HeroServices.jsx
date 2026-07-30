import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroServices() {

  return (

    <>

      <style>{`

      .hero-services{

        position:relative;
        width:100%;
        height:90vh;
        overflow:hidden;

      }

      .hero-video{

        position:absolute;
        width:100%;
        height:100%;
        object-fit:cover;

      }

      .hero-overlay{

        position:absolute;
        inset:0;
        background:linear-gradient(
          rgba(0,0,0,.55),
          rgba(0,0,0,.45)
        );

      }

      .hero-content{

        position:relative;
        z-index:2;

        max-width:900px;
        height:100%;

        margin:auto;

        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;

        text-align:center;

        color:white;

        padding:0 25px;

      }

      .hero-badge{

        padding:10px 22px;

        border:1px solid rgba(255,255,255,.3);

        border-radius:50px;

        backdrop-filter:blur(15px);

        letter-spacing:3px;

        text-transform:uppercase;

        font-size:.8rem;

        margin-bottom:25px;

      }

      .hero-title{

        font-family:"Cormorant Garamond",serif;

        font-size:5rem;

        line-height:1.1;

        margin-bottom:25px;

      }

      .hero-title span{

        color:#E1CBB2;

      }

      .hero-description{

        max-width:720px;

        font-size:1.15rem;

        line-height:1.9;

        color:rgba(255,255,255,.9);

        margin-bottom:45px;

      }

      .hero-btn{

        display:inline-flex;
        align-items:center;
        gap:12px;

        background:#B75C3B;

        color:white;

        padding:18px 34px;

        border-radius:50px;

        font-weight:600;

        transition:.35s;

      }

      .hero-btn:hover{

        transform:translateY(-4px);

        background:#9C472C;

        gap:18px;

      }

      .scroll-indicator{

        position:absolute;

        bottom:35px;

        left:50%;

        transform:translateX(-50%);

        color:white;

        font-size:.85rem;

        letter-spacing:2px;

        opacity:.8;

      }

      @media(max-width:900px){

        .hero-title{

          font-size:3.5rem;

        }

      }

      @media(max-width:600px){

        .hero-services{

          height:80vh;

        }

        .hero-title{

          font-size:2.6rem;

        }

        .hero-description{

          font-size:1rem;

        }

      }

      `}</style>

      <section className="hero-services">

        <video
          autoPlay
          muted
          loop
          playsInline
          className="hero-video"
        >
          <source
            src="/videos/services.mp4"
            type="video/mp4"
          />
        </video>

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