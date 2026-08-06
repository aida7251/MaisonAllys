import { motion } from "framer-motion";

export default function StorySection() {
  return (
    <>
      <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');

      .story{

        padding:140px 0;

        background:#FBEEDA;

      }

      .story-container{

        width:92%;
        max-width:1350px;
        margin:auto;

        display:grid;
        grid-template-columns:1fr 1fr;
        gap:90px;
        align-items:center;

      }

      .story-image{

        position:relative;

      }

      .story-image img{

        width:100%;
        height:760px;

        object-fit:cover;

        border-radius:34px;

        box-shadow:0 35px 80px rgba(0,0,0,.12);

        transition:.6s;

      }

      .story-image:hover img{

        transform:scale(1.03);

      }

      .story-card{

        position:absolute;

        right:-40px;
        bottom:40px;

        width:280px;

        background:white;

        padding:28px;

        border-radius:26px;

        box-shadow:0 20px 55px rgba(0,0,0,.1);

      }

      .story-card h3{

        font-family:'Cormorant Garamond',serif;

        font-size:2.2rem;

        color:#B75C3B;

        margin-bottom:8px;

      }

      .story-card p{

        color:#6D5A4D;

        line-height:1.7;

      }

      .story-content{

        max-width:560px;

      }

      .story-badge{

        display:inline-flex;

        align-items:center;

        gap:10px;

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

      .story-title{

        font-family:'Cormorant Garamond',serif;

        font-size:3.8rem;

        line-height:1.08;

        color:#4B3222;

        margin-bottom:28px;

      }

      .story-content p{

        color:#6D5A4D;

        line-height:2;

        font-size:1.05rem;

        margin-bottom:22px;

      }

      .story-quote{

        margin-top:40px;

        padding:32px;

        border-left:4px solid #B75C3B;

        background:white;

        border-radius:0 24px 24px 0;

        font-family:'Cormorant Garamond',serif;

        font-size:2rem;

        color:#4B3222;

        line-height:1.5;

        box-shadow:0 18px 45px rgba(0,0,0,.05);

      }

      @media(max-width:1100px){

        .story-container{

          grid-template-columns:1fr;

        }

        .story-content{

          max-width:100%;

        }

        .story-image{

          order:-1;

        }

      }

      @media(max-width:768px){

        .story{

          padding:90px 0;

        }

        .story-title{

          font-size:2.7rem;

        }

        .story-image img{

          height:500px;

        }

        .story-card{

          position:relative;

          right:auto;

          bottom:auto;

          width:100%;

          margin-top:24px;

        }

        .story-quote{

          font-size:1.6rem;

        }

      }

      `}</style>      <section className="story">

        <div className="story-container">

          <motion.div
            className="story-image"
            initial={{ opacity:0, x:-60 }}
            whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true }}
            transition={{ duration:.8 }}
          >

            <img
              src="/images/story.jpg"
              alt="Notre histoire - Maison Allys"
            />

            <div className="story-card">

              <h3>

                Une passion

              </h3>

              <p>

                Une passion personnelle
                devenue un service pensé
                pour accompagner chacun
                de vos projets.

              </p>

            </div>

          </motion.div>

          <motion.div
            className="story-content"
            initial={{ opacity:0, x:60 }}
            whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true }}
            transition={{ duration:.8 }}
          >

            <div className="story-badge">

              ✦ Notre histoire

            </div>

            <h2 className="story-title">

              Une passion personnelle
              devenue Maison Allys.

            </h2>

            <p>

              Maison Allys est avant tout née d'une histoire
              personnelle. Depuis plusieurs années, mes proches
              ont pris l'habitude de me solliciter lorsqu'ils
              recherchent un restaurant, un lieu pour célébrer
              un anniversaire, un prestataire de confiance,
              une idée de cadeau, une activité à partager
              ou encore un programme de voyage.

            </p>

            <p>

              J'ai toujours aimé chercher, comparer, organiser
              et imaginer des expériences adaptées à chaque
              personne. Ce qui pouvait sembler anodin est
              progressivement devenu une véritable passion :
              trouver les bonnes solutions, faire gagner du
              temps aux autres et voir leurs projets prendre
              vie dans les meilleures conditions.

            </p>

            <p>

              En parallèle, j'ai constaté que nos quotidiens
              sont de plus en plus chargés. Entre les obligations
              professionnelles, la vie familiale et les imprévus,
              il devient parfois difficile de consacrer plusieurs
              heures à l'organisation d'un événement, à la
              préparation d'un voyage ou à la recherche du bon
              prestataire.

            </p>

            <p>

              C'est de cette double réalité qu'est née
              Maison Allys : la volonté de transformer
              une passion personnelle en un service
              professionnel, tout en conservant les
              valeurs qui l'ont toujours guidée.

            </p>

            <p>

              Maison Allys est pensée comme une maison
              où chaque client est accueilli avec la même
              attention, la même bienveillance et la même
              implication qu'un membre de notre propre
              entourage. Une maison de services lifestyle
              où chacun peut se sentir écouté, compris
              et accompagné à chaque étape de son projet.

            </p>

            <div className="story-quote">

              « Prendre soin de vos projets
              comme s'ils étaient les nôtres. »

            </div>

          </motion.div>

        </div>

      </section>

    </>
  );
}