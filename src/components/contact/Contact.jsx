import React, { useState } from "react";
import "./contact.css";
import Noty from "noty";
import "noty/lib/noty.css";
import Heading from "../common/heading/Heading";
import "noty/lib/themes/mint.css";
import PhoneIcon from "@mui/icons-material/Phone";
import SendIcon from "@mui/icons-material/Send";
import FaxIcon from "@mui/icons-material/Fax";
import EmailIcon from "@mui/icons-material/Email";

const ContactForm = () => {
  window.scrollTo(0, 0);
  const [formData, setFormData] = useState({
    Vorname: "",
    Nachname: "",
    Email: "",
    Telefonnummer: "",
    Nachricht: "",
    datenschutzZustimmung: false, // Zustimmung zur Datenverarbeitung
  });

  const [formErrors, setFormErrors] = useState({
    Vorname: false,
    Nachname: false,
    Email: false,
    Telefonnummer: false,
    Nachricht: false,
    datenschutzZustimmung: false, // Zustimmung zur Datenverarbeitung
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
    setFormErrors({ ...formErrors, [name]: false });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = {};
    Object.keys(formData).forEach((key) => {
      if (formData[key] === false || formData[key] === "") {
        errors[key] = true;
      }
    });

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      showNotification(
        "error",
        "Bitte füllen Sie alle Felder aus und stimmen Sie den Datenschutzbestimmungen zu."
      );
      return;
    }

    try {
      const response = await fetch("http://localhost:3300/send-contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        showNotification("success", "Nachricht wurde gesendet");
        // Optionally, reset the form after successful submission
        setFormData({
          Vorname: "",
          Nachname: "",
          Email: "",
          Telefonnummer: "",
          Nachricht: "",
        });
      } else {
        showNotification("error", "");
      }
    } catch (error) {
      console.error("Error:", error);
      showNotification("error", "Error sending email");
    }
  };

  const showNotification = (type, text) => {
    new Noty({
      type: type,
      text: text,
      timeout: 3000, // Duration for the notification
      progressBar: true,
    }).show();
  };

  return (
    <>
      <section className="contacts sm:px-16 pb-5 ">
        <Heading subtitle="Kontakt" title="Kontaktieren sie uns jetzt!" />
        <div className="container shadow flexSB">
          <div className="left row">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2563.2377893700454!2d8.882915077185375!3d50.02563997151431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd14c17a35571b%3A0x61362c175aace52!2sLudwigstra%C3%9Fe%2025%2C%2063110%20Rodgau!5e0!3m2!1sde!2sde!4v1700414765599!5m2!1sde!2sde"
              title="Google Maps Location"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="right row">
            <h1>Kontaktieren sie uns jetzt</h1>
            <p>Unser Team ist jederzeit erreichbar für sie</p>

            {/* <div className="items grid2">
              <div className="box">
                <i className="fa fa-phone-alt"></i>
                <p>061067797307</p>
                <i className="fa fa-fax"></i>
                <p>061067797298</p>
              </div>
              <div className="box">
                <i className="fa fa-paper-plane"></i>
                <p>Info@pflegedienst-malik.de</p>
              </div>
            </div> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 my-5">
              <div>
                <PhoneIcon />
                <p className="my-1">061067797307</p>
                <FaxIcon />
                <p className="my-1">061067797298</p>
              </div>
              <div>
                <EmailIcon />
                <p className="my-1 ">Info@pflegedienst-malik.de</p>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="Vorname"
                placeholder="Vorname"
                onChange={handleChange}
                value={formData.Vorname}
              />
              {formErrors.Vorname && (
                <p className="error-message">Geben sie ihren Vornamen an</p>
              )}
              <input
                type="text"
                name="Nachname"
                placeholder="Nachname"
                onChange={handleChange}
                value={formData.Nachname}
              />
              {formErrors.Nachname && (
                <p className="error-message">Geben sie ihren Nachnamen an</p>
              )}
              <input
                type="email"
                name="Email"
                placeholder="Email"
                onChange={handleChange}
                value={formData.Email}
              />
              {formErrors.Email && (
                <p className="error-message">Geben sie ihre Email an</p>
              )}
              <input
                type="text"
                name="Telefonnummer"
                placeholder="Telefonnummer"
                onChange={handleChange}
                value={formData.Telefonnummer}
              />
              {formErrors.Telefonnummer && (
                <p className="error-message">Geben sie ihre Telefonnummer an</p>
              )}
              <input
                type="text"
                name="Nachricht"
                placeholder="Nachricht"
                onChange={handleChange}
                value={formData.Nachricht}
              />
              {formErrors.Nachricht && (
                <p className="error-message">Geben sie eine Nachricht ein</p>
              )}

              {/* <div className=" ">
                <label
                  htmlFor="datenschutzZustimmung"
                  className=" flex  items-center cursor-pointer w-20"
                >
                  <input
                    type="checkbox"
                    name="datenschutzZustimmung"
                    id="datenschutzZustimmung"
                    checked={formData.datenschutzZustimmung}
                    onChange={handleChange} // Changed to the specific handler for checkbox
                    className="checkbox checkbox-error w-full"
                  />
                  Hiermit stimme ich den
                  <a
                    href="/datenschutz"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Datenschutzbestimmungen
                  </a>{" "}
                  zu.
                </label>
              </div> */}
              <div className="form-control">
                <label
                  htmlFor="datenschutzZustimmung"
                  className="cursor-pointer label flex items-center  "
                >
                  <input
                    type="checkbox"
                    name="datenschutzZustimmung"
                    id="datenschutzZustimmung"
                    checked={formData.datenschutzZustimmung}
                    onChange={handleChange} // Changed to the specific handler for checkbox
                    className="checkbox checkbox-error max-w-8 my-3 "
                  />
                  <span className="label-text w-full p-2 ">
                    Hiermit stimme ich den
                    <a
                      href="/datenschutz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline ms-1"
                    >
                      Datenschutzbestimmungen
                    </a>{" "}
                    zu.
                  </span>
                </label>
              </div>
              {formErrors.datenschutzZustimmung && (
                <p className="error-message">
                  Bitte stimmen Sie den Datenschutzbestimmungen zu.
                </p>
              )}

              <button type="submit" className="btn btn-error text-white">
                Nachricht senden
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
