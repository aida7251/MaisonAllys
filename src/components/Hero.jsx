import { motion } from "framer-motion";

export default function Hero() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');

        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
        }

        .hero{

          position:relative;

          width:100%;

          height:100vh;

          overflow:hidden;

          display:flex;

          align-items:center;

          justify-content:center;

          background:#000;

        }

        .hero-image{

          position:absolute;

          inset:0;

          width:100%;

          height:100%;

          z-index:0;

        }

        .hero-image img{

          width:100%;

          height:100%;

          object-fit:cover;

          object-position:center;

          display:block;

          transform:scale(1);

          animation:zoomHero 18s ease-in-out infinite alternate;

          filter:brightness(.82);

        }

        @keyframes zoomHero{

          from{

            transform:scale(1);

          }

          to{

            transform:scale(1.08);

          }

        }

        .hero-overlay{

          position:absolute;

          inset:0;

          z-index:1;

          background:
            linear-gradient(
              rgba(0,0,0,.55),
              rgba(0,0,0,.35),
              rgba(0,0,0,.60)
            );

        }

        .hero-content{

          position:relative;

          z-index:2;

          width:90%;

          max-width:900px;

          display:flex;

          flex-direction:column;

          justify-content:center;

          align-items:center;

          text-align:center;

          color:#fff;

        }

        .hero-subtitle{

          font-family:'Inter',sans-serif;

          text-transform:uppercase;

          letter-spacing:6px;

          font-size:.85rem;

          color:rgba(255,255,255,.9);

          margin-bottom:25px;

        }

        .hero-title{

          font-family:'Cormorant Garamond',serif;

          font-size:5.4rem;

          line-height:1.08;

          font-weight:600;

          margin-bottom:28px;

        }

        .hero-title span{

          color:#E5D1BB;

        }

        .hero-text{

          max-width:720px;

          font-family:'Inter',sans-serif;

          font-size:1.1rem;

          line-height:1.9;

          color:rgba(255,255,255,.92);

        }

        .hero-buttons{

          display:flex;

          justify-content:center;

          align-items:center;

          gap:20px;

          flex-wrap:wrap;

          margin-top:50px;

        }

        .primary-btn{

          text-decoration:none;

          background:#B75C3B;

          color:white;

          padding:18px 38px;

          border-radius:999px;

          font-family:'Inter',sans-serif;

          font-weight:600;

          transition:.35s;

          box-shadow:0 10px 30px rgba(0,0,0,.25);

        }

        .primary-btn:hover{

          background:#9E4E31;

          transform:translateY(-4px);

        }

        .secondary-btn{

          text-decoration:none;

          color:white;

          border:1px solid rgba(255,255,255,.45);

          padding:18px 38px;

          border-radius:999px;

          backdrop-filter:blur(12px);

          background:rgba(255,255,255,.06);

          transition:.35s;

        }

        .secondary-btn:hover{

          background:white;

          color:#4B3222;

        }

        .scroll{

          position:absolute;

          left:50%;

          bottom:35px;

          transform:translateX(-50%);

          z-index:2;

          font-family:'Inter',sans-serif;

          font-size:.78rem;

          letter-spacing:4px;

          color:white;

          opacity:.8;

        }

        @media(max-width:900px){

          .hero-title{

            font-size:3.8rem;

          }

          .hero-text{

            font-size:1rem;

          }

        }

        // @media(max-width:600px){

        //   .hero-title{

        //     font-size:2.8rem;

        //   }

        //   .hero-subtitle{

        //     font-size:.75rem;

        //     letter-spacing:3px;

        //   }

        //   .hero-buttons{

        //     flex-direction:column;

        //     width:100%;

        //   }

        //   .primary-btn,
        //   .secondary-btn{

        //     width:100%;

        //     text-align:center;

        //   }

        // }

        @media(max-width:600px){

  .hero-content{
    margin-top:110px;
  }

  .hero-title{
    font-size:2.8rem;
  }

  .hero-subtitle{
    font-size:.75rem;
    letter-spacing:3px;
  }

  .hero-buttons{
    flex-direction:column;
    width:100%;
  }

  .primary-btn,
  .secondary-btn{
    width:100%;
    text-align:center;
  }

}

      `}</style>      <section className="hero">

        <motion.div
          className="hero-image"
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.6 }}
        >
          <img
            src="/images/hero-home.png"
            alt="Maison Allys"
          />
        </motion.div>

        <div className="hero-overlay"></div>

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.4
          }}
        >

          <p className="hero-subtitle">

            MAISON DE SERVICES LIFESTYLE

          </p>

          <h1 className="hero-title">

            Le luxe d'avoir

            <br />

            <span>tout simplement quelqu'un</span>

            <br />

            qui s'occupe de tout.

          </h1>

          <p className="hero-text">

            Maison Allys accompagne particuliers, familles et
            professionnels en prenant en charge les détails de
            votre quotidien avec discrétion, exigence et une
            qualité de service digne des plus grands palaces.

          </p>

          <div className="hero-buttons">

            <motion.a
              href="#services"
              className="primary-btn"
              whileHover={{
                scale: 1.05,
                y: -3
              }}
              whileTap={{
                scale: .97
              }}
            >

              Découvrir nos services

            </motion.a>

            <motion.a
              href="#contact"
              className="secondary-btn"
              whileHover={{
                scale: 1.05,
                y: -3
              }}
              whileTap={{
                scale: .97
              }}
            >

              Nous contacter

            </motion.a>

          </div>

        </motion.div>

      </section>

    </>
  );
}