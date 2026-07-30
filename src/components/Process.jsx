import { motion } from "framer-motion";
import {
  MessageCircle,
  Search,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export default function Process() {
  const steps = [
    {
      icon: <MessageCircle size={34} />,
      number: "01",
      title: "Vous nous contactez",
      text: "Partagez votre besoin en quelques instants via notre formulaire, WhatsApp ou téléphone.",
    },
    {
      icon: <Search size={34} />,
      number: "02",
      title: "Nous recherchons",
      text: "Nous sélectionnons les meilleures solutions et mobilisons notre réseau de partenaires.",
    },
    {
      icon: <CheckCircle2 size={34} />,
      number: "03",
      title: "Nous organisons",
      text: "Chaque détail est planifié avec soin pour garantir une expérience fluide et sans contrainte.",
    },
    {
      icon: <Sparkles size={34} />,
      number: "04",
      title: "Vous profitez",
      text: "Il ne vous reste plus qu'à vivre pleinement votre expérience, en toute sérénité.",
    },
  ];

  return (
    <>
      <style>{`

      .process{

        padding:140px 7%;
        background:white;

      }

      .process-header{

        max-width:760px;
        margin:auto;
        text-align:center;
        margin-bottom:90px;

      }

      .process-subtitle{

        color:#B75C3B;
        letter-spacing:4px;
        text-transform:uppercase;
        font-weight:600;
        margin-bottom:20px;

      }

      .process-title{

        font-family:'Cormorant Garamond',serif;
        font-size:4rem;
        color:#4B3222;
        margin-bottom:25px;

      }

      .process-description{

        color:#6F6258;
        line-height:1.9;

      }

      .timeline{

        max-width:1250px;
        margin:auto;

        position:relative;

      }

      .timeline::before{

        content:"";

        position:absolute;

        left:50%;
        top:0;
        bottom:0;

        width:2px;

        background:#E1CBB2;

        transform:translateX(-50%);

      }

      .step{

        display:flex;
        justify-content:space-between;
        align-items:center;
        margin-bottom:90px;

      }

      .step:nth-child(even){

        flex-direction:row-reverse;

      }

      .step-content{

        width:44%;

        background:#FBEEDA;

        padding:35px;

        border-radius:25px;

        box-shadow:0 15px 45px rgba(0,0,0,.07);

      }

      .step-icon{

        width:70px;
        height:70px;

        border-radius:50%;

        background:#B75C3B;
        color:white;

        display:flex;
        justify-content:center;
        align-items:center;

        margin-bottom:20px;

      }

      .step-number{

        color:#B75C3B;
        font-size:.9rem;
        font-weight:700;
        letter-spacing:3px;

        margin-bottom:10px;

      }

      .step-title{

        font-size:1.5rem;
        color:#4B3222;
        margin-bottom:15px;

      }

      .step-text{

        color:#6F6258;
        line-height:1.8;

      }

      .dot{

        width:24px;
        height:24px;

        background:#B75C3B;

        border:6px solid white;

        border-radius:50%;

        box-shadow:0 0 0 6px #FBEEDA;

        z-index:5;

      }

      @media(max-width:900px){

        .timeline::before{

          left:18px;

        }

        .step,
        .step:nth-child(even){

          flex-direction:column;
          align-items:flex-start;

          padding-left:55px;

        }

        .step-content{

          width:100%;

        }

        .dot{

          position:absolute;
          left:6px;

        }

      }

      @media(max-width:700px){

        .process{

          padding:90px 6%;

        }

        .process-title{

          font-size:2.6rem;

        }

      }

      `}</style>

      <section className="process" id="process">

        <div className="process-header">

          <p className="process-subtitle">

            Comment ça marche

          </p>

          <h2 className="process-title">

            Une prise en charge simple,
            rapide et personnalisée.

          </h2>

          <p className="process-description">

            Nous avons conçu un accompagnement fluide afin de
            répondre à chacune de vos demandes avec efficacité
            et discrétion.

          </p>

        </div>

        <div className="timeline">

          {steps.map((step,index)=>(

            <motion.div

              key={index}

              className="step"

              initial={{opacity:0,y:60}}

              whileInView={{opacity:1,y:0}}

              transition={{duration:.6,delay:index*.15}}

              viewport={{once:true}}

            >

              <div className="step-content">

                <div className="step-icon">

                  {step.icon}

                </div>

                <p className="step-number">

                  {step.number}

                </p>

                <h3 className="step-title">

                  {step.title}

                </h3>

                <p className="step-text">

                  {step.text}

                </p>

              </div>

              <div className="dot"></div>

              <div style={{width:"44%"}}></div>

            </motion.div>

          ))}

        </div>

      </section>

    </>
  );
}