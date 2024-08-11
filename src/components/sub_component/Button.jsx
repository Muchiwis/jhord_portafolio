const Button = ({ className, nombre, href }) => {
  return (
    <div>
      <a
        target="_blank"
        href={href}
        className={`px-3 py-2 md:px-6 md:py-2 2xl:px-8 2xl:py-3 text-xs md:text-base 2xl:text-2xl mt-4 rounded-md font-normal text-orange-100/80 cursor-pointer  bg-gradient-to-br from-gray-500  md:hover:text-orange-100/90 via-gray-700 to-gray-900  border border-[#FFEEAD] shadow-2xl shadow-gray-100 hover:shadow-md hover:shadow-gray-100 hover:font-medium animate-pulse hover:animate-none ${className}`}
      >
        {nombre}
      </a>
    </div>
  );
};

export default Button;
