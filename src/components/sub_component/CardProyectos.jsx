const CardProyectos = ({
  titulo,
  subTitulo,
  btnGit,
  btnPreview,
  descripcion,
  imagen,
  imgMovil,
  alt,
}) => {
  return (
    <figure className="md:flex border border-[#FFEEAD] bg-[#110e1b] shadow-2xl  shadow-[#FFEEAD] md:shadow-none hover:shadow-xl  hover:shadow-[#FFAD60]/40 rounded-xl p-6 md:p-2 delay-150 md:hover:scale-105 ease-in duration-100">
      <picture className="w-full md:w-4/12">
        <source srcSet={imagen} media="(min-width: 768px)" />
        <img
          className="w-[400px] h-auto p-2 md:w-[800px] md:h-auto 2xl:w-[1000px] 2xl:h-auto mx-auto rounded-xl"
          src={imgMovil}
          loading="lazy"
          alt={alt}
        />
      </picture>

      <div className="w-full md:w-8/12 pt-4 md:p-4 text-center md:text-left space-y-4 md:space-y-7 2xl:space-y-10">
        <figcaption className="font-medium">
          <div className="text-orange-200 font-normal text-[18px] md:text-xl 2xl:text-3xl">
            {titulo}
          </div>
          <div className="text-slate-100/70 md:text-xs 2xl:text-xl">
            {subTitulo}
          </div>
        </figcaption>
        <blockquote>
          <p className="text-[14px] font-light text-white md:text-sm 2xl:text-2xl">
            {descripcion}
          </p>
        </blockquote>
        <div className="flex space-x-4 justify-end md:justify-normal">
          {btnGit}
          {btnPreview}
        </div>
      </div>
    </figure>
  );
};

export default CardProyectos;
