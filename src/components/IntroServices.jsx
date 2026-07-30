import { motion } from "framer-motion";

export default function IntroServices() {

  return (

    <>

      <style>{`

      .intro-services{

        padding:90px 7%;
        background:white;

      }

      .intro-container{

        max-width:950px;
        margin:auto;
        text-align:center;

      }

      .intro-badge{

        display:inline-block;
        padding:10px 22px;
        border-radius:50px;
        background:#FBEEDA;
        color:#B75C3B;
        font-size:.85rem;
        font-weight:600;
        letter-spacing:2px;
        text-transform:uppercase;
        margin-bottom:25px;

      }

      .intro-title{

        font-family:"Cormorant Garamond",serif;
        font-size:3.4rem;
        color:#4B3222;
        line-height:1.2;
        margin-bottom:25px;

      }

      .intro-text{

        font-size:1.1rem;
        color:#6F6258;
        line-height:1.9;

      }

      @media(max-width:768px){

        .intro-services{

          padding:70px 6%;

        }

        .intro-title{

          font-size:2.4rem;

        }

        .intro-text{

          font-size:1rem;

        }

      }

      `}</style>

      <section className="intro-services">

        <motion.div

          className="intro-container"

          initial={{opacity:0,y:40}}

          whileInView={{opacity:1,y:0}}

          transition={{duration:.7}}

          viewport={{once:true}}

        >

          <div className="intro-badge">

            Nos univers

          </div>

          <h2 className="intro-title">

            Un accompagnement pensé pour chacun de vos besoins.

          </h2>

          <p className="intro-text">

            Que vous souhaitiez organiser un voyage, réserver une table,
            préparer un événement ou simplement déléguer une tâche du
            quotidien, Maison Allys met à votre disposition un service
            personnalisé, discret et exigeant. Sélectionnez le service
            qui correspond à votre besoin et découvrez comment nous
            pouvons vous accompagner.

          </p>

        </motion.div>

      </section>

    </>

  );

}