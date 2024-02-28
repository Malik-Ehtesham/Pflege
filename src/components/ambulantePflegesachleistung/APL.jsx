import React from "react";
import "./APL.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faHeart } from "@fortawesome/free-solid-svg-icons";
import Header from "../common/header/Header";

const CareServices = () => {
  return (
    <>
      <Header />
      <div className="care-services-container">
        <div className="care-services-section">
          <h1>Pflegebedürftige, die weiterhin...</h1>
          <p>
            ...zu Hause leben, können einen zugelassenen professionellen
            Pflegedienst engagieren und erhalten dann die sogenannte
            Pflegesachleistung.
          </p>
          <h2>Dazu zählen:</h2>

          <div className="care-services-list flex flex-col sm:flex-row">
            <FontAwesomeIcon icon={faCheckCircle} className="icon red" />
            <span>körperbezogene Pflegemaßnahmen,</span>
            <p>
              wie zum Beispiel Hilfe bei der Körperpflege, der Ernährung, der
              Mobilität und Lagerung.
            </p>
          </div>
          <div className="care-services-list flex flex-col  sm:flex-row">
            <FontAwesomeIcon icon={faCheckCircle} className="icon red" />
            <span>pflegerische Betreuungsmaßnahmen,</span>
            <p>
              wie zum Beispiel Unterstützungsleistungen zur Bewältigung und
              Gestaltung des alltäglichen Lebens im häuslichen Umfeld.
            </p>
          </div>
          <div className="care-services-list flex flex-col sm:flex-row">
            <FontAwesomeIcon icon={faCheckCircle} className="icon red" />
            <span>Hilfen bei der Haushaltsführung,</span>

            <p>
              Hilfen bei der Haushaltsführung, zum Beispiel Reinigen der
              Wohnung.
            </p>
          </div>

          <h1>Die ambulanten Sachleistungen...</h1>
          <p>
            …der Pflegeversicherung für die Inanspruchnahme eines Pflegedienstes
            für häusliche Pflegehilfe betragen seit dem 1. Januar 2023 monatlich
            im Pflegegrad 2 bis zu 724 Euro, im Pflegegrad 3 bis zu 1.363 Euro,
            im Pflegegrad 4 bis zu 1.693 Euro und im Pflegegrad 5 bis zu 2.095
            Euro. Pflegebedürftige im Pflegegrad 1 können ihren Anspruch auf
            einen Entlastungsbetrag in Höhe von 125 Euro pro Monat auch zum
            Ersatz von Aufwendungen für Leistungen der ambulanten Pflegedienste
            für häusliche Pflegehilfe einsetzen. Die Pflegeleistungen können
            entsprechend der individuellen Pflegesituation bedarfsgerecht
            zusammengestellt werden.
          </p>
          <br />
          <div className="care-services-contact">
            <p>
              Sprechen Sie uns gerne dazu an, entweder per{" "}
              <a href="tel:061067797307">Telefon (06106 7797 307)</a> oder über
              unser <a href="/contact">Kontaktformular</a>.
            </p>
            <p>Pflege- und Betreuungsdienst Malik GmbH</p>
          </div>
        </div>
        <div className="care-services-section flex justify-center  items-center">
          <img
            src="./images/illustration2.png"
            alt="Illustration"
            className="care-services-image"
          />
        </div>
        {/* <FontAwesomeIcon icon={faHeart} className="heart-icon" /> */}
      </div>
    </>
  );
};

export default CareServices;
