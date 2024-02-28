import React from "react";
import Back from "../common/back/Back";
import OnlineCourses from "./OnlineCourses";
import Header from "../common/header/Header";

const CourseHome = () => {
  return (
    <div className="relative">
      <Header />
      <OnlineCourses />
    </div>
  );
};

export default CourseHome;
