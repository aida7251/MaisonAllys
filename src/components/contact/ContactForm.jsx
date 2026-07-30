import { useState } from "react";
import emailjs from "@emailjs/browser";

import ClientForm from "./forms/ClientForm";
import CareerForm from "./forms/CareerForm";
import PartnerForm from "./forms/PartnerForm";

const PROFILES = [
  {
    id: "client",
    title: "Je suis un client",
    subtitle: "Je souhaite bénéficier des services Maison Allys."
  },
  {
    id: "partner",
    title: "Je suis une entreprise",
    subtitle: "Je souhaite proposer un partenariat ou un service."
  },
  {
    id: "career",
    title: "Je souhaite rejoindre Maison Allys",
    subtitle: "Candidature spontanée ou réponse à une offre."
  }
];

export const SERVICES = [
  "Conciergerie Lifestyle",
  "Voyage sur mesure",
  "Organisation d'événement",
  "Shopping personnalisé",
  "Assistant personnel",
  "Gestion immobilière",
  "Gestion Airbnb",
  "Autre"
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

  const [profile,setProfile]=useState("client");

  const [status,setStatus]=useState("idle");

  const [form,setForm]=useState({

    firstname:"",

    lastname:"",

    company:"",

    email:"",

    phone:"",

    city:"",

    country:"",

    service:"",

    requestType:"",

    budget:"",

    subject:"",

    position:"",

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

    if(!form.message) return false;

    return true;

  };

  const sendEmail=async()=>{

    await emailjs.send(

      "service_darf2vd",

      "template_o5y4a4e",

      {

        profile,

        ...form

      },

      "O7BCiWI_xGQTKHZgG"

    );

  };

  const handleSubmit=async(e)=>{

    e.preventDefault();

    if(!validate()){

      alert("Merci de compléter tous les champs obligatoires.");

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

      {profile==="client" && (

        <ClientForm

          profile={profile}

          setProfile={setProfile}

          profiles={PROFILES}

          form={form}

          updateField={updateField}

          services={SERVICES}

          requestTypes={REQUEST_TYPES}

          budgets={BUDGETS}

          handleSubmit={handleSubmit}

          status={status}

        />

      )}

      {profile==="career" && (

        <CareerForm

          profile={profile}

          setProfile={setProfile}

          profiles={PROFILES}

          form={form}

          updateField={updateField}

          handleSubmit={handleSubmit}

          status={status}

        />

      )}

      {profile==="partner" && (

        <PartnerForm

          profile={profile}

          setProfile={setProfile}

          profiles={PROFILES}

          form={form}

          updateField={updateField}

          handleSubmit={handleSubmit}

          status={status}

        />

      )}

    </>

  );

}