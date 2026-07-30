import { motion } from "framer-motion";
import {
  Briefcase,
  ArrowRight,
  Upload,
  FileText,
} from "lucide-react";

export default function CareerForm({
  form,
  updateField,
  contractTypes,
  experienceLevels,
  positions,
  handleFileChange,
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

        .career-form{

          width:100%;

          background:#fff;

          border-radius:34px;

          padding:60px;

          box-shadow:
            0 25px 70px rgba(0,0,0,.06);

        }

        .career-header{

          margin-bottom:45px;

        }

        .career-badge{

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

        .career-title{

          font-family:'Cormorant Garamond',serif;

          font-size:3rem;

          color:#4B3222;

          line-height:1.1;

          margin-bottom:15px;

        }

        .career-description{

          color:#6D5A4D;

          font-size:1rem;

          line-height:1.9;

          max-width:760px;

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

          font-size:.95rem;

          font-family:'Inter',sans-serif;

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

        .upload-zone{

          margin-top:10px;

          border:2px dashed rgba(183,92,59,.25);

          border-radius:20px;

          padding:35px;

          text-align:center;

          background:#FCFAF8;

          transition:.3s;

        }

        .upload-zone:hover{

          border-color:#B75C3B;

        }

        .upload-zone svg{

          color:#B75C3B;

          margin-bottom:15px;

        }

        .upload-zone p{

          margin:8px 0;

          color:#6D5A4D;

        }

        .upload-zone input{

          margin-top:20px;

        }

        .submit-button{

          margin-top:40px;

          display:inline-flex;

          align-items:center;

          gap:12px;

          border:none;

          border-radius:50px;

          padding:18px 34px;

          cursor:pointer;

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

          .career-form{

            padding:35px 24px;

          }

          .career-title{

            font-size:2.3rem;

          }

          .form-grid{

            grid-template-columns:1fr;

          }

        }

      `}</style>

      <motion.form
        className="career-form"
        onSubmit={handleSubmit}
        initial={{ opacity:0, y:40 }}
        whileInView={{ opacity:1, y:0 }}
        viewport={{ once:true }}
        transition={{ duration:.6 }}
      >

        <div className="career-header">

          <div className="career-badge">

            <Briefcase size={18}/>

            Nous rejoindre

          </div>

          <h2 className="career-title">

            Construisez votre avenir avec Maison Allys

          </h2>

          <p className="career-description">

            Nous recherchons des talents passionnés par
            l'excellence du service, le sens du détail et
            l'expérience client haut de gamme. Remplissez ce
            formulaire et notre équipe RH étudiera votre
            candidature avec attention.

          </p>

        </div>

        <div className="form-grid">
          <div className="field">
            <label>Prénom *</label>

            <input
              type="text"
              placeholder="Votre prénom"
              value={form.firstname}
              onChange={(e) =>
                updateField("firstname", e.target.value)
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
              onChange={(e) =>
                updateField("lastname", e.target.value)
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

          <div className="field">
            <label>Pays</label>

            <input
              type="text"
              placeholder="Votre pays"
              value={form.country}
              onChange={(e) =>
                updateField("country", e.target.value)
              }
            />
          </div>

          <div className="field">
            <label>Poste recherché *</label>

            <select
              value={form.position}
              onChange={(e) =>
                updateField("position", e.target.value)
              }
              required
            >
              <option value="">
                Sélectionnez un poste
              </option>

              {positions.map((position) => (
                <option
                  key={position}
                  value={position}
                >
                  {position}
                </option>
              ))}
            </select>
          </div>

          <div className="field">
            <label>Type de contrat</label>

            <select
              value={form.contractType}
              onChange={(e) =>
                updateField(
                  "contractType",
                  e.target.value
                )
              }
            >
              <option value="">
                Sélectionnez
              </option>

              {contractTypes.map((contract) => (
                <option
                  key={contract}
                  value={contract}
                >
                  {contract}
                </option>
              ))}
            </select>
          </div>

          <div className="field">
            <label>Disponibilité</label>

            <input
              type="date"
              value={form.availability}
              onChange={(e) =>
                updateField(
                  "availability",
                  e.target.value
                )
              }
            />
          </div>

          <div className="field">
            <label>Niveau d'expérience</label>

            <select
              value={form.experience}
              onChange={(e) =>
                updateField(
                  "experience",
                  e.target.value
                )
              }
            >
              <option value="">
                Sélectionnez
              </option>

              {experienceLevels.map((level) => (
                <option
                  key={level}
                  value={level}
                >
                  {level}
                </option>
              ))}
            </select>
          </div>          <div className="field full">
            <label>CV (PDF, DOC ou DOCX) *</label>

            <div className="upload-zone">

              <Upload size={42} />

              <p>
                Déposez votre CV ou sélectionnez un fichier.
              </p>

              <p
                style={{
                  fontSize: ".9rem",
                  color: "#8A7466",
                }}
              >
                Taille maximale : 10 Mo
              </p>

              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                required
              />

              {form.cv && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{
                    marginTop: 20,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                    color: "#4B3222",
                    fontWeight: 600,
                  }}
                >
                  <FileText size={18} />

                  <span>{form.cv.name}</span>
                </motion.div>
              )}

            </div>
          </div>

          <div className="field">
            <label>Profil LinkedIn</label>

            <input
              type="url"
              placeholder="https://linkedin.com/in/..."
              value={form.linkedin}
              onChange={(e) =>
                updateField("linkedin", e.target.value)
              }
            />
          </div>

          <div className="field">
            <label>Portfolio / Site web</label>

            <input
              type="url"
              placeholder="https://..."
              value={form.portfolio}
              onChange={(e) =>
                updateField("portfolio", e.target.value)
              }
            />
          </div>

          <div className="field full">
            <label>Pourquoi souhaitez-vous rejoindre Maison Allys ? *</label>

            <textarea
              placeholder="Parlez-nous de votre parcours, de vos motivations, de ce que vous recherchez et de la valeur que vous souhaitez apporter à Maison Allys."
              value={form.message}
              onChange={(e) =>
                updateField("message", e.target.value)
              }
              required
            />
          </div>

        </div>

        {status?.type && (
          <motion.div
            className={`status ${status.type}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .35 }}
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
          Envoyer ma candidature

          <ArrowRight size={18} />
        </motion.button>
              </motion.form>
    </>
  );
}