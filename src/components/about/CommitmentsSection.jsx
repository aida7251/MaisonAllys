import { motion } from "framer-motion";
import {
  Ear,
  ShieldCheck,
  SearchCheck,
  UserRound,
} from "lucide-react";

const commitments = [
  {
    icon: Ear,
    title: "Écoute et compréhension",
    description:
      "Nous prenons le temps d'échanger avec vous afin de comprendre votre projet, vos préférences, vos contraintes et vos priorités.",
  },
  {
    icon: ShieldCheck,
    title: "Transparence",
    description:
      "Les prestations, les étapes de l'accompagnement et les conditions tarifaires vous sont présentées clairement avant toute validation.",
  },
  {
    icon: SearchCheck,
    title: "Sélection attentive",
    description:
      "Les solutions et les prestataires proposés sont recherchés et sélectionnés en fonction des besoins propres à votre projet.",
  },
  {
    icon: UserRound,
    title: "Suivi personnalisé",
    description:
      "Vous bénéficiez d'un interlocuteur dédié et d'un accompagnement tout au long de la prestation, selon la formule choisie.",
  },
];

export default function CommitmentsSection() {
  return (
    <>
      <style>{`

      @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');

      .commitments{

        padding:140px 0;

        background:#FBEEDA;

      }

      .commitments-container{

        width:92%;

        max-width:1300px;

        margin:auto;

      }

      .commitments-header{

        text-align:center;

        max-width:820px;

        margin:0 auto 80px;

      }

      .commitments-badge{

        display:inline-flex;

        align-items:center;

        padding:10px 22px;

        border-radius:999px;

        background:rgba(183,92,59,.08);

        color:#B75C3B;

        font-size:.85rem;

        font-weight:600;

        letter-spacing:1px;

        text-transform:uppercase;

        margin-bottom:22px;

      }

      .commitments-title{

        font-family:'Cormorant Garamond',serif;

        font-size:3.8rem;

        color:#4B3222;

        line-height:1.15;

        margin-bottom:28px;

      }

      .commitments-description{

        color:#6D5A4D;

        font-size:1.08rem;

        line-height:2;

      }

      .commitments-grid{

        display:grid;

        grid-template-columns:repeat(2,1fr);

        gap:30px;

        margin-top:70px;

      }

      .commitment-card{

        background:white;

        padding:42px;

        border-radius:28px;

        display:flex;

        gap:24px;

        align-items:flex-start;

        border:1px solid rgba(183,92,59,.08);

        box-shadow:0 18px 45px rgba(0,0,0,.05);

        transition:.35s;

      }

      .commitment-card:hover{

        transform:translateY(-10px);

        border-color:#B75C3B;

      }

      .commitment-icon{

        width:72px;

        height:72px;

        display:flex;

        align-items:center;

        justify-content:center;

        border-radius:20px;

        background:rgba(183,92,59,.08);

        color:#B75C3B;

        flex-shrink:0;

        transition:.35s;

      }

      .commitment-card:hover .commitment-icon{

        background:#B75C3B;

        color:white;

      }

      .commitment-content h3{

        font-family:'Cormorant Garamond',serif;

        font-size:2rem;

        color:#4B3222;

        margin-bottom:14px;

      }

      .commitment-content p{

        color:#6D5A4D;

        line-height:1.9;

      }

      @media(max-width:1000px){

        .commitments-grid{

          grid-template-columns:1fr;

        }

      }

      @media(max-width:768px){

        .commitments{

          padding:90px 0;

        }

        .commitments-title{

          font-size:2.7rem;

        }

        .commitment-card{

          flex-direction:column;

        }

      }

      `}</style>      <section className="commitments">

        <div className="commitments-container">

          <motion.div
            className="commitments-header"
            initial={{ opacity:0, y:40 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration:.7 }}
            viewport={{ once:true }}
          >

            <div className="commitments-badge">

              ✦ Nos engagements

            </div>

            <h2 className="commitments-title">

              Une relation claire
              et attentive à chaque étape.

            </h2>

            <p className="commitments-description">

              Au-delà de nos prestations, Maison Allys
              s'engage à vous offrir un accompagnement
              sérieux, personnalisé et transparent.

            </p>

          </motion.div>

          <div className="commitments-grid">

            {commitments.map((item, index) => {

              const Icon = item.icon;

              return (

                <motion.div

                  key={item.title}

                  className="commitment-card"

                  initial={{ opacity:0, y:40 }}

                  whileInView={{ opacity:1, y:0 }}

                  transition={{
                    duration:.6,
                    delay:index * .12
                  }}

                  viewport={{ once:true }}

                >

                  <div className="commitment-icon">

                    <Icon size={34} />

                  </div>

                  <div className="commitment-content">

                    <h3>

                      {item.title}

                    </h3>

                    <p>

                      {item.description}

                    </p>

                  </div>

                </motion.div>

              );

            })}

          </div>

        </div>

      </section>

    </>
  );
}