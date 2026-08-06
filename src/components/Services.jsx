import { motion } from "framer-motion";
import {
  Plane,
  UtensilsCrossed,
  CalendarDays,
  HeartHandshake,
  Search,
  Sparkles,
} from "lucide-react";

const services = [
  {
    title: "Voyages sur mesure",
    description:
      "Nous vous accompagnons dans l’organisation de vos séjours privés ou professionnels, en France comme à l’étranger.",
    icon: <Plane size={32} />,
    image: "/images/voyages.jpg",
  },

  {
    title: "Restaurants et sorties",
    description:
      "Recherche de restaurants, d’activités, de loisirs et d’expériences à vivre seul, en couple, en famille ou entre amis.",
    icon: <UtensilsCrossed size={32} />,
    image: "/images/restaurant.jpg",
  },

  {
    title: "Événements",
    description:
      "Accompagnement dans l’organisation de vos moments importants : anniversaires, surprises, demandes en mariage, célébrations familiales et événements privés.",
    icon: <CalendarDays size={32} />,
    image: "/images/evennement.jpg",
  },

  {
    title: "Recherche de prestataires",
    description:
      "Sélection de professionnels adaptés à votre projet, à votre localisation et à votre budget.",
    icon: <Search size={32} />,
    image: "/images/prestataire.jpg",
  },

  {
    title: "Bien-être et quotidien",
    description:
      "Recherche et organisation de prestations destinées à vous faire gagner du temps ou à vous offrir une parenthèse de bien-être.",
    icon: <HeartHandshake size={32} />,
    image: "/images/spa.jpg",
  },

  {
    title: "Demandes personnalisées",
    description:
      "Vous avez une demande particulière qui ne figure pas dans nos services ? Expliquez-nous votre besoin et nous étudierons la meilleure manière de vous accompagner.",
    icon: <Sparkles size={32} />,
    image: "/images/demande.jpg",
  },
];

export default function Services() {

  return (

    <>

      <style>{`

      .services{

        padding:140px 7%;

        background:white;

      }

      .services-header{

        text-align:center;

        max-width:760px;

        margin:auto auto 80px;

      }

      .services-subtitle{

        color:#B75C3B;

        letter-spacing:4px;

        text-transform:uppercase;

        font-size:.9rem;

        font-weight:600;

        margin-bottom:18px;

      }

      .services-title{

        font-family:'Cormorant Garamond',serif;

        font-size:4rem;

        color:#4B3222;

        margin-bottom:25px;

        line-height:1.15;

      }

      .services-description{

        color:#6F6258;

        line-height:1.9;

        font-size:1.05rem;

      }

      .services-grid{

        max-width:1450px;

        margin:auto;

        display:grid;

        grid-template-columns:repeat(3,1fr);

        gap:35px;

      }

      .service-card{

        position:relative;

        overflow:hidden;

        border-radius:28px;

        height:520px;

        box-shadow:0 25px 60px rgba(0,0,0,.12);

      }

      .service-image{

        position:absolute;

        inset:0;

      }

      .service-image img{

        width:100%;

        height:100%;

        object-fit:cover;

        transition:.8s;

      }

      .service-card:hover img{

        transform:scale(1.08);

      }

      .overlay{

        position:absolute;

        inset:0;

        background:linear-gradient(

          to top,

          rgba(0,0,0,.82),

          rgba(0,0,0,.25),

          rgba(0,0,0,.08)

        );

      }
              .service-content{

        position:absolute;

        left:35px;

        right:35px;

        bottom:35px;

        z-index:2;

        color:white;

      }

      .service-icon{

        width:70px;

        height:70px;

        border-radius:50%;

        background:rgba(255,255,255,.14);

        backdrop-filter:blur(8px);

        display:flex;

        justify-content:center;

        align-items:center;

        margin-bottom:25px;

      }

      .service-title{

        font-family:'Cormorant Garamond',serif;

        font-size:2rem;

        margin-bottom:15px;

      }

      .service-description{

        line-height:1.8;

        opacity:.95;

      }

      .discover-services-btn{

        display:inline-flex;

        justify-content:center;

        align-items:center;

        padding:18px 42px;

        border-radius:999px;

        background:#B75C3B;

        color:white;

        text-decoration:none;

        font-weight:600;

        transition:.35s;

        box-shadow:0 15px 35px rgba(183,92,59,.18);

      }

      .discover-services-btn:hover{

        background:#9D472C;

        transform:translateY(-5px);

      }

      @media(max-width:1200px){

        .services-grid{

          grid-template-columns:repeat(2,1fr);

        }

      }

      @media(max-width:768px){

        .services{

          padding:90px 6%;

        }

        .services-title{

          font-size:2.8rem;

        }

        .services-grid{

          grid-template-columns:1fr;

          gap:25px;

        }

        .service-card{

          height:420px;

        }

        .service-content{

          left:25px;

          right:25px;

          bottom:25px;

        }

      }

      @media(max-width:500px){

        .services-title{

          font-size:2.2rem;

        }

        .services-description{

          font-size:1rem;

        }

        .service-card{

          height:360px;

        }

        .service-title{

          font-size:1.8rem;

        }

      }

      `}</style>

      <section className="services" id="services">

        <div className="services-header">

          <p className="services-subtitle">

            Nos univers

          </p>

          <h2 className="services-title">

            Des services pensés pour

            <br/>

            simplifier votre quotidien

          </h2>

          <p className="services-description">

            Chaque demande est étudiée avec attention afin de vous proposer un accompagnement personnalisé, des solutions adaptées à vos besoins et un véritable gain de temps au quotidien.

          </p>

        </div>

        <div className="services-grid">          {services.map((service, index) => (

            <motion.div

              key={index}

              className="service-card"

              initial={{ opacity: 0, y: 60 }}

              whileInView={{ opacity: 1, y: 0 }}

              transition={{

                duration: 0.6,

                delay: index * 0.1,

              }}

              viewport={{ once: true }}

            >

              <div className="service-image">

                <img

                  src={service.image}

                  alt={service.title}

                />

              </div>

              <div className="overlay"></div>

              <div className="service-content">

                <div className="service-icon">

                  {service.icon}

                </div>

                <h3 className="service-title">

                  {service.title}

                </h3>

                <p className="service-description">

                  {service.description}

                </p>

              </div>

            </motion.div>

          ))}

        </div>

        <div

          style={{

            display:"flex",

            justifyContent:"center",

            marginTop:"70px"

          }}

        >

          <a

            href="/services"

            className="discover-services-btn"

          >

            Découvrir tous nos services

          </a>

        </div>
              </section>

    </>

  );

}