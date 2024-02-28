import React, { useState } from "react";
import "./Fragen/Fragen.css";
import Heading from "../common/heading/Heading";

const Fragen = () => {
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

  const toggleQuestion = index => {
    if (index === openQuestionIndex) {
      setOpenQuestionIndex(null); // Close the current question if it is already open
    } else {
      setOpenQuestionIndex(index); // Open the clicked question
    }
  };

  return (
    <section className='Fragen'>
      <Heading subtitle='Fragen' title='Oft gestellte Fragen' />
      <div className='fragenContainer'>
        <div className='fragenIntro'>
          <h1>Haben Sie Fragen?</h1>
          <h2>Wir haben Antworten!</h2>
          <p>Finden Sie hier keine Antwort? Senden Sie uns einfach eine Nachricht für jede Anfrage.</p>
          <button>Kontaktiere uns</button>
        </div>
        <div className='fragenContent'>
          {[
            { question: 'Ab wann besteht eine Pflegebedürftigkeit?', answer: 'Eine Pflegebedürftigkeit besteht, laut Gesetzgeber (§14 SGB XI), wenn eine Person, bei den unten aufgelisteten, wiederkehrenden Alltags Handlungen Unterstützung benötigt.' },
            { question: 'Was sind Pflegehilfsmittel?', answer: 'Pflegehilfsmittel sind Geräte und Sachmittel, die zur Erleichterung der häuslichen Pflege notwendig sind' },
            { question: 'Was ist eine Ambulante Pflegesachleistung?', answer: 'Pflegebedürftige, die weiterhin zu Hause leben, können einen zugelassenen professionellen Pflegedienst engagieren und erhalten dann die sogenannte Pflegesachleistung.' },
            { question: 'Wie betreffen mich die Pflegestärkungsgesätze', answer: 'Etwa 2,9 Millionen Menschen (soziale und private Pflegeversicherung) in Deutschland sind derzeit pflegebedürftig.' },

          ].map((faq, index) => (
            <div key={index} className='frageItem'>
              <h2 onClick={() => toggleQuestion(index)}>{faq.question}</h2>
              {openQuestionIndex === index && <p>{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fragen;
