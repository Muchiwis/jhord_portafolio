import Navegacion from "../components/navegacion";
import Portada from "../components/portada";
import Proyectos from "../components/Proyectos";
import Skills from "../components/Skills";
import SobreMi from "../components/SobreMi";
import Button from "../components/sub_component/Button";
import { ArroyDown } from "../components/sub_component/Icons";
export default function Home() {
  return (
    <div className="flex flex-col justify-center gap-y-10 bg-gradient-to-r from-[#110e1b] from-10% to-[#0d1b2a]">
      <div className="flex flex-col min-h-screen" id="home">
        <div className="basis-1/12 relative z-20">
          <Navegacion />
        </div>
        <div className="flex-grow flex">
          <Portada />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex basis-11/12 lg:basis-10/12">
          <Skills />
        </div>
      </div>
      <div className="flex justify-center" id="proyectos">
        <div className="flex basis-11/12 lg:basis-10/12">
          <Proyectos />
        </div>
      </div>
      <div className="flex justify-center" id="sobre-mi">
        <div className="flex basis-11/12 lg:basis-10/12">
          <SobreMi />
        </div>
      </div>
      <div className="flex justify-center mb-6">
        <div className="flex basis-11/12 lg:basis-10/12 w-full">
          <div className="flex flex-col items-center justify-end w-full h-auto gap-y-1.5">
            <ArroyDown className={"animate-bounce"} />

            <Button
              nombre={"Contactarme"}
              className={"animate-none text-white"}
              href={"mailto:jhordcristian76@gmail.com"}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-6">
        <p className="text-gray-500">© 2024 JhoochiDev.</p>
      </div>
    </div>
  );
}
