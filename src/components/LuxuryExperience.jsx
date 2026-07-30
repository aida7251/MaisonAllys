import { motion } from "framer-motion";
import { ShieldCheck, Clock3, Sparkles } from "lucide-react";

export default function LuxuryExperience() {
  const features = [
    {
      icon: <ShieldCheck size={34} />,
      title: "Discrétion absolue",
      text: "Chaque demande est traitée avec confidentialité, professionnalisme et élégance.",
    },
    {
      icon: <Clock3 size={34} />,
      title: "Un temps précieux",
      text: "Nous nous occupons de l'organisation afin que vous puissiez profiter pleinement de votre temps.",
    },
    {
      icon: <Sparkles size={34} />,
      title: "Sur mesure",
      text: "Chaque prestation est adaptée à vos envies et à votre style de vie.",
    },
  ];

  return (
    <>
      <style>{`

      .luxury{

        background:#FBEEDA;
        padding:140px 7%;

      }

      .luxury-container{

        max-width:1400px;
        margin:auto;

        display:grid;
        grid-template-columns:1fr 1fr;
        gap:80px;
        align-items:center;

      }

      .luxury-image{

        overflow:hidden;
        border-radius:30px;
        box-shadow:0 25px 70px rgba(0,0,0,.12);

      }

      .luxury-image img{

        width:100%;
        height:700px;
        object-fit:cover;
        transition:.7s;

      }

      .luxury-image:hover img{

        transform:scale(1.05);

      }

      .luxury-subtitle{

        color:#B75C3B;
        letter-spacing:4px;
        text-transform:uppercase;
        font-weight:600;
        margin-bottom:18px;

      }

      .luxury-title{

        font-family:'Cormorant Garamond',serif;
        font-size:4rem;
        color:#4B3222;
        margin-bottom:30px;
        line-height:1.15;

      }

      .luxury-description{

        color:#6F6258;
        line-height:1.9;
        margin-bottom:45px;
        font-size:1.05rem;

      }

      .feature{

        display:flex;
        gap:25px;
        margin-bottom:35px;

      }

      .feature-icon{

        width:70px;
        height:70px;
        min-width:70px;

        border-radius:50%;

        background:white;
        color:#B75C3B;

        display:flex;
        justify-content:center;
        align-items:center;

        box-shadow:0 10px 30px rgba(0,0,0,.08);

      }

      .feature h3{

        color:#4B3222;
        margin-bottom:10px;
        font-size:1.3rem;

      }

      .feature p{

        color:#6F6258;
        line-height:1.8;

      }

      @media(max-width:1000px){

        .luxury-container{

          grid-template-columns:1fr;

        }

        .luxury-image{

          order:-1;

        }

        .luxury-title{

          font-size:3rem;

        }

      }

      @media(max-width:768px){

        .luxury{

          padding:90px 6%;

        }

        .luxury-title{

          font-size:2.4rem;

        }

        .luxury-image img{

          height:420px;

        }

        .feature{

          flex-direction:column;

        }

      }

      `}</style>

      <section className="luxury">

        <div className="luxury-container">

          <motion.div
            initial={{opacity:0,x:-60}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:.8}}
            viewport={{once:true}}
            className="luxury-image"
          >

            <img
              src="/images/luxury.jpg"
              alt="Maison Allys"
            />

          </motion.div>

          <motion.div
            initial={{opacity:0,x:60}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:.8}}
            viewport={{once:true}}
          >

            <p className="luxury-subtitle">

              L'expérience Maison Allys

            </p>

            <h2 className="luxury-title">

              Plus qu'un service,
              une véritable tranquillité d'esprit.

            </h2>

            <p className="luxury-description">

              Maison Allys vous accompagne dans tous les
              moments de votre quotidien. Grâce à un réseau
              de partenaires de confiance et une équipe
              réactive, nous répondons à chacune de vos
              demandes avec une exigence constante.

            </p>

            {features.map((item,index)=>(

              <div className="feature" key={index}>

                <div className="feature-icon">

                  {item.icon}

                </div>

                <div>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>

                </div>

              </div>

            ))}

          </motion.div>

        </div>

      </section>

    </>
  );
}