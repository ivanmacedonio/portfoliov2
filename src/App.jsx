import { color, motion } from "framer-motion";
import React from "react";
import arrow from "../src/assets/arrow.svg";
import git from "../src/assets/github.svg";
import linkedin from "../src/assets/linkedin.svg";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
function App() {
  return (
    <>
      <section className="xl:grid grid-cols-2 md:flex md:flex-col px-16 mobiles:px-8 font-san text-main xl:w-80% md:w-full 2xl:w-65% m-auto mt-28 ">
        <motion.div
          initial={{ y: -15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="xl:fixed md:block"
        >
          <motion.h1 className="xl:text-4xl 2xl:text-5xl mobiles:text-4xl  font-bold text-nowrap">
            Iván Macedonio
          </motion.h1>
          <motion.h3 className="2xl:text-2xl xl:text-xl  mobiles:text-xl font-light py-3 w-3/4 text-wrap ">
            Desarrollador de Software
          </motion.h3>
          <motion.p className="text-parraph font-normal text-gray-400 w-65%">
            Creo experiencias digitales escalables, seguras y atractivas.
          </motion.p>
          <a
            href="https://drive.google.com/file/d/14QFfgfWRC0Srj93iPIjXOGtrQRtrNRjh/view?usp=sharing"
            target="_blank"
            className="flex align-middle gap- font-bold my-4 border-solid border-cv border-stack w-fit px-4 py-1 rounded text-stack"
          >
            Descargar CV <img src={arrow} alt="" className="w-6" />
          </a>

          <div className="mt-16 flex flex-col gap-3 font-semibold text-gray-400 mb-16 mobiles:mb-12">
            <a
              href="#about"
              className="hover:cursor-pointer hover:text-white transition-colors w-fit flex items-center gap-4"
              onMouseEnter={() => {
                document.getElementById("hr-element").classList.remove("w-8");
                document.getElementById("hr-element").classList.add("w-14");
              }}
              onMouseLeave={() => {
                document.getElementById("hr-element").classList.remove("w-14");
                document.getElementById("hr-element").classList.add("w-8");
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
              href="#stack"
              className="hover:cursor-pointer hover:text-white transition-colors w-fit flex items-center gap-4"
              onMouseEnter={() => {
                document.getElementById("hr-element2").classList.remove("w-8");
                document.getElementById("hr-element2").classList.add("w-14");
              }}
              onMouseLeave={() => {
                document.getElementById("hr-element2").classList.remove("w-14");
                document.getElementById("hr-element2").classList.add("w-8");
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
              href="#projects"
              className="hover:cursor-pointer hover:text-white transition-colors w-fit flex items-center gap-4"
              onMouseEnter={() => {
                document.getElementById("hr-element3").classList.remove("w-8");
                document.getElementById("hr-element3").classList.add("w-14");
              }}
              onMouseLeave={() => {
                document.getElementById("hr-element3").classList.remove("w-14");
                document.getElementById("hr-element3").classList.add("w-8");
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
          <div className="flex gap-4 mobiles:mb-12">
            <a
              href="https://www.linkedin.com/in/iv%C3%A1n-macedonio-544056245/"
              target="_blank"
            >
              {" "}
              <motion.img
                initial={{ y: 0 }}
                whileHover={{ y: -7 }}
                transition={{ duration: 0.2 }}
                src={linkedin}
                alt=""
                className="w-image hover:cursor-pointer"
              />
            </a>
          </div>
        </motion.div>
        <div
          className="text-gray-400 text-description font-medium col-start-2"
          id="about"
        >
          <p>
            Como desarrollador de software full-stack, aplico de forma constante
            los principios SOLID, los patrones de diseño más relevantes y los
            lineamientos de la Clean Architecture para construir soluciones
            escalables, mantenibles y orientadas a largo plazo. Mi enfoque
            combina tanto el backend como el frontend, asegurando que cada
            aplicación sea robusta en su lógica interna, eficiente en su
            rendimiento y cuidada en su presentación visual.{" "}

            <b style={{color: "#cacccb"}}>
              Trabajo con una mentalidad centrada en la calidad del código, la
              experiencia del usuario y la colaboración efectiva con equipos
              multidisciplinarios.
            </b>
            {""} Mi objetivo es contribuir activamente al éxito de los proyectos en
            los que participo, generando valor tanto en lo técnico como en lo
            estratégico.
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
