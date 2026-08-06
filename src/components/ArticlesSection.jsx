import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const articles = [

  {
    id:1,
    category:"Voyages",
    title:"Comment organiser un voyage sans stress ?",
    description:"Découvrez les étapes essentielles pour préparer un séjour sereinement.",
    image:"https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg?auto=compress&cs=tinysrgb&w=1200",
    link:"https://vertu.com/concierge/personal-concierge-services-a-discreet-guide-to-getting-time-back-vertu"
  },

  {
    id:2,
    category:"Restaurants",
    title:"Comment choisir le restaurant idéal ?",
    description:"Quelques conseils pour trouver l'adresse parfaite.",
    image:"https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1200",
    link:"https://velares.ch/"
  },

  {
    id:3,
    category:"Événements",
    title:"Les clés d'un événement réussi",
    description:"Organisation, budget et coordination.",
    image:"https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=1200",
    link:"https://acprivate.com/en/la-revue/stress-free-birthday-private-event-concierge"
  },

  {
    id:4,
    category:"Prestataires",
    title:"Comment trouver un prestataire de confiance ?",
    description:"Les critères à vérifier avant de choisir un professionnel.",
    image:"https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200",
    link:"https://www.help.fr/"
  },

  {
    id:5,
    category:"Lifestyle",
    title:"7 idées pour surprendre vos proches",
    description:"Des inspirations pour créer des souvenirs inoubliables.",
    image:"https://images.pexels.com/photos/1303098/pexels-photo-1303098.jpeg?auto=compress&cs=tinysrgb&w=1200",
    link:"https://date-charm.com/"
  },

  {
    id:6,
    category:"Maison Allys",
    title:"Pourquoi faire appel à une conciergerie lifestyle ?",
    description:"Découvrez les avantages d'un accompagnement personnalisé.",
    image:"https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200",
    link:"https://concierge.trankility.fr/"
  }

];

export default function ArticlesSection() {

  return (

    <>

      <style>{`      .articles{

        padding:140px 7%;

        background:#FBEEDA;

      }

      .articles-container{

        max-width:1450px;

        margin:auto;

      }

      .articles-header{

        text-align:center;

        max-width:760px;

        margin:0 auto 90px;

      }

      .articles-subtitle{

        color:#B75C3B;

        text-transform:uppercase;

        letter-spacing:4px;

        font-weight:600;

        margin-bottom:18px;

      }

      .articles-title{

        font-family:'Cormorant Garamond',serif;

        font-size:4rem;

        color:#4B3222;

        margin-bottom:24px;

      }

      .articles-description{

        color:#6F6258;

        line-height:1.9;

        font-size:1.05rem;

      }

      .articles-grid{

        display:grid;

        grid-template-columns:repeat(3,1fr);

        gap:35px;

      }

      .article-card{

        background:white;

        border-radius:28px;

        overflow:hidden;

        box-shadow:0 20px 45px rgba(0,0,0,.08);

        transition:.35s;

        display:flex;

        flex-direction:column;

      }

      .article-card:hover{

        transform:translateY(-10px);

      }

      .article-image{

        height:250px;

        overflow:hidden;

      }

      .article-image img{

        width:100%;

        height:100%;

        object-fit:cover;

        transition:.6s;

      }

      .article-card:hover img{

        transform:scale(1.08);

      }

      .article-content{

        padding:30px;

        display:flex;

        flex-direction:column;

        flex:1;

      }

      .article-category{

        display:inline-flex;

        align-items:center;

        width:max-content;

        padding:8px 18px;

        border-radius:999px;

        background:#FBEEDA;

        color:#B75C3B;

        font-size:.8rem;

        font-weight:600;

        margin-bottom:18px;

      }      .article-title{

        font-family:'Cormorant Garamond',serif;

        font-size:2rem;

        color:#4B3222;

        line-height:1.3;

        margin-bottom:18px;

      }

      .article-description{

        color:#6F6258;

        line-height:1.9;

        margin-bottom:30px;

        flex:1;

      }

      .article-link{

        display:inline-flex;

        align-items:center;

        gap:10px;

        color:#B75C3B;

        text-decoration:none;

        font-weight:600;

        transition:.35s;

      }

      .article-link svg{

        transition:.35s;

      }

      .article-link:hover{

        color:#9D472C;

      }

      .article-link:hover svg{

        transform:translateX(6px);

      }

      @media(max-width:1200px){

        .articles-grid{

          grid-template-columns:repeat(2,1fr);

        }

      }

      @media(max-width:768px){

        .articles{

          padding:90px 6%;

        }

        .articles-title{

          font-size:2.8rem;

        }

        .articles-grid{

          grid-template-columns:1fr;

        }

        .article-image{

          height:220px;

        }

      }

      `}</style>

      <section className="articles">

        <div className="articles-container">

          <div className="articles-header">

            <p className="articles-subtitle">

              Le Journal Maison Allys

            </p>

            <h2 className="articles-title">

              Nos conseils & inspirations

            </h2>

            <p className="articles-description">

              Découvrez nos conseils pour organiser vos voyages,
              événements et projets plus sereinement, ainsi que
              des idées et inspirations pour simplifier votre quotidien.

            </p>

          </div>

          <div className="articles-grid"></div>          {articles.map((article,index)=>(

            <motion.article

              key={article.id}

              className="article-card"

              initial={{opacity:0,y:60}}

              whileInView={{opacity:1,y:0}}

              transition={{

                duration:.6,

                delay:index*.12

              }}

              viewport={{once:true}}

            >

              <div className="article-image">

                <img

                  src={article.image}

                  alt={article.title}

                />

              </div>

              <div className="article-content">

                <span className="article-category">

                  {article.category}

                </span>

                <h3 className="article-title">

                  {article.title}

                </h3>

                <p className="article-description">

                  {article.description}

                </p>

                <NavLink

                  to={article.link}

                  className="article-link"

                >

                  Lire l'article

                  <ArrowRight size={18}/>

                </NavLink>

              </div>

            </motion.article>

          ))}

          </div>

       

      </section>    </>

  );

}