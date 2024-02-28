// import QuestionAccordion from "../QuestionAccordion/QuestionAccordion";
import { Link } from "react-router-dom";
import QuestionAccordion from "../QuestionAccordion/QuestionAccordion";

const QuestionSection = () => {
  return (
    <div className="flex justify-center">
      <div className="sm:w-5/6">
        <div className="flex flex-col justify-between items-center lg:flex-row pb-5 lg:pb-10 lg:pt-10">
          <div className="p-4 flex justify-center flex-col items-center lg:items-start">
            <p className="text-center lg:text-start text-4xl md:text-5xl font-black">
              Haben Sie <span className="text-rose-600">Fragen?</span>
            </p>
            <p className="text-center lg:text-start text-4xl md:text-5xl font-black">
              Wir haben Antworten!
            </p>
            <p className="text-gray-900 text-center lg:text-start text-lg sm:text-xl mt-5">
              Finden Sie hier keine Antwort? Senden Sie uns einfach eine
              Nachricht für jede Anfrage.
            </p>
            <Link
              to="/contact"
              className="btn btn-error text-white  mt-8 text-lg"
            >
              Kontaktiere uns
            </Link>
          </div>
          <div className="lg:w-5/6 flex flex-col items-center">
            <QuestionAccordion />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionSection;
