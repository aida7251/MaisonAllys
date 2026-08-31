import {
  Mail,
  Phone,
  MapPin,
  ArrowUp
} from "lucide-react";

import { NavLink } from "react-router-dom";

export default function Footer() {

  const scrollTop = () => {

    window.scrollTo({

      top:0,

      behavior:"smooth"

    });

  };

  return(

    <>

<style>{`

.footer{

background:#2F2118;

color:white;

padding:90px 7% 35px;

}

.footer-container{

max-width:1400px;

margin:auto;

display:grid;

grid-template-columns:2fr 1fr 1fr;

gap:70px;

}

.footer-logo{

width:220px;

margin-bottom:25px;

}

.footer-description{

color:rgba(255,255,255,.75);

line-height:1.9;

max-width:430px;

margin-bottom:30px;

}

.socials{

display:flex;

flex-wrap:wrap;

gap:12px;

}

.social-link{

padding:10px 18px;

border:1px solid rgba(255,255,255,.15);

border-radius:999px;

color:white;

text-decoration:none;

background:rgba(255,255,255,.05);

transition:.35s;

font-size:.9rem;

}

.social-link:hover{

background:#B75C3B;

border-color:#B75C3B;

}

.footer h3{

margin-bottom:24px;

font-size:1.25rem;

}.footer-links{

display:flex;

flex-direction:column;

gap:16px;

}

.footer-links a{

color:rgba(255,255,255,.75);

text-decoration:none;

transition:.3s;

}

.footer-links a:hover{

color:white;

padding-left:6px;

}

.contact-item{

display:flex;

align-items:flex-start;

gap:14px;

margin-bottom:20px;

color:rgba(255,255,255,.75);

}

.contact-item svg{

color:#B75C3B;

flex-shrink:0;

margin-top:3px;

}

.footer-bottom{

margin-top:60px;

padding-top:30px;

border-top:1px solid rgba(255,255,255,.1);

display:flex;

justify-content:space-between;

align-items:center;

}

.footer-bottom p{

color:rgba(255,255,255,.6);

font-size:.95rem;

}

.back-top{

width:52px;

height:52px;

border-radius:50%;

background:#B75C3B;

display:flex;

justify-content:center;

align-items:center;

cursor:pointer;

transition:.35s;

}

.back-top:hover{

transform:translateY(-5px);

background:#C86A45;

}

@media(max-width:950px){

.footer-container{

grid-template-columns:1fr;

gap:50px;

}

}

@media(max-width:768px){

.footer{

padding:70px 6% 30px;

}

.footer-bottom{

flex-direction:column;

gap:20px;

text-align:center;

}

}

`}</style>

<footer className="footer">

<div className="footer-container"><div>

<img
  src="/images/marron.png"
  alt="Maison Allys"
  className="footer-logo"
/>

<p className="footer-description">

Maison Allys vous accompagne dans
l'organisation de vos voyages,
événements, recherches de prestataires
et demandes personnalisées avec une
approche humaine, attentive et sur mesure.

</p>

<div className="socials">

<a
href="https://www.instagram.com/maison_allys?igsi=MWJqYm4zbjFndmNtYg=="
target="_blank"
rel="noopener noreferrer"
className="social-link"
>

Instagram

</a>

{/* <a
href="https://www.facebook.com/maisonallys"
target="_blank"
rel="noopener noreferrer"
className="social-link"
>

Facebook

</a>

<a
href="https://www.tiktok.com/@maisonallys"
target="_blank"
rel="noopener noreferrer"
className="social-link"
>

TikTok

</a> */}

</div>

</div>

<div>

<h3>

Navigation

</h3>

<div className="footer-links">

<NavLink to="/">

Accueil

</NavLink>

<NavLink to="/a-propos">

À propos

</NavLink>

<NavLink to="/services">

Services

</NavLink>

<NavLink to="/comment-ca-marche">

Comment ça marche

</NavLink>

<NavLink to="/contact">

Contact

</NavLink>

</div>

</div>

<div>

<h3>

Contact

</h3>

<div className="contact-item">

<MapPin size={20}/>

<span>

Dakar, Sénégal

</span>

</div>

<div className="contact-item">

<Phone size={20}/>

<span>

+33 07 83 42 09 47

</span>

</div>

<div className="contact-item">

<Mail size={20}/>

<span>

contact@maisonallys.com

</span>

</div>

</div>

</div>

<div className="footer-bottom">

  <p>

    © {new Date().getFullYear()} Maison Allys.
    Tous droits réservés.

  </p>

  <div

    className="back-top"

    onClick={scrollTop}

  >

    <ArrowUp size={22}/>

  </div>

</div>

</footer>

</>

);

}