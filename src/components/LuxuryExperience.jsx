import { motion } from "framer-motion";
import { ShieldCheck, Clock3, Sparkles } from "lucide-react";

export default function LuxuryExperience() {

  const features = [
    {
      icon: <ShieldCheck size={34} />,
      title: "Une écoute attentive",
      text: "Nous prenons le temps de comprendre vos attentes, vos préférences, vos contraintes et votre budget.",
    },
    {
      icon: <Clock3 size={34} />,
      title: "Un véritable gain de temps",
      text: "Nous effectuons les recherches, comparons les solutions et coordonnons les différentes étapes à votre place.",
    },
    {
      icon: <Sparkles size={34} />,
      title: "Un service sur mesure",
      text: "Chaque proposition est construite spécialement pour vous. Vous choisissez librement les solutions qui vous correspondent.",
    },
  ];

  return (
    <>
      <style>{`

      @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');

      .luxury{

        background:#FBEEDA;

        padding:140px 7%;

      }

      .luxury-container{

        max-width:1400px;

        margin:auto;

        display:grid;

        grid-template-columns:1fr 1fr;

        gap:90px;

        align-items:center;

      }

      .luxury-image{

        overflow:hidden;

        border-radius:34px;

        box-shadow:0 30px 80px rgba(0,0,0,.12);

      }

      .luxury-image img{

        width:100%;

        height:760px;

        object-fit:cover;

        display:block;

        transition:.7s;

      }

      .luxury-image:hover img{

        transform:scale(1.05);

      }

      .luxury-subtitle{

        display:inline-block;

        margin-bottom:22px;

        color:#B75C3B;

        text-transform:uppercase;

        letter-spacing:3px;

        font-size:.9rem;

        font-weight:600;

      }

      .luxury-title{

        font-family:'Cormorant Garamond',serif;

        font-size:4rem;

        line-height:1.1;

        color:#4B3222;

        margin-bottom:30px;

      }

      .luxury-description{

        font-family:'Inter',sans-serif;

        color:#6D5A4D;

        font-size:1.08rem;

        line-height:2;

        margin-bottom:50px;

      }

      .feature{

        display:flex;

        gap:24px;

        margin-bottom:35px;

      }

      .feature:last-child{

        margin-bottom:0;

      }

      .feature-icon{

        width:72px;

        height:72px;

        min-width:72px;

        border-radius:50%;

        background:white;

        color:#B75C3B;

        display:flex;

        justify-content:center;

        align-items:center;

        box-shadow:0 12px 35px rgba(0,0,0,.08);

      }

      .feature h3{

        font-size:1.3rem;

        color:#4B3222;

        margin-bottom:10px;

      }

      .feature p{

        color:#6D5A4D;

        line-height:1.9;

      }

      @media(max-width:1100px){

        .luxury-container{

          grid-template-columns:1fr;

          gap:60px;

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

          height:450px;

        }

        .feature{

          flex-direction:column;

        }

      }

      `}</style>      <section className="luxury">

        <div className="luxury-container">

          <motion.div
            className="luxury-image"
            initial={{ opacity:0, x:-60 }}
            whileInView={{ opacity:1, x:0 }}
            transition={{ duration:.8 }}
            viewport={{ once:true }}
          >

            <img
              src="/images/accompagnement.jpg"
              alt="Accompagnement personnalisé Maison Allys"
            />

          </motion.div>

          <motion.div
            initial={{ opacity:0, x:60 }}
            whileInView={{ opacity:1, x:0 }}
            transition={{ duration:.8 }}
            viewport={{ once:true }}
          >

            <p className="luxury-subtitle">

              L'accompagnement Maison Allys

            </p>

            <h2 className="luxury-title">

              Un accompagnement humain,
              attentionné et entièrement personnalisé.

            </h2>

            <p className="luxury-description">

              Maison Allys place l'écoute et la confiance au cœur
              de chaque demande. Vous bénéficiez d'un interlocuteur
              dédié, qui vous accompagne depuis la définition de
              votre besoin jusqu'à la réalisation de votre projet.

            </p>

            {features.map((item, index) => (

              <div
                className="feature"
                key={index}
              >

                <div className="feature-icon">

                  {item.icon}

                </div>

                <div>

                  <h3>

                    {item.title}

                  </h3>

                  <p>

                    {item.text}

                  </p>

                </div>

              </div>

            ))}

          </motion.div>

        </div>

      </section>

    </>
  );
}