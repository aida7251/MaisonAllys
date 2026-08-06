import { motion } from "framer-motion";
import {
  Users,
  Sparkles,
  ShieldCheck,
  Handshake,
} from "lucide-react";

export default function WhyChooseUs() {

  const cards = [
    {
      icon: <Users size={34} />,
      title: "Écoute",
      text: "Chaque accompagnement commence par une véritable compréhension de votre besoin.",
    },
    {
      icon: <Sparkles size={34} />,
      title: "Personnalisation",
      text: "Les propositions sont adaptées à vos envies, à vos contraintes et à votre budget.",
    },
    {
      icon: <ShieldCheck size={34} />,
      title: "Transparence",
      text: "Vous restez informé des solutions proposées et libre de valider chaque étape.",
    },
    {
      icon: <Handshake size={34} />,
      title: "Confiance",
      text: "Les prestataires sont recherchés et sélectionnés avec attention selon les besoins de votre projet.",
    },
  ];

  return (
    <>
      <style>{`

      @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');

      .why{

        padding:140px 7%;

        background:#FBEEDA;

      }

      .why-header{

        max-width:820px;

        margin:0 auto 90px;

        text-align:center;

      }

      .why-subtitle{

        color:#B75C3B;

        text-transform:uppercase;

        letter-spacing:4px;

        font-weight:600;

        margin-bottom:18px;

      }

      .why-title{

        font-family:'Cormorant Garamond',serif;

        font-size:4rem;

        color:#4B3222;

        line-height:1.15;

        margin-bottom:25px;

      }

      .why-description{

        color:#6F6258;

        line-height:2;

        font-size:1.05rem;

      }

      .why-grid{

        max-width:1350px;

        margin:auto;

        display:grid;

        grid-template-columns:repeat(2,1fr);

        gap:35px;

      }

      .why-card{

        background:white;

        padding:45px;

        border-radius:30px;

        box-shadow:0 20px 45px rgba(0,0,0,.06);

        transition:.35s;

      }

      .why-card:hover{

        transform:translateY(-10px);

      }

      .why-icon{

        width:75px;

        height:75px;

        border-radius:50%;

        background:#B75C3B;

        color:white;

        display:flex;

        justify-content:center;

        align-items:center;

        margin-bottom:24px;

      }

      .why-card h3{

        color:#4B3222;

        font-size:1.45rem;

        margin-bottom:14px;

      }

      .why-card p{

        color:#6F6258;

        line-height:1.9;

      }

      @media(max-width:900px){

        .why-grid{

          grid-template-columns:1fr;

        }

        .why-title{

          font-size:2.8rem;

        }

      }

      @media(max-width:768px){

        .why{

          padding:90px 6%;

        }

        .why-title{

          font-size:2.3rem;

        }

        .why-card{

          padding:35px;

        }

      }

      `}</style>      <section className="why">

        <div className="why-header">

          <p className="why-subtitle">

            Pourquoi Maison Allys

          </p>

          <h2 className="why-title">

            Un accompagnement fondé sur
            l'écoute, la confiance et la
            personnalisation.

          </h2>

          <p className="why-description">

            Chez Maison Allys, chaque projet est unique.
            Nous prenons le temps de comprendre vos besoins
            afin de vous proposer des solutions adaptées,
            en toute transparence et avec des partenaires
            sélectionnés avec soin.

          </p>

        </div>

        <div className="why-grid">

          {cards.map((card, index) => (

            <motion.div
              key={index}
              className="why-card"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .6,
                delay: index * .15
              }}
              viewport={{ once: true }}
            >

              <div className="why-icon">

                {card.icon}

              </div>

              <h3>

                {card.title}

              </h3>

              <p>

                {card.text}

              </p>

            </motion.div>

          ))}

        </div>

      </section>

    </>
  );
}