// import { motion } from "framer-motion";
// import {
//   MessageCircleMore,
//   ClipboardCheck,
//   Sparkles,
//   CircleCheckBig,
// } from "lucide-react";

// const steps = [
//   {
//     number: "01",
//     icon: MessageCircleMore,
//     title: "Prise de contact",
//     description:
//       "Nous échangeons afin de comprendre vos besoins, vos habitudes et vos attentes pour concevoir un accompagnement entièrement personnalisé.",
//   },
//   {
//     number: "02",
//     icon: ClipboardCheck,
//     title: "Organisation",
//     description:
//       "Votre concierge sélectionne les meilleures solutions et coordonne chaque détail avec notre réseau de partenaires de confiance.",
//   },
//   {
//     number: "03",
//     icon: Sparkles,
//     title: "Exécution",
//     description:
//       "Nous prenons en charge chaque prestation avec exigence, discrétion et réactivité afin de vous offrir une expérience sans effort.",
//   },
//   {
//     number: "04",
//     icon: CircleCheckBig,
//     title: "Suivi personnalisé",
//     description:
//       "Après chaque prestation, nous restons à votre disposition pour ajuster nos services et anticiper vos prochains besoins.",
//   },
// ];

// export default function ProcessServices() {

//   return (

//     <>

//       <style>{`@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');

// .process-services{

// padding:130px 0;

// background:white;

// }

// .process-container{

// width:92%;

// max-width:1200px;

// margin:auto;

// }

// .process-header{

// max-width:760px;

// margin:0 auto 90px;

// text-align:center;

// }

// .process-badge{

// display:inline-flex;

// align-items:center;

// padding:10px 22px;

// border-radius:999px;

// background:rgba(183,92,59,.08);

// color:#B75C3B;

// font-size:.85rem;

// font-weight:600;

// letter-spacing:1px;

// text-transform:uppercase;

// margin-bottom:22px;

// }

// .process-title{

// font-family:'Cormorant Garamond',serif;

// font-size:3.4rem;

// line-height:1.1;

// color:#4B3222;

// margin-bottom:24px;

// }

// .process-description{

// font-size:1.08rem;

// line-height:1.9;

// color:#6D5A4D;

// }

// .timeline{

// position:relative;

// max-width:900px;

// margin:auto;

// padding-left:55px;

// }

// .timeline::before{

// content:"";

// position:absolute;

// left:30px;

// top:0;

// bottom:0;

// width:2px;

// background:linear-gradient(
// 180deg,
// #B75C3B,
// rgba(183,92,59,.15)
// );

// }

// .timeline-item{

// position:relative;

// margin-bottom:60px;

// }

// .timeline-item:last-child{

// margin-bottom:0;

// }

// .timeline-dot{

// position:absolute;

// left:-39px;

// top:35px;

// width:20px;

// height:20px;

// border-radius:50%;

// background:#B75C3B;

// border:6px solid #FBEEDA;

// box-shadow:0 0 0 6px rgba(183,92,59,.15);

// }

// .timeline-card{

// background:#FDFBF8;

// border:1px solid rgba(183,92,59,.08);

// border-radius:28px;

// padding:36px;

// box-shadow:0 20px 45px rgba(0,0,0,.05);

// transition:.35s;

// }

// .timeline-card:hover{

// transform:translateY(-8px);

// border-color:#B75C3B;

// box-shadow:0 30px 60px rgba(0,0,0,.08);

// }

// .step-number{

// font-size:.9rem;

// font-weight:700;

// letter-spacing:2px;

// color:#B75C3B;

// margin-bottom:18px;

// }

// .step-top{

// display:flex;

// align-items:center;

// gap:18px;

// margin-bottom:24px;

// }

// .step-icon{

// width:70px;

// height:70px;

// border-radius:22px;

// display:flex;

// align-items:center;

// justify-content:center;

// background:rgba(183,92,59,.08);

// color:#B75C3B;

// transition:.35s;

// flex-shrink:0;

// }

// .timeline-card:hover .step-icon{

// background:#B75C3B;

// color:white;

// transform:scale(1.08);

// }

// .step-title{

// font-family:'Cormorant Garamond',serif;

// font-size:2rem;

// color:#4B3222;

// }

// .step-description{

// font-size:1rem;

// line-height:1.9;

// color:#6D5A4D;

// }

// @media(max-width:768px){

// .process-services{

// padding:90px 0;

// }

// .process-title{

// font-size:2.6rem;

// }

// .timeline{

// padding-left:25px;

// }

// .timeline::before{

// left:8px;

// }

// .timeline-dot{

// left:-10px;

// }

// .timeline-card{

// padding:28px;

// }

// .step-top{

// flex-direction:column;

// align-items:flex-start;

// }

// }</style>
//       <section className="process-services">

//         <div className="process-container">

//           <motion.div
//             className="process-header"
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: .7 }}
//             viewport={{ once: true }}
//           >

//             <div className="process-badge">

//               ✦ Notre accompagnement

//             </div>

//             <h2 className="process-title">

//               Une expérience fluide,
//               <br />
//               pensée autour de vous.

//             </h2>

//             <p className="process-description">

//               Chaque demande est prise en charge avec la même exigence :
//               comprendre vos attentes, organiser chaque détail avec précision
//               et vous offrir un service irréprochable, du premier échange
//               jusqu'au suivi après la prestation.

//             </p>

//           </motion.div>

//           <div className="timeline">

//             {steps.map((step, index) => {

//               const Icon = step.icon;

//               return (

//                 <motion.div
//                   key={step.number}
//                   className="timeline-item"
//                   initial={{ opacity: 0, x: -40 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{
//                     duration: .6,
//                     delay: index * .15
//                   }}
//                   viewport={{ once: true }}
//                 >

//                   <div className="timeline-dot"></div>

//                   <div className="timeline-card">

//                     <div className="step-number">

//                       ÉTAPE {step.number}

//                     </div>

//                     <div className="step-top">

//                       <div className="step-icon">

//                         <Icon size={34} />

//                       </div>

//                       <h3 className="step-title">

//                         {step.title}

//                       </h3>

//                     </div>

//                     <p className="step-description">

//                       {step.description}

//                     </p>

//                   </div>

//                 </motion.div>

//               );

//             })}

//           </div>

//         </div>

//       </section>

//     </>
//   );

// }