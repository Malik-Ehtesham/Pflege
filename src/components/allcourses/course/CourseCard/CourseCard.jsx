const CourseCard = (props) => {
  return (
    <div className="bg-white w-80 min-h-96 rounded-lg py-3 px-6 border-4 border-rose-500  hover:text-white transition ease-in hover:bg-rose-500  duration-150">
      <img
        src={props.image}
        alt="GrandmaImage"
        className="w-72 h-72 rounded-lg object-cover"
      />
      <p className="text-2xl text-center my-2  font-bold">{props.title}</p>
    </div>
  );
};

export default CourseCard;
