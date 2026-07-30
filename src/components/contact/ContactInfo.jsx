import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Globe,
  Clock3,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const infos = [
  {
    icon: Mail,
    title: "Email",
    value: "contact@maisonallys.com",
    description: "Nous répondons à toutes vos demandes sous 24 heures."
  },
  {
    icon: Phone,
    title: "Téléphone",
    value: "+33 6 XX XX XX XX",
    description: "Un conseiller peut vous rappeler sur demande."
  },
  {
    icon: Globe,
    title: "Zone d'intervention",
    value: "France & International",
    description: "Nous accompagnons une clientèle locale et internationale."
  },
  {
    icon: Clock3,
    title: "Disponibilité",
    value: "7j/7",
    description: "Notre équipe reste disponible selon vos besoins."
  }
];

export default function ContactInfo() {

  return (
    <>
      <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');

      .contact-info{

        display:flex;

        flex-direction:column;

        gap:28px;

      }

      .contact-card{

        background:white;

        border-radius:30px;

        padding:40px;

        box-shadow:0 20px 45px rgba(0,0,0,.05);

        border:1px solid rgba(183,92,59,.08);

      }

      .contact-card h2{

        font-family:'Cormorant Garamond',serif;

        font-size:2.8rem;

        color:#4B3222;

        margin-bottom:18px;

      }

      .contact-card p{

        color:#6D5A4D;

        line-height:1.9;

      }

      .info-list{

        display:flex;

        flex-direction:column;

        gap:22px;

        margin-top:35px;

      }

      .info-item{

        display:flex;

        gap:18px;

      }

      .info-icon{

        width:62px;

        height:62px;

        border-radius:18px;

        display:flex;

        align-items:center;

        justify-content:center;

        background:rgba(183,92,59,.08);

        color:#B75C3B;

        flex-shrink:0;

      }

      .info-text h3{

        font-size:1rem;

        margin-bottom:5px;

        color:#6D5A4D;

      }

      .info-text strong{

        display:block;

        color:#4B3222;

        font-size:1.1rem;

        margin-bottom:5px;

      }

      .info-text span{

        color:#7B6A5E;

        font-size:.95rem;

        line-height:1.7;

      }

      .premium-box{

        background:linear-gradient(135deg,#4B3222,#6B4632);

        color:white;

        border-radius:30px;

        padding:38px;

        position:relative;

        overflow:hidden;

      }

      .premium-box::before{

        content:"";

        position:absolute;

        width:240px;

        height:240px;

        border-radius:50%;

        right:-100px;

        top:-100px;

        background:rgba(255,255,255,.05);

      }

      .premium-box h3{

        position:relative;

        font-family:'Cormorant Garamond',serif;

        font-size:2.3rem;

        margin-bottom:18px;

      }

      .premium-list{

        position:relative;

        display:flex;

        flex-direction:column;

        gap:18px;

      }

      .premium-item{

        display:flex;

        align-items:flex-start;

        gap:14px;

      }

      .premium-item svg{

        color:#D7B58A;

        flex-shrink:0;

        margin-top:3px;

      }

      .premium-item span{

        color:rgba(255,255,255,.9);

        line-height:1.8;

      }

      @media(max-width:900px){

        .contact-card{

          padding:30px;

        }

      }

      `}</style>

      <div className="contact-info">

        <motion.div
          className="contact-card"
          initial={{opacity:0,x:-40}}
          whileInView={{opacity:1,x:0}}
          viewport={{once:true}}
          transition={{duration:.7}}
        >

          <h2>

            Restons en contact.

          </h2>

          <p>

            Que vous souhaitiez organiser un voyage, bénéficier
            d'un accompagnement lifestyle ou obtenir un devis
            personnalisé, notre équipe est à votre écoute.

          </p>

          <div className="info-list">

            {infos.map((item)=>{

              const Icon=item.icon;

              return(

                <div
                  key={item.title}
                  className="info-item"
                >

                  <div className="info-icon">

                    <Icon size={28}/>

                  </div>

                  <div className="info-text">

                    <h3>

                      {item.title}

                    </h3>

                    <strong>

                      {item.value}

                    </strong>

                    <span>

                      {item.description}

                    </span>

                  </div>

                </div>

              );

            })}

          </div>

        </motion.div>

        <motion.div
          className="premium-box"
          initial={{opacity:0,x:-40}}
          whileInView={{opacity:1,x:0}}
          viewport={{once:true}}
          transition={{duration:.8,delay:.15}}
        >

          <h3>

            Pourquoi Maison Allys ?

          </h3>

          <div className="premium-list">

            <div className="premium-item">

              <ShieldCheck size={22}/>

              <span>

                Confidentialité totale de chacune de vos demandes.

              </span>

            </div>

            <div className="premium-item">

              <Sparkles size={22}/>

              <span>

                Des prestations entièrement personnalisées selon vos besoins.

              </span>

            </div>

            <div className="premium-item">

              <ShieldCheck size={22}/>

              <span>

                Un interlocuteur unique tout au long de votre accompagnement.

              </span>

            </div>

            <div className="premium-item">

              <Sparkles size={22}/>

              <span>

                Un réseau de partenaires sélectionnés pour leur excellence.

              </span>

            </div>

          </div>

        </motion.div>

      </div>

    </>
  );
}