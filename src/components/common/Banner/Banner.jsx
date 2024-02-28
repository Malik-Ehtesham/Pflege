import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="w-screen bg-black py-1 flex justify-evenly fixed z-50 top-0">
      <p className="text-white     tracking-widest">We are available 24/7</p>
      <Link to="/contact" className="text-rose-500 underline">
        Contact Now
      </Link>
    </div>
  );
};

export default Banner;
