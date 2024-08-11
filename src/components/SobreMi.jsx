import { User } from "./sub_component/Icons";
import Titulo from "./sub_component/Titulo";
import imgJhord from "../assets/fondo_real.webp";
export default function SobreMi() {
  return (
    <div className="flex flex-col w-full gap-4">
      <div className="flex items-center gap-2">
        <User />
        <Titulo
          valor={"Sobre mí"}
          className={"from-orange-300  to-orange-100"}
        />
      </div>

      <div className="flex flex-col-reverse md:flex-row bg-[#110e1b]/60 border border-orange-200 rounded-lg p-6 2xl:p-10 gap-4 w-full h-auto shadow-2xl  shadow-orange-200/30">
        <div className="flex flex-col w-full 2xl:w-8/12 md:gap-6 gap-7 ">
          <h1 className="text-orange-200 font-normal text-lg md:text-xl 2xl:text-3xl">
            ¿Quién es Jhord Cristian?
          </h1>
          <p className="text-[#faf3dd] font-light text-sm md:text-base 2xl:text-2xl leading-6 md:leading-loose 2xl:leading-loose">
            Soy egresado técnico en Desarrollo de Sistemas de Información y
            actualmente estoy en un rol de trainee. Mi enfoque principal es el
            desarrollo backend, pero tengo la aspiración de convertirme en un
            desarrollador full stack. Resido en Perú, tengo 25 años, y mi pasión
            por la programación nació mientras culminaba mi carrera, continuando
            como autodidacta. Estoy comprometido con el aprendizaje continuo y
            la implementación de tecnologías modernas para crear aplicaciones
            web robustas, seguras y de alto rendimiento.
          </p>
        </div>

        <div className="flex justify-center items-center overflow-hidden transform rotate-6 border border-orange-400/60 rounded-lg w-6/12 md:w-4/12 2xl:w-3/12 m-auto bg-gray-100/70">
          <img
            src={imgJhord}
            alt="Imagen sobre mí"
            loading="lazy"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
