import Titulo from "./sub_component/Titulo";
import Card from "./sub_component/Card";
import {
  Laravel,
  Php,
  Nodejs,
  Mysql,
  Github,
  Javascript,
  Html,
  Css,
  React,
  Vue,
  Tailwindcss,
  Bootstrap,
  LogoSkill,
} from "./sub_component/Icons";
export default function Skills() {
  return (
    <div className="flex flex-col w-full gap-6">
      <div className="flex items-center">
        <LogoSkill />
        <Titulo valor={"Habilidades"} className={"text-2xl"} />
      </div>
      <div className="flex flex-wrap w-full justify-around bg-orange-400 bg-opacity-5 rounded  shadow-2xl shadow-orange-300/50">
        <Card
          icon={
            <Laravel
              className={
                "md:w-16 md:h-16 2xl:w-28 2xl:h-28 hover:animate-bounce-custom cursor-pointer"
              }
            />
          }
          cardTitle={"Laravel"}
        />
        <Card
          icon={
            <Php
              className={
                "md:w-16 md:h-16 2xl:w-28 2xl:h-28 hover:animate-bounce-custom cursor-pointer"
              }
              clas
            />
          }
          cardTitle={"Php"}
        />
        <Card
          icon={
            <Nodejs
              className={
                "md:w-16 md:h-16 2xl:w-28 2xl:h-28 hover:animate-bounce-custom cursor-pointer"
              }
              clas
            />
          }
          cardTitle={"Node js"}
        />
        <Card
          icon={
            <Mysql
              className={
                "md:w-16 md:h-16 2xl:w-28 2xl:h-28 hover:animate-bounce-custom cursor-pointer"
              }
              clas
            />
          }
          cardTitle={"Mysql"}
        />
        <Card
          icon={
            <Github
              className={
                "md:w-16 md:h-16 2xl:w-28 2xl:h-28 hover:animate-bounce-custom cursor-pointer"
              }
              clas
            />
          }
          cardTitle={"Github"}
        />
        <Card
          icon={
            <Javascript
              className={
                "md:w-16 md:h-16 2xl:w-28 2xl:h-28 hover:animate-bounce-custom cursor-pointer"
              }
              clas
            />
          }
          cardTitle={"Javascript"}
        />
        <Card
          icon={
            <Html
              className={
                "md:w-16 md:h-16 2xl:w-28 2xl:h-28 hover:animate-bounce-custom cursor-pointer"
              }
              clas
            />
          }
          cardTitle={"Html"}
        />
        <Card
          icon={
            <Css
              className={
                "md:w-16 md:h-16 2xl:w-28 2xl:h-28 hover:animate-bounce-custom cursor-pointer"
              }
              clas
            />
          }
          cardTitle={"Css"}
        />
        <Card
          icon={
            <React
              className={
                "md:w-16 md:h-16 2xl:w-28 2xl:h-28 hover:animate-bounce-custom cursor-pointer"
              }
              clas
            />
          }
          cardTitle={"React"}
        />
        <Card
          icon={
            <Vue
              className={
                "md:w-16 md:h-16 2xl:w-28 2xl:h-28 hover:animate-bounce-custom cursor-pointer"
              }
              clas
            />
          }
          cardTitle={"Vue"}
        />
        <Card
          icon={
            <Tailwindcss
              className={
                "md:w-16 md:h-16 2xl:w-28 2xl:h-28 hover:animate-bounce-custom cursor-pointer"
              }
              clas
            />
          }
          cardTitle={"Tailwindcss"}
        />
        <Card
          icon={
            <Bootstrap
              className={
                "md:w-16 md:h-16 2xl:w-28 2xl:h-28 hover:animate-bounce-custom cursor-pointer"
              }
              clas
            />
          }
          cardTitle={"Bootstrap"}
        />
      </div>
    </div>
  );
}
