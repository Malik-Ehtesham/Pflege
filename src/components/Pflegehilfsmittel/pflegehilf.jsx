import React from "react";
import "./pflegehilf.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faNotesMedical,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import Header from "../common/header/Header";

const PB = () => {
  return (
    <>
      <Header />
      <div className="pflegehilf-container sm:mx-16 my-5">
        <div className="pflegehilf-section">
          <br />
          <h1>Pflegehilfsmittel sind Geräte...</h1>
          <p>
            ...und Sachmittel, die zur Erleichterung der häuslichen Pflege
            notwendig sind, die Beschwerden der Pflegebedürftigen lindern oder
            dazu beitragen, den Pflegebedürftigen eine selbstständige
            Lebensführung zu ermöglichen.
          </p>
          <br />
          <h2>Die Pflegekasse unterscheidet zwischen:</h2>
          <div className="pflegehilf-item">
            <FontAwesomeIcon icon={faCheckCircle} className="icon" />
            <h3>technischen Pflegehilfsmitteln,</h3>
            <p>
              wie beispielsweise einem Pflegebett, Lagerungshilfen oder einem
              Notrufsystem.
            </p>
          </div>
          <div className="pflegehilf-item">
            <FontAwesomeIcon icon={faCheckCircle} className="icon" />
            <h3>zum Verbrauch bestimmter Pflegehilfsmitteln,</h3>
            <p>wie zum Beispiel Einmalhandschuhen oder Bettelagen.</p>
          </div>
          <br />
          <br />
          <h1>Das Pflegehilfsmittel-Verzeichnis...</h1>
          <p>
            ...und Sachmittel, die zur Erleichterung der häuslichen Pflege
            notwendig sind, die Beschwerden der Pflegebedürftigen lindern oder
            dazu beitragen, den Pflegebedürftigen eine selbstständige
            Lebensführung zu ermöglichen.
          </p>

          <p>
            ...informiert darüber, welche Pflegehilfsmittel zur Verfügung
            gestellt beziehungsweise leihweise überlassen werden können.
          </p>
          <p>
            Zu den Kosten für technische Pflegehilfen müssen Pflegebedürftige ab
            dem 18. Lebensjahr einen Eigenanteil von zehn Prozent, maximal
            jedoch 25 Euro je Pflegehilfsmittel zuzahlen. Größere technische
            Pflegehilfsmittel werden oft leihweise überlassen, sodass eine
            Zuzahlung entfällt.
          </p>
          <p>
            Die Kosten für zum Verbrauch bestimmte Pflegehilfsmittel werden bis
            zu 40 Euro pro Monat von der Pflegekasse erstattet.
          </p>
        </div>
        <div className="pflegehilf-section illustration-section hidden lg:flex">
          <img
            src="./images/illustration1.png"
            className="pflegehilf-illustration"
            alt="Illustration"
          />
        </div>
        {/* <FontAwesomeIcon icon={faHeart} size="3x" className="heart-icon" /> */}
      </div>
    </>
  );
};

export default PB;
