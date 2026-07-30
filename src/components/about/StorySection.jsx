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

      `}</style>

      <section className="story">

        <div className="story-container">

          <motion.div
            className="story-image"
            initial={{opacity:0,x:-60}}
            whileInView={{opacity:1,x:0}}
            viewport={{once:true}}
            transition={{duration:.8}}
          >

            <img
              src="/images/story.jpg"
              alt="Maison Allys"
            />

            <div className="story-card">

              <h3>

                L'excellence

              </h3>

              <p>

                Chaque détail compte.
                Chaque expérience est pensée
                avec soin afin d'offrir un service
                d'exception.

              </p>

            </div>

          </motion.div>

          <motion.div
            className="story-content"
            initial={{opacity:0,x:60}}
            whileInView={{opacity:1,x:0}}
            viewport={{once:true}}
            transition={{duration:.8}}
          >

            <div className="story-badge">

              ✦ Notre histoire

            </div>

            <h2 className="story-title">

              Une maison née
              du sens du détail.

            </h2>

            <p>

              Maison Allys est née d'une conviction :
              le temps est devenu notre bien le plus précieux.
              Notre ambition est d'offrir une conciergerie où
              chaque demande est prise en charge avec élégance,
              discrétion et exigence.

            </p>

            <p>

              Nous croyons qu'un service d'exception ne se
              limite pas à répondre à une demande.
              Il consiste à anticiper, comprendre et créer des
              expériences qui dépassent naturellement les attentes.

            </p>

            <p>

              Voyage, gastronomie, bien-être, événements ou
              demandes plus confidentielles...
              Notre rôle est de transformer chaque besoin
              en une expérience fluide, raffinée et entièrement
              personnalisée.

            </p>

            <div className="story-quote">

              « Le véritable luxe n'est pas d'avoir plus,
              mais de n'avoir à se soucier de rien. »

            </div>

          </motion.div>

        </div>

      </section>

    </>
  );
}