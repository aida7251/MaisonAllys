// import {
//   Instagram,
//   Facebook,
//   Linkedin,
//   Mail,
//   Phone,
//   MapPin,
//   ArrowUp
// } from "lucide-react";

export default function Footer() {

  const scrollTop = () => {

    window.scrollTo({
      top:0,
      behavior:"smooth"
    });

  };

  return (

    <>

      <style>{`

      .footer{

        background:#2F2118;
        color:white;
        padding:100px 7% 40px;

      }

      .footer-container{

        max-width:1400px;
        margin:auto;

        display:grid;
        grid-template-columns:2fr 1fr 1fr 1.5fr;
        gap:70px;

      }

      .footer-logo{

        font-family:'Cormorant Garamond',serif;
        font-size:2.5rem;
        margin-bottom:20px;

      }

      .footer-logo span{

        color:#B75C3B;

      }

      .footer-description{

        color:rgba(255,255,255,.75);
        line-height:1.9;
        margin-bottom:30px;

      }

      .socials{

        display:flex;
        gap:15px;

      }

      .social{

        width:48px;
        height:48px;

        border-radius:50%;

        background:rgba(255,255,255,.08);

        display:flex;
        justify-content:center;
        align-items:center;

        transition:.35s;

        cursor:pointer;

      }

      .social:hover{

        background:#B75C3B;
        transform:translateY(-4px);

      }

      .footer h3{

        margin-bottom:25px;
        font-size:1.3rem;

      }

      .footer-links{

        display:flex;
        flex-direction:column;
        gap:18px;

      }

      .footer-links a{

        color:rgba(255,255,255,.75);
        transition:.3s;

      }

      .footer-links a:hover{

        color:white;
        padding-left:8px;

      }

      .contact-item{

        display:flex;
        gap:15px;
        margin-bottom:22px;

        color:rgba(255,255,255,.75);

      }

      .contact-item svg{

        color:#B75C3B;
        min-width:20px;

      }

      .newsletter{

        margin-top:25px;

      }

      .newsletter input{

        width:100%;

        padding:15px 18px;

        border:none;
        outline:none;

        border-radius:50px;

        margin-bottom:15px;

      }

      .newsletter button{

        width:100%;

        padding:15px;

        border:none;

        border-radius:50px;

        background:#B75C3B;

        color:white;

        cursor:pointer;

        transition:.3s;

      }

      .newsletter button:hover{

        background:#9B472C;

      }

      .footer-bottom{

        margin-top:70px;

        padding-top:35px;

        border-top:1px solid rgba(255,255,255,.1);

        display:flex;
        justify-content:space-between;
        align-items:center;

      }

      .footer-bottom p{

        color:rgba(255,255,255,.6);

      }

      .back-top{

        width:55px;
        height:55px;

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

      }

      @media(max-width:1100px){

        .footer-container{

          grid-template-columns:1fr 1fr;

        }

      }

      @media(max-width:700px){

        .footer{

          padding:80px 6% 35px;

        }

        .footer-container{

          grid-template-columns:1fr;

          gap:45px;

        }

        .footer-bottom{

          flex-direction:column;
          gap:25px;

        }

      }

      `}</style>

      <footer className="footer" id="contact">

        <div className="footer-container">

          <div>

            <h2 className="footer-logo">

              MAISON <span>ALLYS</span>

            </h2>

            <p className="footer-description">

              Votre maison de services lifestyle.
              Nous simplifions votre quotidien grâce à
              un accompagnement personnalisé, discret
              et haut de gamme.

            </p>

            <div className="socials">

              <div className="social">

                <Instagram/>

              </div>

              <div className="social">

                <Facebook/>

              </div>

              <div className="social">

                <Linkedin/>

              </div>

            </div>

          </div>

          <div>

            <h3>

              Navigation

            </h3>

            <div className="footer-links">

              <a href="#presentation">La Maison</a>

              <a href="#services">Services</a>

              <a href="#process">Comment ça marche</a>

              <a href="#testimonials">Témoignages</a>

            </div>

          </div>

          <div>

            <h3>

              Contact

            </h3>

            <div className="contact-item">

              <MapPin size={20}/>

              <span>Dakar, Sénégal</span>

            </div>

            <div className="contact-item">

              <Phone size={20}/>

              <span>+221 XX XXX XX XX</span>

            </div>

            <div className="contact-item">

              <Mail size={20}/>

              <span>contact@maisonallys.com</span>

            </div>

          </div>

          <div>

            <h3>

              Newsletter

            </h3>

            <p
            style={{
              color:"rgba(255,255,255,.75)",
              lineHeight:"1.8",
              marginBottom:"20px"
            }}>

              Recevez nos nouveautés et inspirations lifestyle.

            </p>

            <div className="newsletter">

              <input

                type="email"

                placeholder="Votre adresse e-mail"

              />

              <button>

                S'abonner

              </button>

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

            <ArrowUp/>

          </div>

        </div>

      </footer>

    </>

  );

}