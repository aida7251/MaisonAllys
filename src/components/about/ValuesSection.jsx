import { motion } from "framer-motion";
import {
  HeartHandshake,
  HandHeart,
  Sparkles,
  BadgeCheck,
} from "lucide-react";

const values = [
  {
    icon: HeartHandshake,
    title: "Confiance",
    description:
      "Nous construisons avec nos clients une relation sincère et durable, fondée sur l'écoute, la transparence et le respect de nos engagements.",
  },
  {
    icon: HandHeart,
    title: "Bienveillance",
    description:
      "Chaque demande est accueillie avec attention et sans jugement. Nous prenons le temps de comprendre ce qui compte réellement pour vous.",
  },
  {
    icon: Sparkles,
    title: "Personnalisation",
    description:
      "Chaque client, chaque envie et chaque budget sont différents. Nos propositions sont donc pensées en fonction de votre situation et de vos priorités.",
  },
  {
    icon: BadgeCheck,
    title: "Qualité",
    description:
      "Nous recherchons avec soin les solutions et les prestataires adaptés à votre projet afin de vous proposer un accompagnement sérieux et cohérent.",
  },
];

export default function ValuesSection() {

  return (
    <>
      <style>{`

      @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');

      .values{

        padding:140px 0;

        background:#FBEEDA;

      }

      .values-container{

        width:92%;

        max-width:1300px;

        margin:auto;

      }

      .values-header{

        text-align:center;

        max-width:820px;

        margin:0 auto 80px;

      }

      .values-badge{

        display:inline-flex;

        align-items:center;

        padding:10px 22px;

        border-radius:999px;

        background:rgba(183,92,59,.08);

        color:#B75C3B;

        text-transform:uppercase;

        font-size:.85rem;

        font-weight:600;

        letter-spacing:1px;

        margin-bottom:22px;

      }

      .values-title{

        font-family:'Cormorant Garamond',serif;

        font-size:3.8rem;

        color:#4B3222;

        line-height:1.15;

        margin-bottom:28px;

      }

      .values-description{

        color:#6D5A4D;

        line-height:2;

        font-size:1.08rem;

      }

      .values-grid{

        display:grid;

        grid-template-columns:repeat(2,1fr);

        gap:35px;

        margin-top:70px;

      }

      .value-card{

        background:white;

        border-radius:30px;

        padding:42px;

        display:flex;

        gap:28px;

        align-items:flex-start;

        border:1px solid rgba(183,92,59,.08);

        box-shadow:0 20px 45px rgba(0,0,0,.05);

        transition:.35s;

      }

      .value-card:hover{

        transform:translateY(-10px);

        border-color:#B75C3B;

      }

      .value-icon{

        width:78px;

        height:78px;

        flex-shrink:0;

        display:flex;

        align-items:center;

        justify-content:center;

        border-radius:22px;

        background:rgba(183,92,59,.08);

        color:#B75C3B;

        transition:.35s;

      }

      .value-card:hover .value-icon{

        background:#B75C3B;

        color:white;

      }

      .value-content h3{

        font-family:'Cormorant Garamond',serif;

        font-size:2rem;

        color:#4B3222;

        margin-bottom:14px;

      }

      .value-content p{

        color:#6D5A4D;

        line-height:1.9;

      }

      .values-footer{

        max-width:900px;

        margin:80px auto 0;

        text-align:center;

        padding:45px;

        background:white;

        border-radius:30px;

        box-shadow:0 20px 45px rgba(0,0,0,.05);

      }

      .values-footer h3{

        font-family:'Cormorant Garamond',serif;

        font-size:2.3rem;

        color:#4B3222;

        margin-bottom:18px;

      }

      .values-footer p{

        color:#6D5A4D;

        font-size:1.1rem;

        line-height:2;

      }

      @media(max-width:1000px){

        .values-grid{

          grid-template-columns:1fr;

        }

      }

      @media(max-width:768px){

        .values{

          padding:90px 0;

        }

        .values-title{

          font-size:2.7rem;

        }

        .value-card{

          flex-direction:column;

          align-items:flex-start;

        }

        .values-footer{

          padding:35px 28px;

        }

      }

      `}</style>      <section className="values">

        <div className="values-container">

          <motion.div
            className="values-header"
            initial={{ opacity:0, y:40 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }}
            transition={{ duration:.7 }}
          >

            <div className="values-badge">

              ✦ Nos valeurs

            </div>

            <h2 className="values-title">

              Les principes qui guident
              chacun de nos accompagnements.

            </h2>

            <p className="values-description">

              Maison Allys s'est construite autour de
              valeurs humaines qui orientent notre manière
              d'écouter, de conseiller et d'accompagner
              chaque client.

            </p>

          </motion.div>

          <div className="values-grid">

            {values.map((value, index) => {

              const Icon = value.icon;

              return (

                <motion.div

                  key={value.title}

                  className="value-card"

                  initial={{ opacity:0, y:40 }}

                  whileInView={{ opacity:1, y:0 }}

                  viewport={{ once:true }}

                  transition={{
                    duration:.6,
                    delay:index * .15
                  }}

                >

                  <div className="value-icon">

                    <Icon size={34} />

                  </div>

                  <div className="value-content">

                    <h3>

                      {value.title}

                    </h3>

                    <p>

                      {value.description}

                    </p>

                  </div>

                </motion.div>

              );

            })}

          </div>

          <motion.div
            className="values-footer"
            initial={{ opacity:0, y:40 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }}
            transition={{ duration:.7, delay:.2 }}
          >

            <h3>

              Maison Allys

            </h3>

            <p>

              <strong>Chaque projet compte.</strong>

              <br /><br />

              Nous prenons soin de vos projets avec la
              même attention que s'ils étaient les nôtres.

            </p>

          </motion.div>

        </div>

      </section>

    </>
  );
}