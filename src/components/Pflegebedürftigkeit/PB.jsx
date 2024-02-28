import React from "react";
import "./PB.css";
import Back from "../common/back/Back";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faWheelchair,
  faBrain,
  faShower,
  faCapsules,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import Header from "../common/header/Header";

const PB = () => {
  return (
    <>
      <Header />
      <section className="care-requirements sm:mx-16 my-5 ">
        <div className="care-requirements-header">
          <div className=" text-xl sm:text-3xl">PFLEGEBEDÜRFTIGKEIT</div>
          <FontAwesomeIcon icon={faHeart} size="3x" className="header-icon" />
        </div>
        <h2>Voraussetzungen der Pflegebedürftigkeit</h2>
        <p>
          Eine Pflegebedürftigkeit besteht, laut Gesetzgeber (§14 SGB XI), wenn
          eine Person, bei den unten aufgelisteten, wiederkehrenden Alltags
          Handlungen Unterstützung benötigt.
        </p>
        <ul>
          <li>
            <FontAwesomeIcon icon={faWheelchair} className="list-icon" />
            Mobilität (Gehen, Stehen, Treppensteigen, Verlassen und
            Wiederaufsuchen der Wohnung, An- und Auskleiden so wie Aufstehen und
            Zu-Bett-Gehen)
          </li>
          <li>
            <FontAwesomeIcon icon={faBrain} className="list-icon" />
            Kognitive und kommunikative Fähigkeiten (Örtliche und zeitliche
            Orientierung, Erinnern an wesentliche Ereignisse oder Beobachtung,
            Erkennen von Personen aus dem Umfeld etc.)
          </li>
          <li>
            <FontAwesomeIcon icon={faShower} className="list-icon" />
            Selbstversorgung (Duschen und Baden einschließlich Waschen der
            Haare, vorderen Oberkörper und Intimbereich, Zubereitung und
            Verabreichung von Nahrung und Getränken, Benutzen einer Toilette
            etc.)
          </li>
          <li>
            <FontAwesomeIcon icon={faCapsules} className="list-icon" />
            Bewältigung mit krankheits- und therapiebedingten Belastungen
            (Einnahme von Medikation, Versorgung intravenöser Zugänge,
            Verbandswechsel und Wundversorgung, Besuche von medizinischen oder
            therapeutischer Einrichtungen,Einhalten einer Diät etc.)
          </li>
          <li>
            <FontAwesomeIcon icon={faUsers} className="list-icon" />
            Alltagsleben und soziale Kontakte (Gestaltung des Tagesablaufs und
            Anpassung an Veränderungen, Ruhen und Schlafen, Sichbeschäftigen,
            Kontaktpflege zu Personen etc.)
          </li>
        </ul>
        <p>
          Dies sind einige sinngemäße Auszüge aus §14 SGB XI, für ausführlichere
          Informationen, können Sie uns gerne kontaktieren oder{" "}
          <a href="https://www.sozialgesetzbuch-sgb.de/sgbxi/14.html">
            §14 des SGB XI hier nachlesen.
          </a>
        </p>
      </section>
    </>
  );
};

export default PB;
