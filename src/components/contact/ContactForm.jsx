import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { ArrowRight } from "lucide-react";

export const SERVICES = [

  "Voyages sur mesure",

  "Restaurants et sorties",

  "Événements",

  "Bien-être",

  "Loisirs et expériences",

  "Demandes personnalisées"

];

export const REQUEST_TYPES = [

  "Demande d'information",

  "Demande de devis",

  "Être rappelé"

];

export const BUDGETS = [

  "Moins de 500 €",

  "500 € à 2 000 €",

  "2 000 € à 5 000 €",

  "Plus de 5 000 €",

  "À définir"

];

export default function ContactForm() {

  const [status,setStatus]=useState("idle");

  const [form,setForm]=useState({

    firstname:"",

    lastname:"",

    email:"",

    phone:"",

    city:"",

    country:"",

    service:"",

    requestType:"",

    budget:"",

    date:"",

    message:""

  });

  const updateField=(field,value)=>{

    setForm((prev)=>({

      ...prev,

      [field]:value

    }));

  };

  const validate=()=>{

    if(!form.firstname) return false;

    if(!form.lastname) return false;

    if(!form.email) return false;

    if(!form.phone) return false;

    if(!form.service) return false;

    if(!form.message) return false;

    return true;

  };

  const sendEmail=async()=>{

    await emailjs.send(

      "service_darf2vd",

      "template_o5y4a4e",

      form,

      "O7BCiWI_xGQTKHZgG"

    );

  };

  const handleSubmit=async(e)=>{

    e.preventDefault();

    if(!validate()){

      alert("Merci de compléter les champs obligatoires.");

      return;

    }

    try{

      setStatus("sending");

      await sendEmail();

      setStatus("success");

    }

    catch{

      setStatus("error");

    }

  };

  return(

    <>

<style>{`

@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');

*{

box-sizing:border-box;

}

.contact-form{

width:100%;

background:white;

border-radius:34px;

padding:60px;

box-shadow:0 25px 70px rgba(0,0,0,.06);

}

.form-title{

font-family:'Cormorant Garamond',serif;

font-size:3.2rem;

color:#4B3222;

margin-bottom:15px;

line-height:1.1;

}

.form-description{

max-width:760px;

color:#6D5A4D;

line-height:1.9;

margin-bottom:45px;

font-size:1rem;

}

.form-grid{

display:grid;

grid-template-columns:repeat(2,1fr);

gap:22px;

}

.field{

display:flex;

flex-direction:column;

}

.field.full{

grid-column:1/-1;

}

.field label{

margin-bottom:8px;

font-weight:600;

font-size:.95rem;

color:#4B3222;

}

.field input,

.field select,

.field textarea{

width:100%;

padding:18px 20px;

border:none;

outline:none;

background:#F8F6F4;

border-radius:16px;

font-family:'Inter',sans-serif;

font-size:.95rem;

transition:.3s;

}.field textarea{

min-height:180px;

resize:vertical;

}

.field input:focus,

.field select:focus,

.field textarea:focus{

background:white;

box-shadow:0 0 0 2px rgba(183,92,59,.18);

}

.submit-button{

margin-top:40px;

display:inline-flex;

align-items:center;

gap:12px;

border:none;

cursor:pointer;

padding:18px 34px;

border-radius:50px;

background:#B75C3B;

color:white;

font-size:1rem;

font-weight:600;

transition:.35s;

}

.submit-button:hover{

background:#9E4E31;

transform:translateY(-4px);

}

.status{

margin-top:25px;

padding:18px;

border-radius:16px;

font-weight:600;

}

.status.success{

background:#E8F8EF;

color:#1F7A44;

}

.status.error{

background:#FDEAEA;

color:#B3261E;

}

@media(max-width:900px){

.contact-form{

padding:35px 24px;

}

.form-grid{

grid-template-columns:1fr;

}

.form-title{

font-size:2.4rem;

}

}

`}</style>

<motion.form

className="contact-form"

onSubmit={handleSubmit}

initial={{opacity:0,y:40}}

whileInView={{opacity:1,y:0}}

viewport={{once:true}}

transition={{duration:.6}}

>

        <h2 className="form-title">

          Parlez-nous de votre projet

        </h2>

        <p className="form-description">

          Que vous souhaitiez organiser un voyage,
          un événement, trouver un prestataire ou
          bénéficier d'un accompagnement personnalisé,
          nous sommes à votre écoute.

          Remplissez ce formulaire et nous vous
          recontacterons dans les meilleurs délais.

        </p>

        <div className="form-grid">

          <div className="field">

            <label>Prénom *</label>

            <input
              type="text"
              placeholder="Votre prénom"
              value={form.firstname}
              onChange={(e)=>
                updateField("firstname",e.target.value)
              }
              required
            />

          </div>

          <div className="field">

            <label>Nom *</label>

            <input
              type="text"
              placeholder="Votre nom"
              value={form.lastname}
              onChange={(e)=>
                updateField("lastname",e.target.value)
              }
              required
            />

          </div>

          <div className="field">

            <label>Adresse e-mail *</label>

            <input
              type="email"
              placeholder="exemple@email.com"
              value={form.email}
              onChange={(e)=>
                updateField("email",e.target.value)
              }
              required
            />

          </div>

          <div className="field">

            <label>Téléphone *</label>

            <input
              type="tel"
              placeholder="+33 6 00 00 00 00"
              value={form.phone}
              onChange={(e)=>
                updateField("phone",e.target.value)
              }
              required
            />

          </div>

          <div className="field">

            <label>Ville</label>

            <input
              type="text"
              placeholder="Votre ville"
              value={form.city}
              onChange={(e)=>
                updateField("city",e.target.value)
              }
            />

          </div>

          <div className="field">

            <label>Pays</label>

            <input
              type="text"
              placeholder="Votre pays"
              value={form.country}
              onChange={(e)=>
                updateField("country",e.target.value)
              }
            />

          </div>
                    <div className="field full">

            <label>Service souhaité *</label>

            <select
              value={form.service}
              onChange={(e)=>
                updateField("service",e.target.value)
              }
              required
            >

              <option value="">

                Sélectionnez un service

              </option>

              {SERVICES.map((service)=>(

                <option
                  key={service}
                  value={service}
                >

                  {service}

                </option>

              ))}

            </select>

          </div>

          <div className="field">

            <label>Type de demande</label>

            <select
              value={form.requestType}
              onChange={(e)=>
                updateField("requestType",e.target.value)
              }
            >

              <option value="">

                Sélectionnez

              </option>

              {REQUEST_TYPES.map((type)=>(

                <option
                  key={type}
                  value={type}
                >

                  {type}

                </option>

              ))}

            </select>

          </div>

          <div className="field">

            <label>Budget estimatif</label>

            <select
              value={form.budget}
              onChange={(e)=>
                updateField("budget",e.target.value)
              }
            >

              <option value="">

                Sélectionnez votre budget

              </option>

              {BUDGETS.map((budget)=>(

                <option
                  key={budget}
                  value={budget}
                >

                  {budget}

                </option>

              ))}

            </select>

          </div>

          <div className="field full">

            <label>Date souhaitée</label>

            <input
              type="text"
              placeholder="jj/mm/aaaa"
              value={form.date}
              onChange={(e)=>
                updateField("date",e.target.value)
              }
            />

          </div>

          <div className="field full">

            <label>Décrivez votre projet *</label>

            <textarea
              placeholder="Expliquez-nous votre besoin, vos attentes, vos contraintes ou toute information utile..."
              value={form.message}
              onChange={(e)=>
                updateField("message",e.target.value)
              }
              required
            />

          </div>

        </div>

        {status==="success" && (

          <div className="status success">

            Votre demande a bien été envoyée. Nous vous recontacterons rapidement.

          </div>

        )}

        {status==="error" && (

          <div className="status error">

            Une erreur est survenue lors de l'envoi. Merci de réessayer.

          </div>

        )}

        <motion.button

          type="submit"

          className="submit-button"

          whileHover={{scale:1.03}}

          whileTap={{scale:.98}}

        >

          Envoyer ma demande

          <ArrowRight size={18}/>

        </motion.button>

      </motion.form>

    </>

  );

}