import Button from "./sub_component/Button";
import { EmailLogo } from "./sub_component/Icons";
import Titulo from "./sub_component/Titulo";
export default function Contacto() {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <EmailLogo />
        <Titulo valor={"Contacto"} />
      </div>

      <form className="border border-cyan-400 2xl:p-8 p-6 rounded-xl shadow-2xl  shadow-cyan-400/20">
        <div className="space-y-0">
          <div className="border-b border-gray-900/10">
            <p className="mt-1 text-sm md:text-base 2xl:text-2xl leading-6 text-gray-100">
              Enviame un correo, si te interesa trabajar conmigo.
            </p>
            <div className="border-b border-gray-900/10 pb-4">
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm md:text-base 2xl:text-xl font-medium leading-6 text-gray-100"
                  >
                    Nombre
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md px-2 border-0 py-1.5 2xl:py-3.5 text-[#110e1b] shadow-sm  sm:text-sm md:text-base 2xl:text-2xl sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="email"
                    className="block text-sm md:text-base 2xl:text-xl font-medium leading-6 text-gray-100"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md px-2 border-0 py-1.5 2xl:py-3.5 text-[#110e1b] shadow-sm placeholder:text-gray-400 sm:text-sm md:text-base 2xl:text-2xl sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block text-sm md:text-base 2xl:text-xl font-medium leading-6 text-gray-100"
                  >
                    Descripción
                  </label>
                  <div className="mt-2">
                    <textarea
                      className="block w-full rounded-md px-2 border-0 py-1.5  2xl:py-3.5 text-[#110e1b] shadow-sm  sm:text-sm md:text-base 2xl:text-2xl sm:leading-6"
                      type="text"
                      name="last-name"
                      autoComplete="family-name"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end w-full h-auto">
            <Button
              nombre={"Contactarme"}
              href={"mailto:jhordcristian76@gmail.com"}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
