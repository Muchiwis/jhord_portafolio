import { useState } from "react";
import { Close, Menu, LogoDev } from "./sub_component/Icons";

export default function Navegacion() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const content = (
    <>
      <div className="sm:hidden block absolute top-20 w-full left-0 right-0 bg-gradient-to-r from-[#110e1b] from-10% to-[#0d1b2a] transition">
        <ul className="flex flex-col justify-center p-10 pt-5 text-center text-xl border-t-2 border-[#faf3dd] border-opacity-50">
          <li>
            <a
              href="mailto:jhordcristian76@gmail.com"
              className="my-2 py-3 list-item text-sm border-b border-[#faf3dd] hover:bg-[#faf3dd] hover:bg-opacity-55 hover:rounded"
            >
              CONTACTO
            </a>
          </li>
          <li>
            <a
              href="/#proyectos"
              className="my-2 py-3 list-item text-sm border-b border-[#faf3dd] hover:bg-[#faf3dd] hover:bg-opacity-55 hover:rounded"
            >
              PROYECTOS
            </a>
          </li>
          <li>
            <a
              href="/#sobre-mi"
              className="my-2 py-3 list-item text-sm border-b border-[#faf3dd] hover:bg-[#faf3dd] hover:bg-opacity-55 hover:rounded"
            >
              SOBRE MI
            </a>
          </li>
        </ul>
      </div>
    </>
  );
  return (
    <nav className="h-full  py-2  2xl:py-3 max-sm:py-5">
      <div className="h-10vh flex justify-between z-50 text-[#faf3dd] md:px-16 px-6 lg:py-2 md:py-1">
        <div className="flex items-center flex-1 space-x-2">
          <a href="/#home">
            <LogoDev
              className={"md:w-[40px] md:h-[40px] 2xl:w-[60px] 2xl:h-[60px]"}
            />
          </a>
          <div className="flex items-center justify-center">
            <span className="md:text-md text-md font-medium text-[#faf3dd] sm:text-verdeBase leading-4 lg:text-md lg:leading-4 2xl:text-3xl 2xl:leading-10">
              MuchiDev
            </span>
          </div>
        </div>
        <div className="lg:flex md:flex sm:flex lg:flex-1 items-center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 mr-16 text-2xl">
              <li>
                <a
                  href="/#proyectos"
                  className="text-gray-100 text-sm hover:text[#faf3dd] transition   cursor-pointer 2xl:text-[25px] font-normal text-opacity-70"
                >
                  PROYECTOS
                </a>
              </li>
              <li>
                <a
                  href="mailto:jhordcristian76@gmail.com"
                  target="_blank"
                  className="text-gray-100 text-sm hover:text-[#faf3dd] transition   cursor-pointer 2xl:text-[25px] font-normal text-opacity-70"
                >
                  CONTACTO
                </a>
              </li>
              <li>
                <a
                  href="/#sobre-mi"
                  className="text-gray-100 text-sm hover:text-[#faf3dd] hover:opacity-100 transition   cursor-pointer 2xl:text-[25px] font-normal text-opacity-70"
                >
                  SOBRE MI
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>{click && content}</div>
        <button
          className="block sm:hidden transition"
          onClick={handleClick}
          aria-label={click ? "Close menu" : "Open menu"}
        >
          {click ? <Close /> : <Menu />}
        </button>
      </div>
    </nav>
  );
}
