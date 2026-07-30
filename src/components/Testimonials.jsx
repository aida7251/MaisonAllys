import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sophie M.",
      role: "Entrepreneure",
      text: "Maison Allys a transformé mon quotidien. Chaque demande est traitée avec professionnalisme et une attention incroyable aux détails.",
    },
    {
      name: "Marc D.",
      role: "Chef d'entreprise",
      text: "Une équipe réactive, discrète et toujours à l'écoute. Je gagne un temps précieux grâce à leurs services.",
    },
    {
      name: "Aminata F.",
      role: "Consultante",
      text: "Organisation parfaite de mon voyage et de mes réservations. Je recommande Maison Allys sans hésiter.",
    },
  ];

  return (
    <>
      <style>{`

      .testimonials{

        padding:140px 7%;
        background:white;

      }

      .testimonials-header{

        text-align:center;
        max-width:760px;
        margin:auto auto 90px;

      }

      .testimonials-subtitle{

        color:#B75C3B;
        text-transform:uppercase;
        letter-spacing:4px;
        font-weight:600;
        margin-bottom:20px;

      }

      .testimonials-title{

        font-family:'Cormorant Garamond',serif;
        font-size:4rem;
        color:#4B3222;
        margin-bottom:25px;

      }

      .testimonials-description{

        color:#6F6258;
        line-height:1.9;

      }

      .testimonials-grid{

        display:grid;
        grid-template-columns:repeat(3,1fr);
        gap:35px;
        max-width:1400px;
        margin:auto;

      }

      .testimonial-card{

        background:#FBEEDA;

        border-radius:30px;

        padding:40px;

        transition:.35s;

        box-shadow:0 15px 40px rgba(0,0,0,.06);

      }

      .testimonial-card:hover{

        transform:translateY(-10px);

      }

      .stars{

        display:flex;
        gap:5px;
        color:#B75C3B;

        margin-bottom:25px;

      }

      .testimonial-text{

        color:#6F6258;
        line-height:2;
        margin-bottom:35px;
        font-style:italic;

      }

      .testimonial-author{

        border-top:1px solid rgba(0,0,0,.08);
        padding-top:20px;

      }

      .testimonial-author h3{

        color:#4B3222;
        margin-bottom:6px;

      }

      .testimonial-author span{

        color:#8C7A6C;
        font-size:.95rem;

      }

      @media(max-width:1000px){

        .testimonials-grid{

          grid-template-columns:1fr;

        }

        .testimonials-title{

          font-size:3rem;

        }

      }

      @media(max-width:700px){

        .testimonials{

          padding:90px 6%;

        }

        .testimonials-title{

          font-size:2.4rem;

        }

        .testimonial-card{

          padding:30px;

        }

      }

      `}</style>

      <section className="testimonials" id="testimonials">

        <div className="testimonials-header">

          <p className="testimonials-subtitle">
            Témoignages
          </p>

          <h2 className="testimonials-title">
            Ils nous font confiance
          </h2>

          <p className="testimonials-description">
            Découvrez ce que nos clients apprécient le plus chez
            Maison Allys : un accompagnement personnalisé, une
            disponibilité constante et un véritable sens du service.
          </p>

        </div>

        <div className="testimonials-grid">

          {testimonials.map((testimonial,index)=>(

            <motion.div

              key={index}

              className="testimonial-card"

              initial={{opacity:0,y:60}}

              whileInView={{opacity:1,y:0}}

              transition={{duration:.6,delay:index*.15}}

              viewport={{once:true}}

            >

              <div className="stars">

                {[...Array(5)].map((_,i)=>

                  <Star
                    key={i}
                    size={18}
                    fill="#B75C3B"
                  />

                )}

              </div>

              <p className="testimonial-text">

                "{testimonial.text}"

              </p>

              <div className="testimonial-author">

                <h3>{testimonial.name}</h3>

                <span>{testimonial.role}</span>

              </div>

            </motion.div>

          ))}

        </div>

      </section>

    </>
  );
}