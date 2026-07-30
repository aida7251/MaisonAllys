import { motion } from "framer-motion";

export default function Presentation() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');

        .presentation{
            padding:120px 8%;
            background:#FBEEDA;
        }

        .presentation-container{
            max-width:1400px;
            margin:auto;

            display:grid;
            grid-template-columns:1fr 1fr;
            gap:80px;
            align-items:center;
        }

        .presentation-image{
            position:relative;
            overflow:hidden;
            border-radius:30px;
            box-shadow:0 20px 60px rgba(0,0,0,.12);
        }

        .presentation-image img{
            width:100%;
            height:650px;
            object-fit:cover;
            transition:.6s;
            display:block;
        }

        .presentation-image:hover img{
            transform:scale(1.05);
        }

        .presentation-content{
            display:flex;
            flex-direction:column;
            justify-content:center;
        }

        .presentation-tag{
            color:#B75C3B;
            text-transform:uppercase;
            letter-spacing:4px;
            font-size:.9rem;
            margin-bottom:15px;
            font-family:Inter,sans-serif;
            font-weight:600;
        }

        .presentation-title{
            font-family:'Cormorant Garamond',serif;
            font-size:4rem;
            line-height:1.1;
            color:#4B3222;
            margin-bottom:30px;
        }

        .presentation-title span{
            color:#B75C3B;
        }

        .presentation-text{
            font-size:1.08rem;
            line-height:2;
            color:#6d584a;
            margin-bottom:20px;
        }

        .presentation-text strong{
            color:#4B3222;
            font-weight:600;
        }

        .presentation-btn{
            width:max-content;
            margin-top:20px;

            background:#B75C3B;
            color:white;

            padding:16px 36px;

            border-radius:50px;

            font-weight:600;

            transition:.35s;
        }

        .presentation-btn:hover{
            background:#9b472b;
            transform:translateY(-3px);
        }

        @media(max-width:1000px){

            .presentation-container{
                grid-template-columns:1fr;
                gap:50px;
            }

            .presentation-image{
                order:-1;
            }

            .presentation-title{
                font-size:3rem;
            }

            .presentation-image img{
                height:450px;
            }

        }

        @media(max-width:700px){

            .presentation{
                padding:90px 6%;
            }

            .presentation-title{
                font-size:2.4rem;
            }

            .presentation-text{
                font-size:1rem;
                line-height:1.8;
            }

            .presentation-image img{
                height:350px;
            }

        }

      `}</style>

      <section className="presentation" id="presentation">

        <div className="presentation-container">

          <motion.div
            className="presentation-image"
            initial={{opacity:0,x:-80}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:0.8}}
            viewport={{once:true}}
          >
            <img
              src="/images/presentation.jpg"
              alt="Maison Allys"
            />
          </motion.div>

          <motion.div
            className="presentation-content"
            initial={{opacity:0,x:80}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:0.8}}
            viewport={{once:true}}
          >

            <p className="presentation-tag">
              À propos
            </p>

            <h2 className="presentation-title">
              Votre <span>Maison de Services Lifestyle</span>
            </h2>

            <p className="presentation-text">
              Chez <strong>Maison Allys</strong>, nous transformons
              vos envies en expériences et vos contraintes en
              solutions. Nous orchestrons chaque demande avec
              élégance, discrétion et un sens du détail qui fait
              toute la différence.
            </p>

            <p className="presentation-text">
              Qu'il s'agisse d'organiser un voyage, de réserver une
              table, de préparer un événement, de trouver un chauffeur
              ou de répondre à une demande plus personnelle,
              nous mettons notre réseau et notre expertise à votre
              service.
            </p>

            <p className="presentation-text">
              Plus qu'une conciergerie, <strong>Maison Allys</strong>
              est un partenaire de confiance qui simplifie votre
              quotidien afin que vous puissiez consacrer votre temps
              à ce qui compte vraiment.
            </p>

            <a href="#services" className="presentation-btn">
              Découvrir nos services
            </a>

          </motion.div>

        </div>

      </section>
    </>
  );
}