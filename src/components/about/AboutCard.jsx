import Heading from "../common/heading/Heading";
import "./about.css";
import { homeAbout } from "../../dummydata";

const AboutCard = () => {
  return (
    <>
      {/* <section className="aboutHome">
        <div className="sm:container flexSB">
          <div className="left row">
            <img src="./images/logo2.png" alt="" className="zoomed-out-image" />
          </div>
          <div className="right row">
            <Heading subtitle="" title="Über uns" />
            <div className="items">
              {homeAbout.map((val, index) => (
                <div
                  className="item flexSB border-2 border-red-500 rounded-lg"
                  key={index}
                >
                  <div className="img">
                    <img src={val.cover} alt="" />
                  </div>
                  <div className="text">
                    <h2>{val.title}</h2>
                    <p>{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}
      <div className="flex justify-center">
        <div className="sm:w-5/6 grid grid-cols-1 lg:grid-cols-2">
          <div>
            <img src="./images/logo2.png" className="" />
          </div>
          <div className="mt-10 p-2">
            {homeAbout.map((val, index) => (
              <div
                key={index}
                className="border-4 border-rose-500 flex my-5 rounded-lg  transition ease-in-out hover:-translate-y-1 hover:bg-rose-500 hover:text-white cursor-pointer hover:scale-105 duration-300"
              >
                {" "}
                <div className="w-80 sm:w-52 lg:w-96 xl:w-64">
                  <img src={val.cover} className="w-full m-2" />
                </div>
                <div className="m-2 ">
                  <p className="font-bold text-xl m-2">{val.title}</p>
                  <p className="m-2 text-lg leading-7">{val.desc}</p>
                </div>{" "}
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="additional-section">
        <div className="card m-2">
          <div className="card-inner">
            <h1 className="blue-heading">Pflegeleitbild und Grundprinzipien</h1>
            <p>
              In unserem Leitbild dokumentieren wir die Ziele, nach denen wir
              streben, sowie die grundlegenden Prinzipien, die unser
              pflegerisches Handeln lenken. Unser Pflegeleitbild ist im Einklang
              mit dem Modell der fördernden Prozesspflege nach Monika Krohwinkel
              gestaltet. Die Parallelisierung von Lebensprozess und
              Pflegeprozess bildet dabei die essentielle Grundlage für unser
              umfassendes Pflegeverständnis.
            </p>
            <ul className="bullet-list">
              <li>
                1. Unterstützung des zu Pflegenden bei der eigenverantwortlichen
                Gestaltung seines Alltags.
              </li>
              <li>
                2. Einbeziehung der Bezugspersonen während des gesamten
                Pflegeprozesses.
              </li>
              <li>
                3. Ermunterung der Pflegebedürftigen zur aktiven Mitbestimmung
                bei der Gestaltung ihrer Pflege.
              </li>
              <li>
                4. Etablierung einer gleichberechtigten Partnerschaft mit dem
                Patienten im gesamten Pflegeprozess.
              </li>
              <li>
                5. Durchführung der Pflege auf ganzheitlicher Basis unter
                Berücksichtigung der Gesamtsituation des Pflegekunden.
              </li>
            </ul>
          </div>
        </div>
        <div className="card m-2">
          <div className="card-inner">
            <h1 className="blue-heading">
              Werte, Würde des Menschen und Vision
            </h1>
            <p>
              Unsere Unternehmenswerte sind tief in der Achtung der Würde des
              Menschen verankert. Dies beinhaltet das unveräußerliche Recht,
              auch unter Beeinträchtigungen ein möglichst selbstständiges und
              selbstbestimmtes Leben zu führen. Unsere Vision ist es, die
              höchste Qualität in Pflege und Unterstützung im häuslichen Umfeld
              zu gewährleisten. Unser Anspruch besteht darin, die Lebensqualität
              der Pflegebedürftigen, ihrer Angehörigen und unserer Mitarbeiter
              auf das höchstmögliche Niveau zu heben. Die eigenen vier Wände
              sind für uns mehr als nur ein physischer Raum. Sie repräsentieren
              Sicherheit, Privatsphäre, Erinnerungen, Freiheit und
              Selbstbestimmtheit. Unser Bestreben ist es, diese essentiellen
              Elemente zu bewahren und gleichzeitig die Pflegeleistungen so zu
              gestalten, dass sie den individuellen Bedürfnissen gerecht werden
              und eine Steigerung der Lebensqualität ermöglichen.
            </p>
          </div>
        </div>
        <div className="card m-2">
          <div className="card-inner">
            <h1 className="blue-heading">Patientenwahrnehmung und Angebot</h1>
            <p>
              Die Wahrnehmung unserer Patienten erfolgt in ihrer häuslichen
              Umgebung, um eingehende Informationen über individuelle Vorlieben,
              Lebensstil und notwendige Versorgung zu gewinnen. Unser
              professionelles Team setzt sich mit höchstem Engagement dafür ein,
              diese Unterstützung im Rahmen des Möglichen optimal umzusetzen.
              Neben den herkömmlichen pflegerischen und hauswirtschaftlichen
              Leistungen bieten wir ein weitreichendes Netzwerk, vielfältige
              Zusatzleistungen sowie Hilfestellungen zur Verbesserung an. Unser
              Service beinhaltet eine professionelle, qualitätsgesicherte
              Analyse der individuellen Anforderungen, Beratung sowohl für
              Patienten als auch Angehörige sowie die präzise Definition von
              Pflege- und Serviceleistungen. Wir sind bestrebt, unseren
              Patienten nicht nur eine umfassende Pflege zu bieten, sondern auch
              ihre Lebensqualität durch gezielte Unterstützung zu steigern.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutCard;
