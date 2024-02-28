import React from "react";
import "../../../about/about.css";
import { online } from "../../../../dummydata";
import Heading from "../../../common/heading/Heading";
import { Link } from "react-router-dom";
import Header from "../../../common/header/Header";
import { useMediaQuery } from "react-responsive";
import { Fade } from "react-awesome-reveal";

const VP = () => {
  window.scrollTo(0, 0);

  const isLg = useMediaQuery({ maxWidth: 1024 });
  return isLg ? (
    <>
      <Header />
      <div className=" feature-card-bg flex justify-center">
        <div className="sm:w-5/6">
          <div className=" grid grid-cols-1  lg:grid-cols-2   lg:my-12 pb-12 sm:pb-0">
            <div className="p-4 sm:py-12">
              <p className="text-4xl sm:text-5xl font-bold mt-8 mb-12 ">
                Verhinderungspflege
              </p>
              <div className=" bg-white shadow-2xl p-4 rounded-lg hover:bg-rose-500  transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300 cursor-pointer hover:text-white">
                <p className="font-bold text-2xl mb-3">Verhinderungspflege</p>
                <p className="leading-7 ">
                  {" "}
                  Unsere Verhinderungspflege stellt sicher, dass Ihre Liebsten
                  auch dann bestens versorgt sind, wenn Sie selbst eine Auszeit
                  brauchen. Wir springen ein, wenn Sie verhindert sind, und
                  bieten eine liebevolle und professionelle Betreuung. Egal ob
                  für ein paar Stunden oder mehrere Tage, wir sind da, um die
                  Kontinuität und Qualität der Pflege zu gewährleisten.
                </p>
              </div>
            </div>
            <Fade direction="left">
              <div className="p-2 flex justify-center my-12">
                <img
                  src="./images/b.webp"
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
                  src="./images/b.webp"
                  className="border-4 rounded-lg border-rose-500 lg:my-12 xl:my-0"
                />
              </div>
            </Fade>
            <div className="p-4 ">
              <p className="text-5xl font-bold mt-8 mb-12 ">
                Verhinderungspflege
              </p>
              <div className=" bg-white shadow-2xl p-4 rounded-lg hover:bg-rose-500  transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300 cursor-pointer hover:text-white">
                <p className="font-bold text-2xl mb-3">Verhinderungspflege</p>
                <p className="leading-7 ">
                  {" "}
                  Unsere Verhinderungspflege stellt sicher, dass Ihre Liebsten
                  auch dann bestens versorgt sind, wenn Sie selbst eine Auszeit
                  brauchen. Wir springen ein, wenn Sie verhindert sind, und
                  bieten eine liebevolle und professionelle Betreuung. Egal ob
                  für ein paar Stunden oder mehrere Tage, wir sind da, um die
                  Kontinuität und Qualität der Pflege zu gewährleisten.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VP;
