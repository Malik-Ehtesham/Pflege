import React from "react";
import AboutCard from "../about/AboutCard.jsx";
import HAbout from "./HAbout.jsx";
import Hero from "./hero/Hero.jsx";
import Contact from "../contact/Contact.jsx";
import Fragen from "./Fragen.jsx";
import QuestionSection from "../Questions/QuestionSection/QuestionSection.jsx";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutCard />
      <HAbout />
      {/* <Fragen /> */}
      <iframe
        src="https://88612f60464a4031ba9f33b491d585ba.elf.site"
        width="100%"
        height="550"
        className="my-10 p-2   overflow-hidden"
      ></iframe>
      {/* <div data-trustmary-widget="/xSWaKBxkr"></div> */}
      <QuestionSection />
      <Contact />
    </>
  );
};

export default Home;
