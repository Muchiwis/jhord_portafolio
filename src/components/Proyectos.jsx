import Titulo from "./sub_component/Titulo";
import crudPdf from "../assets/crudPdf.webp";
import todoApp from "../assets/todoApp.webp";
import Button from "./sub_component/Button";
import CrudProyectos from "./sub_component/CardProyectos";
import { LogoProjects } from "./sub_component/Icons";
export default function Proyectos() {
  return (
    <div className="flex flex-col w-full gap-8">
      <div className="flex items-center gap-2">
        <LogoProjects className={"text-blac"} />
        <Titulo valor={"Proyectos"} />
      </div>
      <div className="flex flex-wrap w-full gap-10">
        <CrudProyectos
          titulo={"Sistema de ventas básico"}
          subTitulo={"Tecnologías: Laravel, Tailwindcss"}
          descripcion={
            "CRUD básico en Laravel 10 que permite gestionar ventas de ejemplo y generar PDFs demostrativos. Incluye autenticación con Laravel Breeze y roles de usuario para gestionar permisos."
          }
          imagen={crudPdf}
          alt={"Curd Laravel"}
          btnGit={
            <Button
              nombre={"GitHub"}
              className={"animate-none shadow-sm border-none"}
              href={"https://github.com/Muchiwis/cv_crud_pdf_breeze"}
            />
          }
          btnPreview={
            <Button
              nombre={"Preview"}
              href={"#"}
              className={"animate-none shadow-sm border-none"}
            />
          }
        />
        <CrudProyectos
          titulo={"Todo App"}
          subTitulo={"Tecnologías: Vue, Tailwindcss"}
          descripcion={
            "CRUD básico en Laravel 10 que permite gestionar ventas de ejemplo y generar PDFs demostrativos. Incluye autenticación con Laravel Breeze y roles de usuario para gestionar permisos."
          }
          imagen={todoApp}
          alt={"Todo App"}
          btnGit={
            <Button
              className={"animate-none shadow-sm border-none  "}
              nombre={"GitHub"}
              href={"https://github.com/Muchiwis/cv_todo_app"}
            />
          }
          btnPreview={
            <Button
              className={
                "animate-none shadow-sm border-none md:hover:text-orange-100/90"
              }
              nombre={"Preview"}
              href={"https://cv-todo-app.vercel.app/"}
            />
          }
        />
      </div>
    </div>
  );
}
