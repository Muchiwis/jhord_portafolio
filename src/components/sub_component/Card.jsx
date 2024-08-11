const Card = ({ icon, cardTitle }) => {
  return (
    <div className="flex flex-col justify-center items-center w-2/12 md:w-2/12  rounded-xl p-2 mx-3 my-1">
      {icon}
      <div className="pt-1 text-center space-y-2">
        <figcaption className="font-medium">
          <div className="text-[#fff] font-normal text-xs md:text-sm 2xl:text-2xl">
            {cardTitle}
          </div>
        </figcaption>
      </div>
    </div>
  );
};

export default Card;
