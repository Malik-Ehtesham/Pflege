import React from "react";
import { team } from "../../dummydata";

const TeamCard = () => {
  return (
    <div className="flex justify-center my-5">
      <div className="p-2 sm:w-5/6">
        <div className=" flex flex-col sm:flex-row  items-center justify-evenly w-full ">
          <div className="border-2 w-80 border-red-600 rounded-lg py-5 px-16  shadow-lg m-1 hover:bg-rose-500 hover:text-white cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
            <p className="font-bold  text-2xl text-center my-2 ">
              Taimur Malik
            </p>
            <p className="font-medium text-gray-600  text-base text-center my-2">
              Geschäftsführer
            </p>
          </div>
          <div className="border-2 w-80 border-red-600 rounded-lg py-5 px-16  shadow-lg m-1 hover:bg-rose-500 hover:text-white cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
            <p className="font-bold text-2xl text-center my-2 ">
              Nicole Sommer
            </p>
            <p className="font-medium text-gray-600  text-base text-center my-2">
              Pflegedienstleitung
            </p>
          </div>
        </div>
        <div className=" border-2 p-6 rounded-lg my-10 shadow-xl">
          <p className="my-4 text-base md:text-lg">
            Willkommen beim Pflege- und Betreuungsdienst Malik, wo Pflege mehr
            ist als nur eine Dienstleistung - es ist eine Herzensangelegenheit!
            Unser dynamisches Team, unter der kompetenten Leitung von
            Geschäftsführer Herrn Malik und der erfahrenen Pflegedienstleitung
            Frau Sommer, setzt höchste Standards für eine erstklassige
            Betreuung.
          </p>
          <p className="my-4 text-base md:text-lg">
            Frau Sommer bringt nicht nur ihre umfassende Erfahrung in die Pflege
            ein, sondern auch ein tiefes Verständnis für die individuellen
            Bedürfnisse jedes Einzelnen. Ihr Engagement geht über das Fachliche
            hinaus, um Ihnen eine fürsorgliche und einfühlsame Betreuung zu
            bieten.
          </p>
          <p className="my-4 text-base md:text-lg">
            Geschäftsführer Herr Malik legt nicht nur Wert auf fachliche
            Exzellenz, sondern sorgt auch persönlich für ein harmonisches
            Arbeitsklima. Bei uns geht es nicht nur um Pflege, sondern um eine
            vertrauensvolle Partnerschaft, die Ihr Wohlbefinden an oberste
            Stelle setzt.
          </p>
          <p className="my-4 text-base md:text-lg">
            Wählen Sie den Pflege- und Betreuungsdienst Malik, wo Qualität,
            Erfahrung und ein positives Arbeitsumfeld Hand in Hand gehen.
            Gemeinsam schaffen wir eine Atmosphäre, die nicht nur professionell,
            sondern auch herzlich ist - für ein Leben in Würde und Geborgenheit.
          </p>
          <p className="my-4 text-base md:text-lg">
            Das ganze Team vom Pflege- und Betreuungsdienst Malik, besteht aus
            Pflegefachkräften, Pflegehelferinnen, Betreuungs und
            Hauswirtschaftskräften und zu guter letzt der Verwaltung, die bei
            allen Prozessen im Hintergrund unterstützen, . Als Team sind wir
            unschlagbar und können uns jedem Problem in unserem Themenbereich
            stellen.
          </p>
        </div>
      </div>
      {/* <div className="team">
        <div className='items shadow'>
          <div className='details'>
            <h2>Taimur Malik</h2>
            <p>Geschäftsführer</p>
          </div>
        </div>
        <div className='items shadow'>
        <div className='details'>
            <h2>Nicole Sommer</h2>
            <p>Pflegedienstleitung</p>
          </div>
        </div>
        </div>
      <section className="additional-section-team">
      <div className="welcome-message">
      <p>
        Willkommen beim Pflege- und Betreuungsdienst Malik, wo Pflege mehr ist
        als nur eine Dienstleistung - es ist eine Herzensangelegenheit! Unser
        dynamisches Team, unter der kompetenten Leitung von Geschäftsführer
        Herrn Malik und der erfahrenen Pflegedienstleitung Frau Sommer, setzt
        höchste Standards für eine erstklassige Betreuung.
      </p>
      <p>
        Frau Sommer bringt nicht nur ihre umfassende Erfahrung in die Pflege
        ein, sondern auch ein tiefes Verständnis für die individuellen
        Bedürfnisse jedes Einzelnen. Ihr Engagement geht über das Fachliche
        hinaus, um Ihnen eine fürsorgliche und einfühlsame Betreuung zu bieten.
      </p>
      <p>
        Geschäftsführer Herr Malik legt nicht nur Wert auf fachliche
        Exzellenz, sondern sorgt auch persönlich für ein harmonisches
        Arbeitsklima. Bei uns geht es nicht nur um Pflege, sondern um eine
        vertrauensvolle Partnerschaft, die Ihr Wohlbefinden an oberste Stelle
        setzt.
      </p>
      <p>
        Wählen Sie den Pflege- und Betreuungsdienst Malik, wo Qualität,
        Erfahrung und ein positives Arbeitsumfeld Hand in Hand gehen. Gemeinsam
        schaffen wir eine Atmosphäre, die nicht nur professionell, sondern auch
        herzlich ist - für ein Leben in Würde und Geborgenheit.
      </p>
      <p>
        Das ganze Team vom Pflege- und Betreuungsdienst Malik, besteht aus Pflegefachkräften,
        Pflegehelferinnen, Betreuungs und Hauswirtschaftskräften und zu guter letzt der Verwaltung, 
        die bei allen Prozessen im Hintergrund unterstützen, . Als Team sind wir unschlagbar und
        können uns jedem Problem in unserem Themenbereich stellen.
      </p>
    </div>
    </section> */}
    </div>
  );
};

export default TeamCard;
