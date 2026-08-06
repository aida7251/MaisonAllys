import { motion } from "framer-motion";
import { Eye, Compass, Gem } from "lucide-react";

const values = [
  {
    icon: Eye,
    title: "Notre vision",
    text: "Devenir une maison de services lifestyle de confiance, reconnue pour la qualité de son accompagnement, sa proximité et sa capacité à simplifier le quotidien de ses clients."
  },
  {
    icon: Compass,
    title: "Notre mission",
    text: "Vous faire gagner un temps précieux en recherchant, organisant et coordonnant les solutions adaptées à vos voyages, événements et demandes personnalisées."
  },
  {
    icon: Gem,
    title: "Notre promesse",
    text: "Prendre soin de chaque projet avec attention et vous accompagner avec clarté, implication et transparence, de la première prise de contact jusqu'à sa réalisation."
  }
];

export default function VisionSection() {

  return (
    <>
      <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');

      .vision{

        padding:140px 0;

        background:white;

      }

      .vision-container{

        width:92%;

        max-width:1300px;

        margin:auto;

      }

      .vision-header{

        max-width:820px;

        margin:0 auto 80px;

        text-align:center;

      }

      .vision-badge{

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

      .vision-title{

        font-family:'Cormorant Garamond',serif;

        font-size:3.8rem;

        line-height:1.15;

        color:#4B3222;

        margin-bottom:28px;

      }

      .vision-description{

        color:#6D5A4D;

        line-height:2;

        font-size:1.08rem;

      }

      .vision-grid{

        display:grid;

        grid-template-columns:repeat(3,1fr);

        gap:30px;

        margin-top:70px;

      }

      .vision-card{

        background:#FDFBF8;

        padding:42px 34px;

        border-radius:28px;

        border:1px solid rgba(183,92,59,.08);

        box-shadow:0 20px 45px rgba(0,0,0,.05);

        transition:.35s;

      }

      .vision-card:hover{

        transform:translateY(-10px);

        border-color:#B75C3B;

      }

      .vision-icon{

        width:74px;

        height:74px;

        display:flex;

        align-items:center;

        justify-content:center;

        border-radius:20px;

        background:rgba(183,92,59,.08);

        color:#B75C3B;

        margin-bottom:28px;

        transition:.35s;

      }

      .vision-card:hover .vision-icon{

        background:#B75C3B;

        color:white;

      }

      .vision-card h3{

        font-family:'Cormorant Garamond',serif;

        font-size:2rem;

        color:#4B3222;

        margin-bottom:18px;

      }

      .vision-card p{

        color:#6D5A4D;

        line-height:1.9;

      }

      @media(max-width:1000px){

        .vision-grid{

          grid-template-columns:1fr;

        }

      }

      @media(max-width:768px){

        .vision{

          padding:90px 0;

        }

        .vision-title{

          font-size:2.7rem;

        }

      }

      `}</style>      <section className="vision">

        <div className="vision-container">

          <motion.div
            className="vision-header"
            initial={{ opacity:0, y:40 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }}
            transition={{ duration:.7 }}
          >

            <div className="vision-badge">

              ✦ Notre philosophie

            </div>

            <h2 className="vision-title">

              Une maison pensée
              pour prendre soin
              de vos projets.

            </h2>

            <p className="vision-description">

              Maison Allys accompagne celles et ceux qui
              souhaitent concrétiser leurs projets plus
              sereinement et consacrer leur temps à ce qui
              compte véritablement.

            </p>

            <p className="vision-description">

              Notre approche repose sur une relation
              humaine, attentive et durable. Chaque
              demande est accueillie avec écoute et
              étudiée avec soin afin de proposer un
              accompagnement adapté à vos envies,
              à vos contraintes et à votre budget.

            </p>

          </motion.div>

          <div className="vision-grid">

            {values.map((item, index) => {

              const Icon = item.icon;

              return (

                <motion.div

                  key={item.title}

                  className="vision-card"

                  initial={{ opacity:0, y:40 }}

                  whileInView={{ opacity:1, y:0 }}

                  viewport={{ once:true }}

                  transition={{
                    duration:.6,
                    delay:index * .15
                  }}

                >

                  <div className="vision-icon">

                    <Icon size={34} />

                  </div>

                  <h3>

                    {item.title}

                  </h3>

                  <p>

                    {item.text}

                  </p>

                </motion.div>

              );

            })}

          </div>

        </div>

      </section>

    </>
  );

}