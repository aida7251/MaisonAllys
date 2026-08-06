import { motion } from "framer-motion";
import {
  UserRound,
  Ear,
  Sparkles,
  Clock3,
} from "lucide-react";

const stats = [
  {
    icon: UserRound,
    value: "Un interlocuteur dédié",
    label: "Un suivi humain tout au long de votre projet.",
  },
  {
    icon: Ear,
    value: "Une écoute attentive",
    label: "Des propositions fondées sur vos véritables attentes.",
  },
  {
    icon: Sparkles,
    value: "Un service sur mesure",
    label: "Un accompagnement adapté à vos besoins et à votre budget.",
  },
  {
    icon: Clock3,
    value: "Un véritable gain de temps",
    label: "Les recherches et l'organisation sont prises en charge pour vous.",
  },
];

export default function ExperienceSection() {

  return (
    <>
      <style>{`

      @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');

      .experience{

        padding:140px 0;

        background:white;

      }

      .experience-container{

        width:92%;

        max-width:1350px;

        margin:auto;

        display:grid;

        grid-template-columns:1.05fr .95fr;

        gap:80px;

        align-items:center;

      }

      .experience-image{

        position:relative;

      }

      .experience-image img{

        width:100%;

        height:760px;

        object-fit:cover;

        border-radius:36px;

        box-shadow:0 35px 80px rgba(0,0,0,.15);

        transition:.6s;

      }

      .experience-image:hover img{

        transform:scale(1.03);

      }

      .floating{

        position:absolute;

        bottom:40px;

        right:-35px;

        width:290px;

        background:white;

        padding:28px;

        border-radius:26px;

        box-shadow:0 25px 60px rgba(0,0,0,.12);

      }

      .floating h3{

        font-family:'Cormorant Garamond',serif;

        color:#4B3222;

        font-size:2rem;

        margin-bottom:12px;

      }

      .floating p{

        color:#6D5A4D;

        line-height:1.8;

      }

      .experience-content{

        max-width:600px;

      }

      .experience-badge{

        display:inline-flex;

        padding:10px 22px;

        border-radius:999px;

        background:rgba(183,92,59,.08);

        color:#B75C3B;

        font-size:.85rem;

        text-transform:uppercase;

        font-weight:600;

        letter-spacing:1px;

        margin-bottom:24px;

      }

      .experience-title{

        font-family:'Cormorant Garamond',serif;

        font-size:3.8rem;

        line-height:1.1;

        color:#4B3222;

        margin-bottom:28px;

      }

      .experience-text{

        color:#6D5A4D;

        line-height:2;

        font-size:1.05rem;

        margin-bottom:40px;

      }

      .stats{

        display:grid;

        grid-template-columns:repeat(2,1fr);

        gap:20px;

      }

      .stat{

        background:#FDFBF8;

        padding:30px;

        border-radius:24px;

        border:1px solid rgba(183,92,59,.08);

        transition:.35s;

      }

      .stat:hover{

        transform:translateY(-8px);

        border-color:#B75C3B;

      }

      .stat-icon{

        width:60px;

        height:60px;

        display:flex;

        align-items:center;

        justify-content:center;

        border-radius:18px;

        background:rgba(183,92,59,.08);

        color:#B75C3B;

        margin-bottom:18px;

      }

      .stat h4{

        font-family:'Cormorant Garamond',serif;

        font-size:1.55rem;

        color:#4B3222;

        line-height:1.35;

        margin-bottom:10px;

      }

      .stat p{

        color:#6D5A4D;

        line-height:1.8;

      }

      @media(max-width:1100px){

        .experience-container{

          grid-template-columns:1fr;

        }

        .experience-image{

          order:-1;

        }

        .experience-content{

          max-width:100%;

        }

      }

      @media(max-width:768px){

        .experience{

          padding:90px 0;

        }

        .experience-title{

          font-size:2.7rem;

        }

        .experience-image img{

          height:520px;

        }

        .floating{

          position:relative;

          right:auto;

          bottom:auto;

          width:100%;

          margin-top:25px;

        }

        .stats{

          grid-template-columns:1fr;

        }

      }

      `}</style>      <section className="experience">

        <div className="experience-container">

          <motion.div
            className="experience-image"
            initial={{ opacity:0, x:-60 }}
            whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true }}
            transition={{ duration:.8 }}
          >

            <img
              src="/images/experience.jpg"
              alt="L'expérience Maison Allys"
            />

            <div className="floating">

              <h3>

                Chaque projet compte.

              </h3>

              <p>

                Nous prenons soin de vos projets
                avec la même attention que s'ils
                étaient les nôtres.

              </p>

            </div>

          </motion.div>

          <motion.div
            className="experience-content"
            initial={{ opacity:0, x:60 }}
            whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true }}
            transition={{ duration:.8 }}
          >

            <div className="experience-badge">

              ✦ L'expérience Maison Allys

            </div>

            <h2 className="experience-title">

              Plus qu'un service,
              un accompagnement de confiance.

            </h2>

            <p className="experience-text">

              Chez Maison Allys, nous croyons que le véritable
              gain de temps ne consiste pas seulement à déléguer
              une tâche, mais à pouvoir confier son projet à une
              personne qui l'écoute, le comprend et en prend soin.

            </p>

            <p className="experience-text">

              Notre rôle est de rechercher, comparer, organiser
              et coordonner les différentes étapes, tout en vous
              laissant libre de valider les solutions qui vous
              correspondent.

            </p>

            <div className="stats">

              {stats.map((item) => {

                const Icon = item.icon;

                return (

                  <div
                    key={item.value}
                    className="stat"
                  >

                    <div className="stat-icon">

                      <Icon size={28} />

                    </div>

                    <h4>

                      {item.value}

                    </h4>

                    <p>

                      {item.label}

                    </p>

                  </div>

                );

              })}

            </div>

          </motion.div>

        </div>

      </section>

    </>
  );
}