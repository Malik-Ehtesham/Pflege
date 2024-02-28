import React from "react";
import "./about.css";
import Back from "../common/back/Back";
import AboutCard from "./AboutCard";
import Header from "../common/header/Header";

const About = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <Header />
      <AboutCard />
    </>
  );
};

export default About;
