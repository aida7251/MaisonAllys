import { motion } from "framer-motion";
import {
  Handshake,
  Building2,
  ArrowRight,
  Globe,
} from "lucide-react";

export default function PartnerForm({
  form,
  updateField,
  partnerTypes,
  sectors,
  countries,
  handleSubmit,
  status,
}) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');

        *{
          box-sizing:border-box;
        }

        .partner-form{

          width:100%;

          background:#fff;

          border-radius:34px;

          padding:60px;

          box-shadow:
            0 25px 70px rgba(0,0,0,.06);

        }

        .partner-header{

          margin-bottom:50px;

        }

        .partner-badge{

          display:inline-flex;

          align-items:center;

          gap:10px;

          padding:10px 18px;

          border-radius:50px;

          background:rgba(183,92,59,.08);

          color:#B75C3B;

          font-weight:600;

          margin-bottom:20px;

        }

        .partner-title{

          font-family:'Cormorant Garamond',serif;

          font-size:3rem;

          color:#4B3222;

          margin-bottom:15px;

          line-height:1.1;

        }

        .partner-description{

          max-width:760px;

          color:#6D5A4D;

          line-height:1.9;

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

          color:#4B3222;

          font-weight:600;

          font-size:.95rem;

        }

        .field input,
        .field select,
        .field textarea{

          width:100%;

          border:none;

          outline:none;

          padding:18px 20px;

          background:#F8F6F4;

          border-radius:16px;

          font-family:'Inter',sans-serif;

          font-size:.95rem;

          transition:.3s;

        }

        .field textarea{

          resize:vertical;

          min-height:170px;

        }

        .field input:focus,
        .field select:focus,
        .field textarea:focus{

          background:white;

          box-shadow:
            0 0 0 2px rgba(183,92,59,.18);

        }

        .submit-button{

          margin-top:40px;

          display:inline-flex;

          align-items:center;

          gap:12px;

          padding:18px 34px;

          border:none;

          border-radius:50px;

          background:#B75C3B;

          color:white;

          cursor:pointer;

          font-size:1rem;

          font-weight:600;

          transition:.35s;

        }

        .submit-button:hover{

          transform:translateY(-4px);

          background:#9E4E31;

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

          .partner-form{

            padding:35px 24px;

          }

          .partner-title{

            font-size:2.3rem;

          }

          .form-grid{

            grid-template-columns:1fr;

          }

        }

      `}</style>

      <motion.form
        className="partner-form"
        onSubmit={handleSubmit}
        initial={{ opacity:0, y:40 }}
        whileInView={{ opacity:1, y:0 }}
        viewport={{ once:true }}
        transition={{ duration:.6 }}
      >

        <div className="partner-header">

          <div className="partner-badge">

            <Handshake size={18}/>

            Devenir partenaire

          </div>

          <h2 className="partner-title">

            Construisons une collaboration durable

          </h2>

          <p className="partner-description">

            Maison Allys développe un réseau de partenaires
            sélectionnés avec exigence afin d'offrir une
            expérience haut de gamme à ses clients.
            Présentez-nous votre activité et explorons
            ensemble les opportunités de collaboration.

          </p>

        </div>

        <div className="form-grid"></div>          <div className="field">
            <label>Nom de l'entreprise *</label>

            <input
              type="text"
              placeholder="Nom de votre entreprise"
              value={form.company}
              onChange={(e) =>
                updateField("company", e.target.value)
              }
              required
            />
          </div>

          <div className="field">
            <label>Nom du contact *</label>

            <input
              type="text"
              placeholder="Nom et prénom"
              value={form.contact}
              onChange={(e) =>
                updateField("contact", e.target.value)
              }
              required
            />
          </div>

          <div className="field">
            <label>Fonction</label>

            <input
              type="text"
              placeholder="Directeur, Responsable..."
              value={form.position}
              onChange={(e) =>
                updateField("position", e.target.value)
              }
            />
          </div>

          <div className="field">
            <label>Adresse e-mail *</label>

            <input
              type="email"
              placeholder="contact@entreprise.com"
              value={form.email}
              onChange={(e) =>
                updateField("email", e.target.value)
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
              onChange={(e) =>
                updateField("phone", e.target.value)
              }
              required
            />
          </div>

          <div className="field">
            <label>Site internet</label>

            <input
              type="url"
              placeholder="https://www.votre-site.com"
              value={form.website}
              onChange={(e) =>
                updateField("website", e.target.value)
              }
            />
          </div>

          <div className="field">
            <label>Pays</label>

            <select
              value={form.country}
              onChange={(e) =>
                updateField("country", e.target.value)
              }
            >
              <option value="">
                Sélectionnez un pays
              </option>

              {countries.map((country) => (
                <option
                  key={country}
                  value={country}
                >
                  {country}
                </option>
              ))}
            </select>
          </div>

          <div className="field">
            <label>Ville</label>

            <input
              type="text"
              placeholder="Votre ville"
              value={form.city}
              onChange={(e) =>
                updateField("city", e.target.value)
              }
            />
          </div>

          <div className="field full">
            <label>Type de partenariat *</label>

            <select
              value={form.partnerType}
              onChange={(e) =>
                updateField("partnerType", e.target.value)
              }
              required
            >
              <option value="">
                Sélectionnez un type
              </option>

              {partnerTypes.map((type) => (
                <option
                  key={type}
                  value={type}
                >
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div className="field full">
            <label>Secteur d'activité *</label>

            <select
              value={form.sector}
              onChange={(e) =>
                updateField("sector", e.target.value)
              }
              required
            >
              <option value="">
                Sélectionnez un secteur
              </option>

              {sectors.map((sector) => (
                <option
                  key={sector}
                  value={sector}
                >
                  {sector}
                </option>
              ))}
            </select>
          </div>          <div className="field">
            <label>Zone d'intervention</label>

            <input
              type="text"
              placeholder="Ex. Paris, France, Europe..."
              value={form.coverage}
              onChange={(e) =>
                updateField("coverage", e.target.value)
              }
            />
          </div>

          <div className="field">
            <label>Taille de l'entreprise</label>

            <select
              value={form.companySize}
              onChange={(e) =>
                updateField("companySize", e.target.value)
              }
            >
              <option value="">
                Sélectionnez
              </option>

              <option value="Indépendant">
                Indépendant
              </option>

              <option value="2-10 collaborateurs">
                2 à 10 collaborateurs
              </option>

              <option value="11-50 collaborateurs">
                11 à 50 collaborateurs
              </option>

              <option value="51-250 collaborateurs">
                51 à 250 collaborateurs
              </option>

              <option value="250+ collaborateurs">
                Plus de 250 collaborateurs
              </option>
            </select>
          </div>

          <div className="field full">
            <label>
              Présentez votre entreprise *
            </label>

            <textarea
              placeholder="Décrivez votre activité, vos services, votre expertise et les valeurs de votre entreprise..."
              value={form.companyDescription}
              onChange={(e) =>
                updateField(
                  "companyDescription",
                  e.target.value
                )
              }
              required
            />
          </div>

          <div className="field full">
            <label>
              Collaboration souhaitée *
            </label>

            <textarea
              placeholder="Expliquez comment vous imaginez une collaboration avec Maison Allys."
              value={form.partnership}
              onChange={(e) =>
                updateField(
                  "partnership",
                  e.target.value
                )
              }
              required
            />
          </div>

          <div className="field full">
            <label>
              Votre valeur ajoutée
            </label>

            <textarea
              placeholder="Pourquoi souhaitez-vous devenir partenaire ? Quels bénéfices votre entreprise peut-elle apporter à nos clients ?"
              value={form.value}
              onChange={(e) =>
                updateField("value", e.target.value)
              }
            />
          </div>

          <div className="field full">
            <label>
              Références ou informations complémentaires
            </label>

            <textarea
              placeholder="Clients, réalisations, certifications, distinctions..."
              value={form.references}
              onChange={(e) =>
                updateField(
                  "references",
                  e.target.value
                )
              }
            />
          </div>

        {status?.type && (
          <motion.div
            className={`status ${status.type}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            {status.message}
          </motion.div>
        )}

        <motion.button
          type="submit"
          className="submit-button"
          whileHover={{
            scale: 1.03,
          }}
          whileTap={{
            scale: 0.98,
          }}
        >
          Envoyer ma demande de partenariat

          <ArrowRight size={18} />
        </motion.button>
              </motion.form>
    </>
  );
}