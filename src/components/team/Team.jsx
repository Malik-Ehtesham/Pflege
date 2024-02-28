import React from "react";
import Back from "../common/back/Back";
import TeamCard from "./TeamCard";
import "./team.css";
import "../about/about.css";
import Header from "../common/header/Header";

const Team = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <Header />

      <TeamCard />
    </>
  );
};

export default Team;
