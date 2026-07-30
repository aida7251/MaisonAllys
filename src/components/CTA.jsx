import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <>
      <style>{`

      .cta{

        padding:120px 7%;
        background:#FBEEDA;

      }

      .cta-box{

        max-width:1200px;
        margin:auto;

        background:#4B3222;

        border-radius:35px;

        padding:80px 60px;

        color:white;

        text-align:center;

        overflow:hidden;
        position:relative;

      }

      .cta-box::before{

        content:"";

        position:absolute;

        width:350px;
        height:350px;

        border-radius:50%;

        background:rgba(255,255,255,.05);

        top:-170px;
        right:-120px;

      }

      .cta-box::after{

        content:"";

        position:absolute;

        width:220px;
        height:220px;

        border-radius:50%;

        background:rgba(255,255,255,.04);

        bottom:-110px;
        left:-70px;

      }

      .cta-subtitle{

        color:#E1CBB2;
        text-transform:uppercase;
        letter-spacing:4px;
        font-weight:600;
        margin-bottom:20px;
        position:relative;
        z-index:2;

      }

      .cta-title{

        font-family:'Cormorant Garamond',serif;
        font-size:4rem;
        line-height:1.2;
        margin-bottom:25px;
        position:relative;
        z-index:2;

      }

      .cta-text{

        max-width:700px;
        margin:auto;
        line-height:1.9;
        color:rgba(255,255,255,.85);
        margin-bottom:45px;
        position:relative;
        z-index:2;

      }

      .cta-btn{

        display:inline-flex;
        align-items:center;
        gap:12px;

        background:#B75C3B;
        color:white;

        padding:18px 36px;

        border-radius:50px;

        font-weight:600;

        transition:.35s;

        position:relative;
        z-index:2;

      }

      .cta-btn:hover{

        transform:translateY(-4px);
        gap:18px;
        background:#9C472C;

      }

      @media(max-width:900px){

        .cta-title{

          font-size:2.9rem;

        }

        .cta-box{

          padding:60px 35px;

        }

      }

      @media(max-width:600px){

        .cta{

          padding:90px 6%;

        }

        .cta-title{

          font-size:2.2rem;

        }

        .cta-text{

          font-size:.95rem;

        }

      }

      `}</style>

      <section className="cta">

        <motion.div

          className="cta-box"

          initial={{opacity:0,y:60}}

          whileInView={{opacity:1,y:0}}

          transition={{duration:.8}}

          viewport={{once:true}}

        >

          <p className="cta-subtitle">

            Maison Allys

          </p>

          <h2 className="cta-title">

            Confiez-nous votre prochaine demande.

          </h2>

          <p className="cta-text">

            Voyage, événement, réservation, demande particulière ou
            simple envie de gagner du temps : notre équipe est à votre
            écoute pour concevoir une expérience entièrement sur mesure.

          </p>

          <a
            href="#contact"
            className="cta-btn"
          >

            Nous contacter

            <ArrowRight size={20}/>

          </a>

        </motion.div>

      </section>

    </>
  );
}