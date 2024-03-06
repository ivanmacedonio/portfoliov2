import { motion } from "framer-motion";
import React from "react";
import arrow from '../src/assets/arrow.svg';
import git from "../src/assets/github.svg";
import linkedin from "../src/assets/linkedin.svg";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
function App() {
  return (
    <>
      <section className="grid grid-cols-2 px-16 font-san text-main w-65% m-auto mt-28 ">
        <div className="fixed">
          <h1 className="text-5xl font-bold text-nowrap">Iván Macedonio</h1>
          <h3 className="text-2xl font-light py-3 w-3/4 text-wrap ">
            Desarrollador Fullstack & Fundador de Bixo
          </h3>
          <a href="" className="flex align-middle gap- font-bold my-4 border-solid border-cv border-stack w-fit px-4 py-1 rounded text-stack ">
            Descargar CV <img src={arrow} alt="" className="w-6" />
          </a>
          <p className="text-parraph font-normal text-gray-400 w-65%">
            Creo experiencias digitales atractivas, seguras y accesibles.
          </p>
          <div className="mt-16 flex flex-col gap-3 font-semibold text-gray-400 mb-16">
            <a
              href="#"
              className="hover:cursor-pointer hover:text-white transition-colors w-fit flex items-center gap-4"
              onMouseEnter={() => {
                document.getElementById("hr-element").classList.remove("w-8");
                document.getElementById("hr-element").classList.add("w-14");
                console.log("enter");
              }}
              onMouseLeave={() => {
                document.getElementById("hr-element").classList.remove("w-14");
                document.getElementById("hr-element").classList.add("w-8");
                console.log("left");
              }}
            >
              <hr
                id="hr-element"
                style={{ transition: "width 0.3s" }}
                className="w-8"
              />{" "}
              Sobre mí
            </a>
            <a
              href="#"
              className="hover:cursor-pointer hover:text-white transition-colors w-fit flex items-center gap-4"
              onMouseEnter={() => {
                document.getElementById("hr-element2").classList.remove("w-8");
                document.getElementById("hr-element2").classList.add("w-14");
                console.log("enter");
              }}
              onMouseLeave={() => {
                document.getElementById("hr-element2").classList.remove("w-14");
                document.getElementById("hr-element2").classList.add("w-8");
                console.log("left");
              }}
            >
              <hr
                id="hr-element2"
                style={{ transition: "width 0.3s" }}
                className="w-8"
              />{" "}
              Stack & Experiencia
            </a>
            <a
              href="#"
              className="hover:cursor-pointer hover:text-white transition-colors w-fit flex items-center gap-4"
              onMouseEnter={() => {
                document.getElementById("hr-element3").classList.remove("w-8");
                document.getElementById("hr-element3").classList.add("w-14");
                console.log("enter");
              }}
              onMouseLeave={() => {
                document.getElementById("hr-element3").classList.remove("w-14");
                document.getElementById("hr-element3").classList.add("w-8");
                console.log("left");
              }}
            >
              <hr
                id="hr-element3"
                style={{ transition: "width 0.3s" }}
                className="w-8"
              />{" "}
              Proyectos
            </a>
          </div>
          <div className="flex gap-4">
            <motion.img
              initial={{ y: 0 }}
              whileHover={{ y: -7 }}
              transition={{ duration: 0.2 }}
              src={git}
              alt=""
              className="w-image hover:cursor-pointer"
            />
            <motion.img
              initial={{ y: 0 }}
              whileHover={{ y: -7 }}
              transition={{ duration: 0.2 }}
              src={linkedin}
              alt=""
              className="w-image hover:cursor-pointer"
            />
          </div>
        </div>
        <div className="text-gray-400 text-description font-medium col-start-2">
          <p className="pb-4">
            En 2020 Decidí introducirme al mundo del{" "}
            <strong className="text-white font-semibold ">
              desarrollo web
            </strong>
            . Comencé como freelancer, práctica que vengo manteniendo hasta el
            día de hoy, lo que me llevo a fundar
            <strong className="text-white font-semibold">
              {" "}
              Bixo: Una agencia de desarrollo web
            </strong>{" "}
            para clientes del exterior.
          </p>
          <p className="pb-4">
            Antes de conseguir mi primer empleo, estudie de forma{" "}
            <strong className="text-white font-semibold">autodidacta </strong>
            las bases del desarrollo{" "}
            <strong className="font-semibold text-white">Backend</strong> para
            posteriormente aprender{" "}
            <strong className="font-semibold text-white">Frontend</strong>. Pase
            por varias empresas en las cuales aprendí muchísimo y logré
            consolidar mi actual stack de tecnologías. Amo el diseño, y
            combinarlo con la lógica que amerita un sitio web es algo que me{" "}
            <strong className="font-semibold text-white">llena</strong>.
            Constantemente busco{" "}
            <strong className="font-bold text-white">aprender</strong> nuevas
            tecnologias, nunca se sabe cuando se las necesita.
          </p>{" "}
          <p className="pb-4">
            Cuando no estoy frente a la computadora, normalmente estoy escalando
            montañas, leyendo, saliendo con amigos o jugando videojuegos, tengo
            días muy{" "}
            <strong className="text-semibold text-white">variados</strong>.
          </p>
          <div className="mt-24">
            <Experience></Experience>
          </div>
          <div>
            <Projects />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
