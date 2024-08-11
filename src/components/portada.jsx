import imgPortada from "../assets/fondo_real.webp";
import Button from "./sub_component/Button";
import { Linkedin, Github } from "./sub_component/Icons";

export default function Portada() {
  return (
    <div className="flex-grow flex flex-col-reverse md:flex-row justify-center items-center md:justify-center md:items-center gap-10 md:gap-0">
      <div className="w-10/12 md:w-6/12 2xl:w-7/12 space-y-10 md:space-y-14">
        <h1 className=" text-white text-2xl md:text-5xl">
          Hola, soy{" "}
          <span className="md:text-5xl 2xl:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-[#FFAD60]  to-[#FFEEAD]">
            Jhord Cristian
          </span>
        </h1>
        <div className="flex flex-col gap-4">
          <p className="text-[#faf3dd] text-base font-light leading-7 md:leading-loose 2xl:text-4xl 2xl:leading-normal ">
            Soy un trainee en desarrollo full stack con un enfoque particular en
            el backend. Me especializo en construir la lógica del servidor y en
            desarrollar soluciones robustas y eficientes, mientras continúo
            aprendiendo sobre el diseño y la implementación de la interfaz de
            usuario.
          </p>
          <div className="flex flex-row gap-5">
            <a
              href="https://www.linkedin.com/in/jhord-cristian-undefined-46966a322/"
              target="_blank"
            >
              <Linkedin />
            </a>
            <a href="https://github.com/Muchiwis" target="_blank">
              <Github className={"w-[25px] h-[25px]"} />
            </a>
          </div>
        </div>

        <Button
          nombre={"Descargar CV"}
          href={"./JhordHuacchoHuamanCV.pdf"}
          className="md:px-7 md:py-3 md:text-lg "
          download
        />
      </div>
      <div className="w-10/12 md:w-4/12">
        <img
          src={imgPortada}
          alt="Perfil Portada"
          className="h-full"
          loading="lazy"
        />
      </div>
    </div>
  );
}
