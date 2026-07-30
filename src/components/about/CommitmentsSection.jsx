import { motion } from "framer-motion";
import {
  ShieldCheck,
  Clock3,
  HeartHandshake,
  Sparkles,
} from "lucide-react";

const commitments = [
  {
    icon: ShieldCheck,
    title: "Confidentialité absolue",
    description:
      "Chaque échange, chaque demande et chaque information personnelle sont traités avec la plus grande discrétion.",
  },
  {
    icon: Clock3,
    title: "Disponibilité",
    description:
      "Notre équipe reste à votre écoute pour répondre rapidement à vos demandes et vous accompagner avec réactivité.",
  },
  {
    icon: HeartHandshake,
    title: "Relation de confiance",
    description:
      "Nous privilégions une relation durable fondée sur l'écoute, la transparence et un accompagnement personnalisé.",
  },
  {
    icon: Sparkles,
    title: "Excellence au quotidien",
    description:
      "Chaque prestation est réalisée avec le même niveau d'exigence afin d'offrir une expérience irréprochable.",
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

        max-width:760px;

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

        margin-bottom:24px;

      }

      .commitments-description{

        color:#6D5A4D;

        font-size:1.08rem;

        line-height:1.9;

      }

      .commitments-grid{

        display:grid;

        grid-template-columns:repeat(2,1fr);

        gap:30px;

      }

      .commitment-card{

        background:white;

        padding:40px;

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

      `}</style>

      <section className="commitments">

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

              Une promesse de qualité,
              à chaque instant.

            </h2>

            <p className="commitments-description">

              Au-delà des prestations, Maison Allys s'engage à offrir
              une qualité de service constante, fondée sur l'écoute,
              la confiance et l'excellence.

            </p>

          </motion.div>

          <div className="commitments-grid">

            {commitments.map((item,index)=>{

              const Icon=item.icon;

              return(

                <motion.div

                  key={item.title}

                  className="commitment-card"

                  initial={{ opacity:0, y:40 }}

                  whileInView={{ opacity:1, y:0 }}

                  transition={{
                    duration:.6,
                    delay:index*.12
                  }}

                  viewport={{ once:true }}

                >

                  <div className="commitment-icon">

                    <Icon size={34}/>

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