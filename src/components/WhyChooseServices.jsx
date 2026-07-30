import { motion } from "framer-motion";
import {
  ShieldCheck,
  ConciergeBell,
  Clock3,
  Gem,
  Sparkles,
  Handshake,
} from "lucide-react";

const advantages = [
  {
    icon: ConciergeBell,
    title: "Concierge dédié",
    description:
      "Un interlocuteur unique qui vous accompagne et anticipe chacun de vos besoins.",
  },
  {
    icon: Clock3,
    title: "Disponibilité 7j/7",
    description:
      "Une assistance réactive, discrète et disponible lorsque vous en avez besoin.",
  },
  {
    icon: Gem,
    title: "Réseau d'exception",
    description:
      "Accédez à une sélection de partenaires haut de gamme et d'expériences exclusives.",
  },
  {
    icon: ShieldCheck,
    title: "Confidentialité",
    description:
      "Vos informations et vos demandes sont traitées avec la plus grande discrétion.",
  },
  {
    icon: Sparkles,
    title: "Service sur mesure",
    description:
      "Chaque prestation est entièrement personnalisée selon votre style de vie.",
  },
  {
    icon: Handshake,
    title: "Excellence",
    description:
      "Chaque détail est pensé afin d'offrir une expérience fluide, élégante et irréprochable.",
  },
];

export default function WhyChooseServices() {
  return (
    <>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');

.why-services{

padding:120px 0;

background:#FBEEDA;

}

.why-container{

width:92%;

max-width:1300px;

margin:auto;

}

.why-header{

text-align:center;

max-width:760px;

margin:0 auto 70px;

}

.why-badge{

display:inline-flex;

align-items:center;

gap:10px;

padding:10px 20px;

border-radius:999px;

background:rgba(183,92,59,.08);

color:#B75C3B;

font-size:.85rem;

font-weight:600;

letter-spacing:1px;

text-transform:uppercase;

margin-bottom:22px;

}

.why-title{

font-family:'Cormorant Garamond',serif;

font-size:3.3rem;

font-weight:700;

line-height:1.1;

color:#4B3222;

margin-bottom:22px;

}

.why-description{

font-size:1.08rem;

line-height:1.8;

color:#6D5A4D;

}

.why-grid{

display:grid;

grid-template-columns:repeat(3,1fr);

gap:30px;

}

.why-card{

background:white;

padding:38px 34px;

border-radius:28px;

border:1px solid rgba(183,92,59,.08);

box-shadow:0 18px 45px rgba(0,0,0,.05);

transition:.35s;

height:100%;

}

.why-card:hover{

transform:translateY(-10px);

border-color:#B75C3B;

box-shadow:0 28px 60px rgba(0,0,0,.08);

}

.why-icon{

width:72px;

height:72px;

border-radius:20px;

display:flex;

align-items:center;

justify-content:center;

background:rgba(183,92,59,.08);

color:#B75C3B;

margin-bottom:28px;

transition:.35s;

}

.why-card:hover .why-icon{

transform:scale(1.08);

background:#B75C3B;

color:white;

}

.why-card h3{

font-family:'Cormorant Garamond',serif;

font-size:2rem;

color:#4B3222;

margin-bottom:16px;

}

.why-card p{

font-size:1rem;

line-height:1.8;

color:#6D5A4D;

}

@media(max-width:992px){

.why-grid{

grid-template-columns:repeat(2,1fr);

}

}

@media(max-width:768px){

.why-services{

padding:90px 0;

}

.why-title{

font-size:2.6rem;

}

.why-grid{

grid-template-columns:1fr;

}

}`}</style>
  <section className="why-services">

        <div className="why-container">

          <motion.div
            className="why-header"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
          >

            <div className="why-badge">
              ✦ Pourquoi Maison Allys
            </div>

            <h2 className="why-title">
              Bien plus qu'une conciergerie,
              <br />
              un partenaire de confiance.
            </h2>

            <p className="why-description">
              Chez Maison Allys, chaque prestation est pensée pour vous offrir
              une expérience fluide, élégante et entièrement personnalisée.
              Nous prenons soin de chaque détail afin que vous puissiez profiter
              pleinement de votre temps.
            </p>

          </motion.div>

          <div className="why-grid">

            {advantages.map((item, index) => {

              const Icon = item.icon;

              return (

                <motion.div
                  key={item.title}
                  className="why-card"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: .55,
                    delay: index * .1
                  }}
                >

                  <div className="why-icon">

                    <Icon size={34} />

                  </div>

                  <h3>

                    {item.title}

                  </h3>

                  <p>

                    {item.description}

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