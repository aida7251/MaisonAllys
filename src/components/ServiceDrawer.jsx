import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
    X,
    CheckCircle,
    ArrowRight,
    Phone
} from "lucide-react";

export default function ServiceDrawer({

    service,
    onClose

}) {

    useEffect(() => {

        if (service) {

            document.body.style.overflow = "hidden";

        } else {

            document.body.style.overflow = "auto";

        }

        return () => {

            document.body.style.overflow = "auto";

        };

    }, [service]);

    useEffect(() => {

        const handleEscape = (e) => {

            if (e.key === "Escape") {

                onClose();

            }

        };

        window.addEventListener("keydown", handleEscape);

        return () => {

            window.removeEventListener("keydown", handleEscape);

        };

    }, [onClose]);

    return (

        <>

<style>{`

.drawer-overlay{

position:fixed;

inset:0;

background:rgba(0,0,0,.45);

backdrop-filter:blur(8px);

z-index:999;

}

.drawer{

position:fixed;

top:0;

right:0;

width:580px;

max-width:100%;

height:100vh;

background:white;

overflow-y:auto;

box-shadow:-30px 0 80px rgba(0,0,0,.18);

z-index:1000;

display:flex;

flex-direction:column;

}

.drawer::-webkit-scrollbar{

width:8px;

}

.drawer::-webkit-scrollbar-thumb{

background:#C8B4A0;

border-radius:20px;

}

.drawer-image{

height:320px;

position:relative;

overflow:hidden;

}

.drawer-image img{

width:100%;

height:100%;

object-fit:cover;

transition:.8s;

}

.drawer:hover .drawer-image img{

transform:scale(1.05);

}

.close-btn{

position:absolute;

top:25px;

right:25px;

width:52px;

height:52px;

border-radius:50%;

background:rgba(255,255,255,.95);

display:flex;

justify-content:center;

align-items:center;

cursor:pointer;

transition:.35s;

box-shadow:0 10px 25px rgba(0,0,0,.15);

}

.close-btn:hover{

transform:rotate(90deg);

background:white;

}

.drawer-content{

padding:45px;

}

.drawer-category{

display:inline-block;

padding:8px 18px;

border-radius:40px;

background:#FBEEDA;

color:#B75C3B;

font-size:.8rem;

font-weight:700;

letter-spacing:1px;

text-transform:uppercase;

margin-bottom:22px;

}

.drawer-title{

font-family:"Cormorant Garamond",serif;

font-size:3rem;

line-height:1.1;

color:#4B3222;

margin-bottom:22px;

}

.drawer-description{

font-size:1.05rem;

line-height:1.9;

color:#6F6258;

margin-bottom:40px;

}

.section-title{

font-size:1.25rem;

font-weight:700;

color:#4B3222;

margin-bottom:20px;

}

.drawer-list{

display:flex;

flex-direction:column;

gap:16px;

margin-bottom:45px;

}

.drawer-item{

display:flex;

align-items:center;

gap:12px;

color:#5E544C;

line-height:1.6;

}

.drawer-item svg{

color:#B75C3B;

flex-shrink:0;

}

.drawer-buttons{

display:flex;

flex-direction:column;

gap:18px;

margin-top:50px;

}

.btn-primary{

display:flex;

justify-content:center;

align-items:center;

gap:12px;

padding:18px;

background:#B75C3B;

color:white;

border-radius:50px;

font-weight:600;

transition:.35s;

}

.btn-primary:hover{

background:#9D472C;

transform:translateY(-3px);

}

.btn-secondary{

display:flex;

justify-content:center;

align-items:center;

gap:12px;

padding:18px;

border-radius:50px;

border:1px solid #B75C3B;

color:#B75C3B;

transition:.35s;

}

.btn-secondary:hover{

background:#B75C3B;

color:white;

}

@media(max-width:768px){

.drawer{

width:100%;

}

.drawer-image{

height:240px;

}

.drawer-content{

padding:30px;

}

.drawer-title{

font-size:2.3rem;

}

}

`}</style>

<AnimatePresence>

{

service && (

<><motion.div
    className="drawer-overlay"
    onClick={onClose}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
/>

<motion.div
    className="drawer"
    onClick={(e) => e.stopPropagation()}
    initial={{ x: "100%" }}
    animate={{ x: 0 }}
    exit={{ x: "100%" }}
    transition={{
        type: "spring",
        stiffness: 180,
        damping: 22
    }}
>

    <div className="drawer-image">

        <img
            src={service.image}
            alt={service.title}
        />

        <div
            className="close-btn"
            onClick={onClose}
        >
            <X size={22} />
        </div>

    </div>

    <div className="drawer-content">

        <div className="drawer-category">
            {service.category}
        </div>

        <h2 className="drawer-title">
            {service.title}
        </h2>

        <p className="drawer-description">
            {service.description}
            <br /><br />
            Chaque prestation est organisée avec une attention particulière portée aux détails,
            afin de vous offrir une expérience fluide, discrète et entièrement personnalisée.
        </p>

        <h3 className="section-title">
            Ce service comprend
        </h3>

        <div className="drawer-list">

            {service.features.map((item, index) => (

                <div
                    className="drawer-item"
                    key={index}
                >

                    <CheckCircle size={18} />

                    <span>{item}</span>

                </div>

            ))}

        </div>

        <h3 className="section-title">
            Pourquoi choisir Maison Allys ?
        </h3>

        <div className="drawer-list">

            <div className="drawer-item">
                <CheckCircle size={18} />
                <span>Un accompagnement entièrement personnalisé.</span>
            </div>

            <div className="drawer-item">
                <CheckCircle size={18} />
                <span>Un interlocuteur unique tout au long de votre projet.</span>
            </div>

            <div className="drawer-item">
                <CheckCircle size={18} />
                <span>Des partenaires sélectionnés avec exigence.</span>
            </div>

            <div className="drawer-item">
                <CheckCircle size={18} />
                <span>Disponibilité, discrétion et réactivité.</span>
            </div>

        </div>

        <div className="drawer-buttons">

            <a
                href="/contact"
                className="btn-primary"
            >

                Demander ce service

                <ArrowRight size={18} />

            </a>

            <a
                href="https://wa.me/221770000000"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
            >

                <Phone size={18} />

                Être rappelé

            </a>

        </div>

    </div>

</motion.div>

</>

)

}

</AnimatePresence>

</>

);

}