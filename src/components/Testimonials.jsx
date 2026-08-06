import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export default function Testimonials() {
  return (
    <>
      <style>{`

      @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');

      .testimonials{

        padding:140px 7%;

        background:white;

      }

      .testimonials-header{

        max-width:900px;

        margin:0 auto 80px;

        text-align:center;

      }

      .testimonials-subtitle{

        color:#B75C3B;

        text-transform:uppercase;

        letter-spacing:4px;

        font-weight:600;

        margin-bottom:20px;

      }

      .testimonials-title{

        font-family:'Cormorant Garamond',serif;

        font-size:4rem;

        color:#4B3222;

        line-height:1.15;

        margin-bottom:30px;

      }

      .testimonials-description{

        max-width:760px;

        margin:auto;

        color:#6F6258;

        line-height:2;

        font-size:1.08rem;

      }

      .engagement-card{

        max-width:950px;

        margin:70px auto 0;

        background:#FBEEDA;

        border-radius:34px;

        padding:70px 60px;

        text-align:center;

        box-shadow:0 25px 60px rgba(0,0,0,.08);

        transition:.35s;

      }

      .engagement-card:hover{

        transform:translateY(-8px);

      }

      .engagement-icon{

        width:90px;

        height:90px;

        margin:0 auto 30px;

        border-radius:50%;

        background:#B75C3B;

        color:white;

        display:flex;

        justify-content:center;

        align-items:center;

        box-shadow:0 20px 40px rgba(183,92,59,.25);

      }

      .engagement-card h3{

        font-family:'Cormorant Garamond',serif;

        font-size:2.4rem;

        color:#4B3222;

        margin-bottom:25px;

      }

      .engagement-card p{

        color:#6F6258;

        font-size:1.1rem;

        line-height:2;

        max-width:700px;

        margin:auto;

      }

      @media(max-width:900px){

        .testimonials-title{

          font-size:3rem;

        }

        .engagement-card{

          padding:45px 35px;

        }

      }

      @media(max-width:768px){

        .testimonials{

          padding:90px 6%;

        }

        .testimonials-title{

          font-size:2.4rem;

        }

        .engagement-card{

          padding:40px 28px;

        }

        .engagement-card h3{

          font-size:2rem;

        }

        .engagement-card p{

          font-size:1rem;

        }

      }

      `}</style>      <section className="testimonials" id="testimonials">

        <motion.div
          className="testimonials-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >

          <p className="testimonials-subtitle">

            NOTRE ENGAGEMENT

          </p>

          <h2 className="testimonials-title">

            Votre confiance mérite
            toute notre attention.

          </h2>

          <p className="testimonials-description">

            Maison Allys s'engage à étudier chaque demande
            avec sérieux, à vous présenter des solutions
            cohérentes avec votre budget et à vous
            accompagner avec clarté à chaque étape.

          </p>

        </motion.div>

        <motion.div
          className="engagement-card"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >

          <div className="engagement-icon">

            <ShieldCheck size={42} />

          </div>

          <h3>

            Notre engagement envers vous

          </h3>

          <p>

            Chaque projet est étudié avec attention afin de
            vous proposer des solutions adaptées à vos besoins,
            à vos attentes et à votre budget. Nous privilégions
            une communication claire, une sélection rigoureuse
            des prestataires et un accompagnement personnalisé
            tout au long de votre projet.

          </p>

        </motion.div>

      </section>

    </>
  );
}