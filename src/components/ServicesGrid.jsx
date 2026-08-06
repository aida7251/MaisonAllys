import { motion } from "framer-motion";
import {
  ArrowRight,
  Plane,
  UtensilsCrossed,
  CalendarDays,
  HeartHandshake,
  Ticket,
  Sparkles,
} from "lucide-react";

export default function ServicesGrid({ onSelectService }) {

  const services = [

    {
      id: 1,
      category: "Évasion",
      title: "Voyages sur mesure",
      image: "/images/voyages.jpg",
      icon: <Plane size={22} />,
      description:
        "Nous vous accompagnons dans la préparation de vos séjours privés ou professionnels, en France comme à l'étranger.",

      features: [
        "Transports",
        "Hébergements",
        "Activités et itinéraires",
      ],
    },

    {
      id: 2,
      category: "Gastronomie",
      title: "Restaurants et sorties",
      image: "/images/restaurant.jpg",
      icon: <UtensilsCrossed size={22} />,
      description:
        "Nous recherchons les établissements adaptés à vos envies et vous accompagnons dans l'organisation de vos sorties.",

      features: [
        "Restaurants",
        "Brunchs et salons de thé",
        "Adresses pour vos occasions",
      ],
    },

    {
      id: 3,
      category: "Moments à célébrer",
      title: "Événements",
      image: "/images/evennement.jpg",
      icon: <CalendarDays size={22} />,
      description:
        "Nous vous accompagnons dans l'organisation de vos événements privés ou professionnels, de la recherche des prestataires à la coordination des différentes étapes.",

      features: [
        "Anniversaires",
        "Mariages",
        "Célébrations et surprises",
      ],
    },

    {
      id: 4,
      category: "Parenthèses pour soi",
      title: "Bien-être",
      image: "/images/spa.jpg",
      icon: <HeartHandshake size={22} />,
      description:
        "Nous recherchons et organisons des prestations adaptées pour vous permettre de prendre soin de vous et de profiter d'un véritable moment de détente.",

      features: [
        "Spas et massages",
        "Beauté et soins",
        "Activités sportives et bien-être",
      ],
    },

    {
      id: 5,
      category: "Moments à partager",
      title: "Loisirs et expériences",
      image: "/images/loisirs.jpg",
      icon: <Ticket size={22} />,
      description:
        "Nous imaginons des activités adaptées à vos envies, que vous souhaitiez profiter d'un moment seul, en couple, en famille ou entre amis.",

      features: [
        "Excursions",
        "Activités et loisirs",
        "Expériences personnalisées",
      ],
    },

    {
      id: 6,
      category: "Services du quotidien",
      title: "Demandes personnalisées",
      image: "/images/demande.jpg",
      icon: <Sparkles size={22} />,
      description:
        "Vous avez une demande qui ne correspond à aucune de ces catégories ? Expliquez-nous votre besoin et nous rechercherons la solution la plus adaptée.",

      features: [
        "Recherche de prestataires",
        "Idées cadeaux et surprises",
        "Assistance ponctuelle",
      ],
    },

  ];

  return (

    <>

<style>{`

.services-grid{

    padding:0 7% 120px;

    background:white;

}

.services-container{

    max-width:1450px;

    margin:auto;

}

.services-list{

    display:grid;

    grid-template-columns:repeat(3,1fr);

    gap:35px;

}

.service-card{

    background:white;

    border-radius:30px;

    overflow:hidden;

    box-shadow:0 18px 45px rgba(0,0,0,.07);

    transition:.4s;

    display:flex;

    flex-direction:column;

}

.service-card:hover{

    transform:translateY(-12px);

}

.service-image{

    height:270px;

    overflow:hidden;

}

.service-image img{

    width:100%;

    height:100%;

    object-fit:cover;

    transition:.6s;

}

.service-card:hover img{

    transform:scale(1.08);

}

.service-content{

    padding:35px;

}

.category{

    display:inline-block;

    background:#FBEEDA;

    color:#B75C3B;

    padding:8px 16px;

    border-radius:30px;

    font-size:.8rem;

    font-weight:600;

    margin-bottom:20px;

    text-transform:uppercase;

}

.service-title{

    display:flex;

    align-items:center;

    gap:12px;

    color:#4B3222;

    font-size:1.6rem;

    margin-bottom:18px;

    font-family:"Cormorant Garamond",serif;

}

.service-title svg{

    color:#B75C3B;

}

.service-description{

    color:#6F6258;

    line-height:1.8;

    margin-bottom:25px;

}

.features{

    list-style:none;

    padding:0;

    margin:0 0 30px;

}

.features li{

    display:flex;

    align-items:center;

    gap:12px;

    margin-bottom:14px;

    color:#5F554D;

    font-size:.95rem;

}

.feature-dot{

    width:10px;

    height:10px;

    border-radius:50%;

    background:#B75C3B;

    flex-shrink:0;

}.service-button{

    margin-top:auto;

    display:inline-flex;

    align-items:center;

    gap:12px;

    color:#4B3222;

    font-weight:600;

    cursor:pointer;

    transition:.35s;

}

.service-button svg{

    transition:.35s;

}

.service-button:hover{

    color:#B75C3B;

}

.service-button:hover svg{

    transform:translateX(8px);

}

@media(max-width:1200px){

.services-list{

grid-template-columns:repeat(2,1fr);

}

}

@media(max-width:768px){

.services-grid{

padding:0 6% 80px;

}

.services-list{

grid-template-columns:1fr;

}

.service-image{

height:230px;

}

.service-content{

padding:28px;

}

.service-title{

font-size:1.4rem;

}

}

`}</style>

<section
className="services-grid"
id="services-list"
>

<div className="services-container">

<div className="services-list">

{

services.map((service,index)=>(

<motion.div

key={service.id}

className="service-card"

initial={{opacity:0,y:60}}

whileInView={{opacity:1,y:0}}

transition={{

duration:.6,

delay:index*.12

}}

viewport={{once:true}}

>

<div className="service-image">

<img

src={service.image}

alt={service.title}

/>

</div>

<div className="service-content">

<div className="category">

{service.category}

</div>

<h3 className="service-title">

{service.icon}

{service.title}

</h3>

<p className="service-description">

{service.description}

</p>

<ul className="features">

{

service.features.map((feature,i)=>(

<li key={i}>

<span className="feature-dot"></span>

{feature}

</li>

))

}

</ul>

<div

className="service-button"

onClick={() => onSelectService(service)}

>

Découvrir le service

<ArrowRight size={18}/>

</div>

</div>

</motion.div>

))

}

</div>

</div>

</section>

</>

);

}