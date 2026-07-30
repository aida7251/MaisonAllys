import { motion } from "framer-motion";
import {
  Plane,
  UtensilsCrossed,
  CalendarDays,
  HeartHandshake,
  Ticket,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    title: "Voyages",
    description:
      "Organisation complète de vos séjours, réservations, transports et expériences exclusives.",
    icon: <Plane size={32} />,
    image: "/images/services/voyage.jpg",
    link: "/services/voyages",
  },
  {
    title: "Restaurants",
    description:
      "Réservation des meilleures tables et expériences gastronomiques adaptées à vos envies.",
    icon: <UtensilsCrossed size={32} />,
    image: "/images/services/restaurant.jpg",
    link: "/services/restaurants",
  },
  {
    title: "Événements",
    description:
      "Anniversaire, demande en mariage, réception privée ou événement professionnel.",
    icon: <CalendarDays size={32} />,
    image: "/images/services/event.jpg",
    link: "/services/evenements",
  },
  {
    title: "Bien-être",
    description:
      "Spa, massages, coach privé, soins à domicile et expériences dédiées à votre bien-être.",
    icon: <HeartHandshake size={32} />,
    image: "/images/services/bienetre.jpg",
    link: "/services/bienetre",
  },
  {
    title: "Loisirs",
    description:
      "Activités exclusives, sorties, visites, spectacles et expériences sur mesure.",
    icon: <Ticket size={32} />,
    image: "/images/services/loisir.jpg",
    link: "/services/loisirs",
  },
  {
    title: "Demandes personnalisées",
    description:
      "Chaque demande est unique. Nous recherchons et coordonnons la meilleure solution.",
    icon: <Sparkles size={32} />,
    image: "/images/services/custom.jpg",
    link: "/services/demandes-personnalisees",
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
        max-width:750px;
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

        cursor:pointer;

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
        margin-bottom:30px;

      }

      .discover{

        display:inline-flex;
        align-items:center;
        gap:10px;

        color:white;

        font-weight:600;

        transition:.35s;

      }

      .service-card:hover .discover{

        gap:18px;

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

        .service-description{
          font-size:.95rem;
          line-height:1.7;
        }

        .service-icon{
          width:60px;
          height:60px;
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
            <br />
            simplifier votre quotidien
          </h2>

          <p className="services-description">
            Chaque demande est prise en charge avec discrétion,
            exigence et sens du détail. Notre équipe coordonne
            chaque étape afin de vous offrir une expérience fluide
            et entièrement personnalisée.
          </p>

        </div>

        <div className="services-grid">

          {services.map((service, index) => (

            <motion.a
              key={index}
              href={service.link}
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

                <span className="discover">
                  Découvrir
                  <ArrowRight size={18} />
                </span>

              </div>

            </motion.a>

          ))}

        </div>

      </section>

    </>
  );
}
