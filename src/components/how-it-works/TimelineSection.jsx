import { motion } from "framer-motion";
import {
  MessageCircle,
  Search,
  CheckCircle2,
  Handshake
} from "lucide-react";

const timeline = [

  {
    icon: MessageCircle,
    title: "Un premier échange",
    text: "Nous prenons le temps de comprendre votre projet, vos attentes, vos contraintes et votre budget."
  },

  {
    icon: Search,
    title: "Une recherche personnalisée",
    text: "Nous recherchons les solutions et les prestataires les plus adaptés à vos besoins."
  },

  {
    icon: CheckCircle2,
    title: "Des propositions claires",
    text: "Vous recevez des propositions détaillées et restez libre de choisir les solutions qui vous conviennent."
  },

  {
    icon: Handshake,
    title: "Un accompagnement jusqu'au bout",
    text: "Nous assurons le suivi et la coordination de votre projet selon la formule retenue."
  }

];

export default function TimelineSection() {

  return (

    <>

      <style>{`

      @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');

      .timeline{

        padding:140px 0;

        background:white;

      }

      .timeline-container{

        width:92%;

        max-width:1350px;

        margin:auto;

        display:grid;

        grid-template-columns:1fr 1fr;

        gap:90px;

        align-items:center;

      }

      .timeline-image{

        position:relative;

      }

      .timeline-image img{

        width:100%;

        height:760px;

        object-fit:cover;

        border-radius:34px;

        box-shadow:0 35px 80px rgba(0,0,0,.12);

        transition:.6s;

      }

      .timeline-image:hover img{

        transform:scale(1.03);

      }

      .timeline-card{

        position:absolute;

        right:-40px;

        bottom:40px;

        width:280px;

        background:white;

        padding:28px;

        border-radius:26px;

        box-shadow:0 20px 55px rgba(0,0,0,.10);

      }

      .timeline-card h3{

        font-family:'Cormorant Garamond',serif;

        font-size:2rem;

        color:#B75C3B;

        margin-bottom:10px;

      }

      .timeline-card p{

        color:#6D5A4D;

        line-height:1.8;

      }

      .timeline-content{

        max-width:560px;

      }

      .timeline-badge{

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

      .timeline-title{

        font-family:'Cormorant Garamond',serif;

        font-size:3.8rem;

        color:#4B3222;

        line-height:1.1;

        margin-bottom:28px;

      }

      .timeline-description{

        color:#6D5A4D;

        line-height:2;

        margin-bottom:45px;

        font-size:1.05rem;

      }

      .timeline-list{

        display:flex;

        flex-direction:column;

        gap:28px;

      }

      .timeline-item{

        display:flex;

        gap:20px;

        align-items:flex-start;

      }

      .timeline-icon{

        width:65px;

        height:65px;

        border-radius:18px;

        background:rgba(183,92,59,.08);

        color:#B75C3B;

        display:flex;

        justify-content:center;

        align-items:center;

        flex-shrink:0;

      }

      .timeline-item h4{

        color:#4B3222;

        font-size:1.3rem;

        margin-bottom:8px;

      }

      .timeline-item p{

        color:#6D5A4D;

        line-height:1.8;

      }
              @media(max-width:1100px){

        .timeline-container{

          grid-template-columns:1fr;

        }

        .timeline-content{

          max-width:100%;

        }

        .timeline-image{

          order:-1;

        }

      }

      @media(max-width:768px){

        .timeline{

          padding:90px 0;

        }

        .timeline-title{

          font-size:2.7rem;

        }

        .timeline-image img{

          height:500px;

        }

        .timeline-card{

          position:relative;

          right:auto;

          bottom:auto;

          width:100%;

          margin-top:24px;

        }

      }

      `}</style>

      <section className="timeline">

        <div className="timeline-container">

          <motion.div
            className="timeline-image"
            initial={{opacity:0,x:-60}}
            whileInView={{opacity:1,x:0}}
            viewport={{once:true}}
            transition={{duration:.8}}
          >

            <img
              src="/images/timeline.jpg"
              alt="Accompagnement Maison Allys"
            />

            <div className="timeline-card">

              <h3>

                Un accompagnement humain

              </h3>

              <p>

                Nous avançons à vos côtés à chaque étape afin
                de vous proposer des solutions adaptées à vos
                attentes et à votre budget.

              </p>

            </div>

          </motion.div>

          <motion.div
            className="timeline-content"
            initial={{opacity:0,x:60}}
            whileInView={{opacity:1,x:0}}
            viewport={{once:true}}
            transition={{duration:.8}}
          >

            <div className="timeline-badge">

              ✦ Notre accompagnement

            </div>

            <h2 className="timeline-title">

              Un projet mené
              en toute simplicité.

            </h2>

            <p className="timeline-description">

              Chez Maison Allys, chaque projet commence par
              une écoute attentive. Nous recherchons ensuite
              les solutions les plus adaptées, vous les
              présentons en toute transparence puis vous
              accompagnons jusqu'à la concrétisation de votre
              projet.

            </p>

            <div className="timeline-list">

              {timeline.map((item,index)=>{

                const Icon=item.icon;

                return(

                  <motion.div

                    key={item.title}

                    className="timeline-item"

                    initial={{opacity:0,y:30}}

                    whileInView={{opacity:1,y:0}}

                    viewport={{once:true}}

                    transition={{

                      duration:.5,

                      delay:index*.12

                    }}

                  >

                    <div className="timeline-icon">

                      <Icon size={28}/>

                    </div>

                    <div>

                      <h4>

                        {item.title}

                      </h4>

                      <p>

                        {item.text}

                      </p>

                    </div>

                  </motion.div>

                );

              })}

            </div>

          </motion.div>

        </div>

      </section>

    </>

  );

}