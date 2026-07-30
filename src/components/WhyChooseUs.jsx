import { motion } from "framer-motion";
import {
  ShieldCheck,
  Clock3,
 Gem,
 Users,
 Star,
 Handshake,
} from "lucide-react";

export default function WhyChooseUs() {
  const cards = [
    {
      icon: <ShieldCheck size={34} />,
      title: "Discrétion",
      text: "Toutes vos demandes sont traitées avec la plus grande confidentialité.",
    },
    {
      icon: <Clock3 size={34} />,
      title: "Réactivité",
      text: "Une équipe disponible pour répondre rapidement à chacune de vos demandes.",
    },
    {
      icon: <Gem size={34} />,
      title: "Excellence",
      text: "Des prestations haut de gamme sélectionnées avec le plus grand soin.",
    },
    {
      icon: <Handshake size={34} />,
      title: "Réseau Premium",
      text: "Des partenaires de confiance pour garantir une qualité irréprochable.",
    },
  ];

  const stats = [
    {
      value: "24/7",
      label: "Disponibilité",
      icon: <Clock3 size={28} />,
    },
    {
      value: "100%",
      label: "Service personnalisé",
      icon: <Users size={28} />,
    },
    {
      value: "5★",
      label: "Expérience Premium",
      icon: <Star size={28} />,
    },
  ];

  return (
    <>
      <style>{`

      .why{

        padding:140px 7%;
        background:#FBEEDA;

      }

      .why-header{

        text-align:center;
        max-width:760px;
        margin:auto auto 90px;

      }

      .why-subtitle{

        color:#B75C3B;
        text-transform:uppercase;
        letter-spacing:4px;
        font-weight:600;
        margin-bottom:20px;

      }

      .why-title{

        font-family:'Cormorant Garamond',serif;
        font-size:4rem;
        color:#4B3222;
        margin-bottom:25px;

      }

      .why-description{

        color:#6F6258;
        line-height:1.9;

      }

      .why-grid{

        display:grid;
        grid-template-columns:repeat(2,1fr);
        gap:35px;
        max-width:1350px;
        margin:auto;

      }

      .why-card{

        background:white;

        padding:45px;

        border-radius:30px;

        transition:.35s;

        box-shadow:0 20px 45px rgba(0,0,0,.06);

      }

      .why-card:hover{

        transform:translateY(-10px);

      }

      .why-icon{

        width:75px;
        height:75px;

        border-radius:50%;

        background:#B75C3B;

        display:flex;
        justify-content:center;
        align-items:center;

        color:white;

        margin-bottom:25px;

      }

      .why-card h3{

        color:#4B3222;
        font-size:1.5rem;
        margin-bottom:15px;

      }

      .why-card p{

        color:#6F6258;
        line-height:1.8;

      }

      .stats{

        margin-top:90px;

        display:grid;
        grid-template-columns:repeat(3,1fr);

        gap:30px;

        max-width:1200px;
        margin-left:auto;
        margin-right:auto;

      }

      .stat{

        background:#4B3222;
        color:white;

        border-radius:25px;

        padding:40px;

        text-align:center;

      }

      .stat svg{

        color:#E1CBB2;
        margin-bottom:20px;

      }

      .stat h2{

        font-size:3rem;
        margin-bottom:10px;

      }

      .stat p{

        opacity:.85;

      }

      @media(max-width:900px){

        .why-grid{

          grid-template-columns:1fr;

        }

        .stats{

          grid-template-columns:1fr;

        }

        .why-title{

          font-size:2.8rem;

        }

      }

      @media(max-width:700px){

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

      `}</style>

      <section className="why">

        <div className="why-header">

          <p className="why-subtitle">
            Pourquoi Maison Allys
          </p>

          <h2 className="why-title">
            Une expérience pensée autour
            de votre sérénité.
          </h2>

          <p className="why-description">
            Notre mission est simple : vous faire gagner du temps,
            vous simplifier la vie et vous offrir un accompagnement
            discret, fiable et haut de gamme.
          </p>

        </div>

        <div className="why-grid">

          {cards.map((card,index)=>(

            <motion.div

              key={index}

              className="why-card"

              initial={{opacity:0,y:60}}

              whileInView={{opacity:1,y:0}}

              transition={{duration:.6,delay:index*.15}}

              viewport={{once:true}}

            >

              <div className="why-icon">

                {card.icon}

              </div>

              <h3>{card.title}</h3>

              <p>{card.text}</p>

            </motion.div>

          ))}

        </div>

        <div className="stats">

          {stats.map((item,index)=>(

            <motion.div

              key={index}

              className="stat"

              initial={{opacity:0,scale:.9}}

              whileInView={{opacity:1,scale:1}}

              transition={{duration:.6,delay:index*.2}}

              viewport={{once:true}}

            >

              {item.icon}

              <h2>{item.value}</h2>

              <p>{item.label}</p>

            </motion.div>

          ))}

        </div>

      </section>

    </>
  );
}