import { motion } from "framer-motion";
import {
  Gem,
  ShieldCheck,
  HeartHandshake,
  Sparkles,
} from "lucide-react";

const values = [
  {
    icon: Gem,
    title: "Excellence",
    description:
      "Nous accordons une attention particulière à chaque détail afin d'offrir un service irréprochable, à la hauteur des attentes les plus exigeantes.",
  },
  {
    icon: ShieldCheck,
    title: "Discrétion",
    description:
      "La confidentialité est au cœur de notre accompagnement. Chaque demande est traitée avec la plus grande réserve et le plus grand professionnalisme.",
  },
  {
    icon: HeartHandshake,
    title: "Confiance",
    description:
      "Nous construisons une relation durable avec nos clients grâce à l'écoute, la transparence et un engagement constant.",
  },
  {
    icon: Sparkles,
    title: "Personnalisation",
    description:
      "Chaque client est unique. Nos prestations sont pensées sur mesure afin de répondre parfaitement à votre mode de vie.",
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

        max-width:760px;

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

        margin-bottom:24px;

      }

      .values-description{

        color:#6D5A4D;

        line-height:1.9;

        font-size:1.08rem;

      }

      .values-grid{

        display:grid;

        grid-template-columns:repeat(2,1fr);

        gap:35px;

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

      }

      `}</style>

      <section className="values">

        <div className="values-container">

          <motion.div
            className="values-header"
            initial={{opacity:0,y:40}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true}}
            transition={{duration:.7}}
          >

            <div className="values-badge">

              ✦ Nos valeurs

            </div>

            <h2 className="values-title">

              Les principes qui
              guident chacune de nos actions.

            </h2>

            <p className="values-description">

              Maison Allys repose sur des valeurs fortes qui inspirent
              chacune de nos décisions et chacune des expériences que
              nous créons pour nos clients.

            </p>

          </motion.div>

          <div className="values-grid">

            {values.map((value,index)=>{

              const Icon=value.icon;

              return(

                <motion.div

                  key={value.title}

                  className="value-card"

                  initial={{opacity:0,y:40}}

                  whileInView={{opacity:1,y:0}}

                  viewport={{once:true}}

                  transition={{
                    duration:.6,
                    delay:index*.15
                  }}

                >

                  <div className="value-icon">

                    <Icon size={34}/>

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

        </div>

      </section>

    </>
  );
}