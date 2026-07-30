import { motion } from "framer-motion";
import { User, Building2, Briefcase, ArrowRight } from "lucide-react";

export default function ClientForm({
  profile,
  setProfile,
  profiles,
  form,
  updateField,
  services,
  requestTypes,
  budgets,
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

        .contact-form{

          width:100%;

          background:#ffffff;

          border-radius:34px;

          padding:60px;

          box-shadow:
            0 25px 70px rgba(0,0,0,.06);

        }

        .form-title{

          font-family:'Cormorant Garamond',serif;

          font-size:3.2rem;

          color:#4B3222;

          margin-bottom:12px;

          line-height:1.1;

        }

        .form-description{

          color:#6D5A4D;

          font-size:1.02rem;

          line-height:1.9;

          max-width:760px;

          margin-bottom:45px;

        }

        .profile-grid{

          display:grid;

          grid-template-columns:repeat(3,1fr);

          gap:22px;

          margin-bottom:55px;

        }

        .profile-card{

          position:relative;

          overflow:hidden;

          background:#FCFAF8;

          border:1px solid rgba(183,92,59,.12);

          border-radius:24px;

          padding:28px;

          cursor:pointer;

          transition:.35s;

        }

        .profile-card::before{

          content:"";

          position:absolute;

          inset:0;

          background:linear-gradient(
            135deg,
            rgba(183,92,59,.10),
            transparent
          );

          opacity:0;

          transition:.35s;

        }

        .profile-card:hover{

          transform:translateY(-8px);

          border-color:#B75C3B;

        }

        .profile-card:hover::before{

          opacity:1;

        }

        .profile-card.active{

          background:rgba(183,92,59,.08);

          border-color:#B75C3B;

        }

        .profile-icon{

          width:66px;

          height:66px;

          border-radius:18px;

          display:flex;

          align-items:center;

          justify-content:center;

          background:#ffffff;

          color:#B75C3B;

          margin-bottom:18px;

          box-shadow:0 8px 24px rgba(0,0,0,.05);

        }

        .profile-card h3{

          font-family:'Cormorant Garamond',serif;

          color:#4B3222;

          font-size:1.9rem;

          margin-bottom:8px;

        }

        .profile-card p{

          color:#6D5A4D;

          line-height:1.7;

          font-size:.95rem;

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

          margin-bottom:9px;

          font-weight:600;

          color:#4B3222;

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

          background:#ffffff;

          box-shadow:
            0 0 0 2px rgba(183,92,59,.18);

        }

        .status{

          margin-top:25px;

          padding:18px;

          border-radius:16px;

          font-weight:500;

        }

        .status.success{

          background:#e8f8ef;

          color:#1f7a44;

        }

        .status.error{

          background:#fdeaea;

          color:#b3261e;

        }

        .submit-button{

          margin-top:35px;

          display:inline-flex;

          align-items:center;

          gap:12px;

          border:none;

          cursor:pointer;

          padding:18px 34px;

          border-radius:50px;

          background:#B75C3B;

          color:#fff;

          font-size:1rem;

          font-weight:600;

          transition:.35s;

        }

        .submit-button:hover{

          transform:translateY(-4px);

          background:#9E4E31;

        }

        @media(max-width:900px){

          .contact-form{

            padding:35px 24px;

          }

          .profile-grid{

            grid-template-columns:1fr;

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
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="form-title">
          Comment pouvons-nous vous accompagner ?
        </h2>

        <p className="form-description">
          Chaque projet est unique. Sélectionnez votre profil afin que
          notre équipe puisse vous proposer un accompagnement parfaitement
          adapté à vos besoins.
        </p>

        <div className="profile-grid">
          {profiles.map((item) => {
            let Icon = User;

            if (item.id === "partner") Icon = Building2;
            if (item.id === "career") Icon = Briefcase;

            return (
              <motion.div
                key={item.id}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.98 }}
                className={`profile-card ${
                  profile === item.id ? "active" : ""
                }`}
                onClick={() => setProfile(item.id)}
              >
                <div className="profile-icon">
                  <Icon size={28} />
                </div>

                <h3>{item.title}</h3>

                <p>{item.subtitle}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="form-grid">          <div className="field">
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
              placeholder="+33 ..."
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

          <div className="field full">
            <label>Service souhaité *</label>

            <select
              value={form.service}
              onChange={(e) =>
                updateField("service", e.target.value)
              }
              required
            >
              <option value="">
                Sélectionnez un service
              </option>

              {services.map((service) => (
                <option
                  key={service}
                  value={service}
                >
                  {service}
                </option>
              ))}
            </select>
          </div>

          <div className="field full">
            <label>Type de demande</label>

            <select
              value={form.requestType}
              onChange={(e) =>
                updateField(
                  "requestType",
                  e.target.value
                )
              }
            >
              <option value="">
                Sélectionnez
              </option>

              {requestTypes.map((type) => (
                <option
                  key={type}
                  value={type}
                >
                  {type}
                </option>
              ))}
            </select>
          </div>          <div className="field">
            <label>Budget estimatif</label>

            <select
              value={form.budget}
              onChange={(e) =>
                updateField("budget", e.target.value)
              }
            >
              <option value="">
                Sélectionnez votre budget
              </option>

              {budgets.map((budget) => (
                <option
                  key={budget}
                  value={budget}
                >
                  {budget}
                </option>
              ))}
            </select>
          </div>

          <div className="field">
            <label>Date souhaitée</label>

            <input
              type="date"
              value={form.date}
              onChange={(e) =>
                updateField("date", e.target.value)
              }
            />
          </div>

          <div className="field full">
            <label>Décrivez votre projet *</label>

            <textarea
              placeholder="Expliquez-nous votre besoin, vos attentes, vos contraintes ou toute information utile..."
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
            scale: 1.03
          }}
          whileTap={{
            scale: .98
          }}
        >
          Envoyer ma demande

          <ArrowRight size={18} />
        </motion.button>      </motion.form>
    </>
  );
}