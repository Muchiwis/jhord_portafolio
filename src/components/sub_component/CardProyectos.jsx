const CardProyectos = ({
  titulo,
  subTitulo,
  btnGit,
  btnPreview,
  descripcion,
  imagen,
  alt,
}) => {
  return (
    <figure className="md:flex border border-[#FFEEAD] bg-[#110e1b] shadow-2xl  shadow-[#FFEEAD] md:shadow-none hover:shadow-xl  hover:shadow-[#FFAD60]/40 rounded-xl p-6 md:p-2 md:hover:grayscale-0 delay-150 md:hover:scale-105 ease-in duration-100">
      <img
        className="w-[400px] h-[260px] p-2 md:w-[400px] md:h-auto 2xl:w-[600px] 2xl:h-auto mx-auto rounded-xl"
        src={imagen}
        loading="lazy"
        alt={alt}
      />
      <div className="pt-6 md:p-4 text-center md:text-left space-y-4 md:space-y-7 2xl:space-y-10">
        <figcaption className="font-medium">
          <div className="text-orange-200 font-normal text-base md:text-xl 2xl:text-3xl">
            {titulo}
          </div>
          <div className="text-slate-100/70 md:text-xs 2xl:text-xl">
            {subTitulo}
          </div>
        </figcaption>
        <blockquote>
          <p className="text-md font-light text-white md:text-base 2xl:text-2xl">
            {descripcion}
          </p>
        </blockquote>
        <div className="flex space-x-4">
          {btnGit}
          {btnPreview}
        </div>
      </div>
    </figure>
  );
};

export default CardProyectos;
