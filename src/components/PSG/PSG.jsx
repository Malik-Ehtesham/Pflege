import React, { useState } from "react";
import "./PSG.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faHeart,
  faCheckSquare,
} from "@fortawesome/free-solid-svg-icons";
import Header from "../common/header/Header";

const CareInfo = () => {
  const [activeTab, setActiveTab] = useState("psg1"); // Default to PSG I

  return (
    <>
      <Header />
      <div className="care-info-container">
        <div className=" flex  tabs">
          <button
            onClick={() => setActiveTab("psg1")}
            className={activeTab === "psg1" ? "active" : ""}
          >
            PSG I
          </button>
          <button
            onClick={() => setActiveTab("psg2")}
            className={activeTab === "psg2" ? "active" : ""}
          >
            PSG II
          </button>
          <button
            onClick={() => setActiveTab("psg3")}
            className={activeTab === "psg3" ? "active" : ""}
          >
            PSG III
          </button>
        </div>

        {activeTab === "psg1" && (
          <section className="care-info-section">
            <h1>Pflegestärkungsgesetz I (PSG I)...</h1>
            <h3>Etwa 2,9 Millionen Menschen… </h3>
            <p>
              …(soziale und private Pflegeversicherung) in Deutschland sind
              derzeit pflegebedürftig. Sie und ihre Angehörigen haben bereits
              zum 1. Januar 2015 durch das erste Pflegestärkungsgesetz (PSG I)
              deutlich mehr Unterstützung erhalten. <br />
              So wurden fast alle Leistungsbeträge der Pflegeversicherung
              angehoben. Die Leistungen der Kurzzeit- und Verhinderungspflege
              wurden ausgebaut und können seitdem besser miteinander kombiniert
              werden. <br />
              Der Anspruch auf niedrigschwellige Betreuungsleistungen in der
              ambulanten Pflege wurde ausgeweitet. Zudem wurden die Mittel für
              Umbaumaßnahmen – beispielsweise den Einbau barrierefreier Duschen
              – auf bis zu 4.000 Euro pro Maßnahme erhöht, damit
              Pflegebedürftige künftig länger in ihrem gewohnten Umfeld bleiben
              können. <br />
              Bessere Leistungen erhielten auch Menschen, die an Demenz erkrankt
              sind. Menschen mit Demenz in der bis zum 31. Dezember 2016
              geltenden sogenannten Pflegestufe 0 haben durch das erste
              Pflegestärkungsgesetz seit dem 1. Januar 2015 erstmals die
              Möglichkeit, auch Leistungen der teilstationären Tages- oder
              Nachtpflege sowie der Kurzzeitpflege in Anspruch zu nehmen. Zudem
              haben sie seitdem auch die zusätzlichen Leistungen für Mitglieder
              ambulant betreuter Wohngruppen und Zuschüsse für neu gegründete
              Wohngruppen erhalten. Diese pflegebedürftigen Menschen mit der
              sogenannten Pflegestufe 0 sind zum 1. Januar 2017 automatisch in
              den neuen Pflegegrad 2 übergeleitet worden. <br />
              Die Verbesserungen durch das erste Pflegestärkungsgesetz wurden
              bei der Einführung des neuen Pflegebedürftigkeitsbegriffs und der
              fünf neuen Pflegegrade in Verbindung mit den neu festgesetzten
              Leistungsbeträgen zum 1. Januar 2017 übernommen und teilweise
              erneut ausgeweitet.
            </p>
          </section>
        )}

        {activeTab === "psg2" && (
          <section className="care-info-section">
            <h1>Pflegestärkungsgesetz II (PSG II)...</h1>
            <h3>Durch das zweite Pflegestärkungsgesetz (PSG II)… </h3>
            <p>
              …gelten seit 2017 grundlegende Veränderungen und Verbesserungen im
              Pflegesystem für Pflegebedürftige, Angehörige sowie Pflegekräfte.
              Eckpfeiler des Gesetzes ist die Einführung des neuen
              Pflegebedürftigkeitsbegriffs, der sich stärker an den Bedürfnissen
              jedes einzelnen Menschen, an seiner individuellen Lebenssituation
              und an seinen individuellen Beeinträchtigungen und Fähigkeiten
              orientiert. <br /> <br />
              Auf dieser Grundlage erhalten seit 2017 alle Pflegebedürftigen
              gleichberechtigten Zugang zu den Leistungen der
              Pflegeversicherung, unabhängig davon, ob sie von körperlichen,
              geistigen oder psychischen Beeinträchtigungen betroffen sind. Mit
              dem neuen Begutachtungsinstrument kann die individuelle Pflege-
              und Lebenssituation von Menschen, die einen Antrag auf Leistungen
              der Pflegeversicherung gestellt haben, besser erfasst werden. So
              wird es möglich, Pflegebedürftige individueller zu versorgen und
              ihre Selbstständigkeit im Alltag nachhaltig zu stärken. Ein
              besonderes Augenmerk liegt dabei auf der besseren Einstufung von
              Menschen mit Demenz. <br /> <br />
              Das neue Leistungsrecht setzt die Ziele des neuen
              Pflegebedürftigkeitsbegriffs systematisch um: Bereitgestellt
              werden passgenaue Hilfen, die dazu dienen sollen, die
              Selbstständigkeit und die Fähigkeiten Pflegebedürftiger zu
              erhalten und zu stärken. Zur Finanzierung dieser Maßnahmen wird
              der Beitragssatz der Pflegeversicherung zum 1. Januar 2017 noch
              einmal um 0,2 Prozentpunkte angehoben, wodurch dann insgesamt etwa
              fünf Milliarden Euro jährlich mehr für Pflegeleistungen zur
              Verfügung stehen. <br /> <br />
              Die Umsetzung des zweiten Pflegestärkungsgesetzes, insbesondere
              die Umstellung auf den neuen Pflegebedürftigkeitsbegriff und das
              neue Begutachtungsinstrument, wird seit Januar 2016 durch einen
              gesetzlich begründeten Beirat begleitet, in dem Pflegekassen,
              Verbände der Leistungserbringerinnen und -Erbringer,
              Selbsthilfeorganisationen von pflegebedürftigen und behinderten
              Menschen, Vertreterinnen und Vertreter der Pflegeberufe, Länder
              und Kommunen sowie Vertreterinnen und Vertreter der Wissenschaft
              mitwirken.
            </p>

            <br />
            <br />

            <ul className="check-list">
              <li>
                <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
                Verbesserung der Beratung
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
                Personalbemessung in stationären Einrichtungen
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
                Weiterentwicklung der Regelungen zur Qualitätssicherung
              </li>
              {/* Add more list items as needed */}
            </ul>
          </section>
        )}

        {activeTab === "psg3" && (
          <section className="care-info-section psg3">
            <h1>Mit dem dritten Pflegestärkungsgesetz (PSG III)...</h1>
            <p>
              ...werden zum einen die in einer Bund-Länder-Arbeitsgruppe zur
              Stärkung der Rolle der Kommunen in der Pflege zwischen Bund,
              Ländern und kommunalen Spitzenverbänden vereinbarten Empfehlungen
              umgesetzt. Diese beziehen sich auf folgende Themenbereiche:
            </p>
            <ul>
              <li>
                <FontAwesomeIcon icon={faCheckSquare} className="icon" />
                Sicherstellung der Versorgung,
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckSquare} className="icon" />
                Beratung,
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckSquare} className="icon" />
                niedrigschwellige Angebote (jetzt: Angebote zur Unterstützung im
                Alltag),
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckSquare} className="icon" />
                altersgerechtes Wohnen
              </li>
            </ul>
            <p>
              Zum anderen enthält das dritte Pflegestärkungsgesetz ein
              Maßnahmenpaket zur Verbesserung von Prävention, Aufdeckung und
              Bekämpfung von Abrechnungsbetrug. Der Entwurf sieht hierfür
              Regelungen sowohl für den Bereich der gesetzlichen
              Krankenversicherung (SGB V) als auch der Pflegeversicherung (SGB
              XI) vor. Die aufeinander abgestimmten Regelungen im SGB V und SGB
              XI zielen darauf ab, bestehende Lücken bei den Qualitäts- und
              Abrechnungsprüfungen zu schließen.
              <br />
              <br />
              Das Verhältnis zwischen Pflege und Eingliederungshilfe wird
              präzisiert. Es bleibt bei der „Gleichrangigkeit“. Sozialämter und
              Pflegekassen sollen jedoch bei einem Zusammentreffen von gleichen
              Leistungen unterschiedlicher Träger künftig regelhaft vereinbaren,
              wie die Leistungserbringung im Verhältnis zur oder zum
              Anspruchsberechtigten jeweils erfolgen soll und wie die
              Kostenerstattung der Träger untereinander erfolgt.
              <br />
              <br />
              <br />
              <br />
              Zudem wird mit dem dritten Pflegestärkungsgesetz der neue
              Pflegebedürftigkeitsbegriff im Recht der Sozialhilfe eingeführt.
              Da die Versicherungsleistungen nach dem SGB XI auf gesetzlich
              festgesetzte Höchstbeträge begrenzt sind (Teilleistungssystem),
              kann auch nach Einführung des neuen Pflegebedürftigkeitsbegriffs
              im SGB XI und nach der deutlichen Verbesserung der Leistungen der
              Pflegeversicherung ein darüber hinausgehender Bedarf an Pflege
              bestehen. Dieser wird bei finanzieller Bedürftigkeit durch die
              Hilfe zur Pflege im Rahmen der Sozialhilfe und dem sozialen
              Entschädigungsrecht (Bundesversorgungsgesetz – BVG) gedeckt.
              Gegenüber dem SGB XI ist auch nach geltendem Recht der Begriff
              insoweit weiter gefasst, als das Vorliegen von Pflegebedürftigkeit
              nicht mindestens für voraussichtlich sechs Monate vorliegen muss.
              Wesentliche Inhalte der Änderungen im Recht der Hilfe zur Pflege
              sind:
            </p>
            <ul>
              <li>
                <FontAwesomeIcon icon={faCheckSquare} className="icon" />
                Umstellung von Pflegestufen auf Pflegegrade
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckSquare} className="icon" />
                Leistungen in den Pflegegraden
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckSquare} className="icon" />
                Zusätzliche pflegerische Betreuungsleistungen in der Hilfe zur
                Pflege
              </li>
            </ul>
            <p>
              Das dritte Pflegestärkungsgesetz verfolgt darüber hinaus die
              Anerkennung der Wirtschaftlichkeit von Entlohnungen bis zu
              Tarifniveau in den Pflegevergütungsverhandlungen der
              Pflegeeinrichtungen.
              <br />
              <br />
              Schließlich erhalten Versicherte in stationären Einrichtungen der
              Hilfe für behinderte Menschen im Sinne des § 43a SGB XI Leistungen
              der Behandlungspflege als häusliche Krankenpflege nach § 37 Abs. 2
              Satz 1 SGB V. Voraussetzung dafür ist, dass der Bedarf an
              Behandlungspflege eine ständige Überwachung und Versorgung durch
              eine qualifizierte Pflegefachkraft erfordert.
            </p>
          </section>
        )}
      </div>
    </>
  );
};

export default CareInfo;
