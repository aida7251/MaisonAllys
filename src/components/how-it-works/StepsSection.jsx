import { motion } from "framer-motion";
import {
  MessageCircle,
  Search,
  ClipboardCheck,
  CheckCircle2,
  Handshake
} from "lucide-react";

const steps = [

  {
    number:"01",
    icon:MessageCircle,
    title:"Vous nous contactez",
    text:"Par téléphone, par e-mail ou via notre formulaire de contact, vous nous présentez votre projet."
  },

  {
    number:"02",
    icon:Search,
    title:"Nous échangeons",
    text:"Nous prenons le temps de comprendre vos besoins, vos envies, vos contraintes et votre budget."
  },

  {
    number:"03",
    icon:ClipboardCheck,
    title:"Nous recherchons",
    text:"Nous recherchons les solutions et les prestataires les plus adaptés à votre projet."
  },

  {
    number:"04",
    icon:CheckCircle2,
    title:"Nous vous présentons les solutions",
    text:"Vous recevez des propositions claires et restez libre de choisir celles qui vous conviennent."
  },

  {
    number:"05",
    icon:Handshake,
    title:"Nous vous accompagnons",
    text:"Une fois votre choix validé, nous assurons le suivi et la coordination selon la formule retenue."
  }

];

export default function StepsSection(){

return(

<>

<style>{`

.steps{

padding:140px 0;

background:#FBEEDA;

}

.steps-container{

width:92%;

max-width:1350px;

margin:auto;

}

.steps-header{

max-width:760px;

margin:auto;

text-align:center;

margin-bottom:90px;

}

.steps-badge{

display:inline-flex;

padding:10px 22px;

border-radius:999px;

background:rgba(183,92,59,.08);

color:#B75C3B;

font-size:.85rem;

font-weight:600;

letter-spacing:1px;

text-transform:uppercase;

margin-bottom:22px;

}

.steps-title{

font-family:'Cormorant Garamond',serif;

font-size:3.8rem;

color:#4B3222;

margin-bottom:25px;

}

.steps-description{

color:#6D5A4D;

font-size:1.08rem;

line-height:1.9;

}

.steps-grid{

display:grid;

grid-template-columns:repeat(5,1fr);

gap:28px;

}

.step{

background:white;

padding:35px;

border-radius:28px;

position:relative;

text-align:center;

box-shadow:0 18px 45px rgba(0,0,0,.05);

transition:.35s;

border:1px solid rgba(183,92,59,.08);

}

.step:hover{

transform:translateY(-10px);

border-color:#B75C3B;

}

.step-number{

font-family:'Cormorant Garamond',serif;

font-size:3rem;

color:#E1CBB2;

margin-bottom:18px;

}

.step-icon{

width:72px;

height:72px;

margin:auto;

display:flex;

align-items:center;

justify-content:center;

border-radius:22px;

background:rgba(183,92,59,.08);

color:#B75C3B;

margin-bottom:24px;

transition:.35s;

}

.step:hover .step-icon{

background:#B75C3B;

color:white;

}

.step h3{

font-family:'Cormorant Garamond',serif;

font-size:1.8rem;

color:#4B3222;

margin-bottom:18px;

}

.step p{

color:#6D5A4D;

line-height:1.8;

font-size:.98rem;

}@media(max-width:1200px){

.steps-grid{

grid-template-columns:repeat(2,1fr);

}

}

@media(max-width:768px){

.steps{

padding:90px 0;

}

.steps-title{

font-size:2.7rem;

}

.steps-grid{

grid-template-columns:1fr;

}

}

`}</style>

<section className="steps">

<div className="steps-container">

<motion.div

className="steps-header"

initial={{opacity:0,y:40}}

whileInView={{opacity:1,y:0}}

transition={{duration:.7}}

viewport={{once:true}}

>

<div className="steps-badge">

✦ Les étapes

</div>

<h2 className="steps-title">

Un accompagnement simple,
clair et personnalisé.

</h2>

<p className="steps-description">

De votre première prise de contact jusqu'à la réalisation
de votre projet, Maison Allys vous accompagne avec écoute,
transparence et implication à chaque étape.

</p>

</motion.div>

<div className="steps-grid">

{steps.map((step,index)=>{

const Icon=step.icon;

return(

<motion.div

key={step.number}

className="step"

initial={{opacity:0,y:50}}

whileInView={{opacity:1,y:0}}

viewport={{once:true}}

transition={{

duration:.6,

delay:index*.12

}}

>

<div className="step-number">

{step.number}

</div>

<div className="step-icon">

<Icon size={34}/>

</div>

<h3>

{step.title}

</h3>

<p>

{step.text}

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