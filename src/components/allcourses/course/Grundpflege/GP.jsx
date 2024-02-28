import React from "react";
import "../../../about/about.css";
import { online } from "../../../../dummydata";
import Heading from "../../../common/heading/Heading";
import { Link } from "react-router-dom";
import Header from "../../../common/header/Header";
import { Fade } from "react-awesome-reveal";
import { useMediaQuery } from "react-responsive";

const GP = () => {
  window.scrollTo(0, 0);

  const isLg = useMediaQuery({ maxWidth: 1024 });
  return isLg ? (
    <>
      <Header />
      <div className=" feature-card-bg flex justify-center">
        <div className="sm:w-5/6">
          <div className=" grid grid-cols-1  lg:grid-cols-2   lg:my-12 pb-12 sm:pb-0">
            <div className="p-4 sm:py-12">
              <p className="text-5xl font-bold mt-8 mb-12 ">Grundpflege</p>
              <div className=" bg-white shadow-2xl p-4 rounded-lg hover:bg-rose-500  transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300 cursor-pointer hover:text-white">
                <p className="font-bold text-2xl mb-3">Grundpflege</p>
                <p className="leading-7 ">
                  {" "}
                  Unser Pflegedienst bietet umfassende Grundpflege, die auf Ihre
                  individuellen Bedürfnisse zugeschnitten ist. Wir verstehen,
                  dass jeder Mensch einzigartig ist, und deshalb stellen wir
                  sicher, dass unsere Pflege ebenso einzigartig ist. Ob es um
                  Hilfe bei der Körperpflege, Ernährung oder Mobilität geht,
                  unser engagiertes Team ist da, um Sie mit Würde und Respekt zu
                  unterstützen.
                </p>
              </div>
            </div>
            <Fade direction="left">
              <div className="p-2 flex justify-center my-12">
                <img
                  src="./images/JP.webp"
                  className=" border-4 rounded-lg border-rose-500 lg:my-12 xl:my-0"
                />
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </>
  ) : (
    <>
      <Header />
      <div className="feature-card-bg flex justify-center">
        <div className="sm:w-5/6">
          <div className=" grid grid-cols-1  lg:grid-cols-2 lg:my-12 pb-12 sm:pb-0">
            <Fade direction="left">
              <div className="p-2 flex justify-center">
                <img
                  src="./images/JP.webp"
                  className="border-4 rounded-lg border-rose-500 lg:my-12 xl:my-0"
                />
              </div>
            </Fade>
            <div className="p-4 ">
              <p className="text-5xl font-bold mt-8 mb-12 ">Grundpflege</p>
              <div className=" bg-white shadow-2xl p-4 rounded-lg hover:bg-rose-500  transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300 cursor-pointer hover:text-white">
                <p className="font-bold text-2xl mb-3">Grundpflege</p>
                <p className="leading-7 ">
                  {" "}
                  Unser Pflegedienst bietet umfassende Grundpflege, die auf Ihre
                  individuellen Bedürfnisse zugeschnitten ist. Wir verstehen,
                  dass jeder Mensch einzigartig ist, und deshalb stellen wir
                  sicher, dass unsere Pflege ebenso einzigartig ist. Ob es um
                  Hilfe bei der Körperpflege, Ernährung oder Mobilität geht,
                  unser engagiertes Team ist da, um Sie mit Würde und Respekt zu
                  unterstützen.
                </p>
              </div>
              {/* <p className="text-3xl md:text-5xl text-white font-black my-6">
              {props.title}
            </p> */}
              {/* <p className="text-gray-600 font-semibold text-3xl tracking-wider">
                Unser Pflegedienst bietet umfassende Grundpflege, die auf Ihre
                individuellen Bedürfnisse zugeschnitten ist. Wir verstehen, dass
                jeder Mensch einzigartig ist, und deshalb stellen wir sicher,
                dass unsere Pflege ebenso einzigartig ist. Ob es um Hilfe bei
                der Körperpflege, Ernährung oder Mobilität geht, unser
                engagiertes Team ist da, um Sie mit Würde und Respekt zu
                unterstützen.
              </p>

              <Link
                to="/trees"
                className="  text-white bg-emerald-400  hover:bg-emerald-500  font-semibold btn btn-lg rounded-full  p-4 px-8 my-6 sm:my-12"
              >
                Get Started
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GP;
