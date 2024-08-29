import Titulo from "./sub_component/Titulo";
import crudPdf from "../assets/crudPdf.webp";
import apiTaskAuth from "../assets/api_task_auth.webp";
import tareaApp from "../assets/tareas_app.webp";
import tareaAppForm from "../assets/tareas_app_form.webp";
import Button from "./sub_component/Button";

import CrudProyectos from "./sub_component/CardProyectos";
import { LogoProjects } from "./sub_component/Icons";
import { Link } from "react-router-dom";
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
          imgMovil={crudPdf}
          alt={"Crud Laravel"}
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
          titulo={"MuchiAPI"}
          subTitulo={"Tecnologías: Nodejs, Express, Jwt y Mysql"}
          descripcion={
            "Una API que ofrece una capa robusta de autenticación y manejo de tareas, permitiendo a cada usuario registrado crear, editar y ver sus propias tareas de forma segura. Toda la información se almacena en una base de datos para garantizar la persistencia y privacidad de los datos. Está diseñada para ser escalable y segura."
          }
          imagen={apiTaskAuth}
          imgMovil={apiTaskAuth}
          alt={"Api de tareas con autenticación"}
          btnGit={
            <Button
              className={"animate-none shadow-sm border-none  "}
              nombre={"GitHub"}
              href={"https://github.com/JoochiDev/cv_task_auth"}
            />
          }
          btnPreview={
            <Link to={"/api_doc"}>
              <Button
                className={
                  "animate-none shadow-sm border-none md:hover:text-orange-100/90"
                }
                nombre={"Preview"}
              />
            </Link>
          }
        />
        <CrudProyectos
          titulo={"MuchiTask"}
          subTitulo={"Tecnologías: Vue 3, Tailwindcss"}
          descripcion={
            "Página para gestionar tus tareas que proporciona una interfaz sencilla y fácil de usar. Los usuarios pueden registrarse, iniciar sesión y gestionar sus tareas de manera intuitiva. La autenticación garantiza que cada usuario solo pueda acceder a sus propias tareas, ofreciendo una experiencia personalizada y segura. Implementada con MuchiAPI."
          }
          imagen={tareaApp}
          imgMovil={tareaAppForm}
          alt={"Página de gestion de tareas"}
          btnGit={
            <Button
              className={"animate-none shadow-sm border-none  "}
              nombre={"GitHub"}
              href={"https://github.com/JoochiDev/cv_task_app.git"}
            />
          }
          btnPreview={
            <Button
              className={
                "animate-none shadow-sm border-none md:hover:text-orange-100/90"
              }
              nombre={"Preview"}
              href={"https://cv-task-app.vercel.app/"}
            />
          }
        />
      </div>
    </div>
  );
}
