import { motion } from "framer-motion";
import React from "react";
import arrow from "../assets/arrow2.svg";
import web from "../assets/web.webp";
import web2 from "../assets/web2.webp";
import web3 from "../assets/web3.webp";
import web4 from "../assets/web4.webp";
export const Projects = () => {
  return (
    <section className="mb-24" id="projects">
      <article className="mt-24 flex gap-12">
        <div>
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
            src={web}
            alt=""
            className="max-w-56 rounded cursor-pointer"
          />
        </div>
        <div>
          <a
            href="https://franciscopedroza.netlify.app/"
            target="_blank"
            className="flex align-middle text-nowrap text-white font-semibold text-l gap-2 hover:text-stack cursor-pointer transition-colors duration-200"
          >
            Francisco Pedroza <img src={arrow} className="max-w-5" />
          </a>
          <p className="mt-2 text-wrap text-sm line leading-6">
            Landing page desarrollada con React y Framer Motion para un Editor
            de videos Freelancer. Gestion de contenido con Firebase,
            optimizacion y buenas practicas
          </p>
        </div>
      </article>
      <article className=" mt-12 flex gap-12">
        <div>
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
            src={web2}
            alt=""
            className="max-w-56 rounded cursor-pointer"
          />
        </div>
        <div>
          <a
            href="https://www.vandalia.com.ar/"
            target="_blank"
            className="flex align-middle text-nowrap text-white font-semibold text-l gap-2 hover:text-stack cursor-pointer transition-colors duration-200"
          >
            Vandalia <img src={arrow} className="max-w-5" />
          </a>
          <p className="mt-2 text-wrap text-sm line leading-6">
            Ecommerce desarrollado con React, Redux, Express y Mongo. Sistema de
            usuarios, carrito de compras, pasarela de pago y chatbot.
          </p>
        </div>
      </article>
      <article className=" mt-12 flex gap-12">
        <div>
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
            src={web3}
            alt=""
            className="max-w-56 rounded cursor-pointer"
          />
        </div>
        <div>
          <a
            href="https://rockit-dev.netlify.app/"
            target="_blank"
            className="flex align-middle text-nowrap text-white font-semibold text-l gap-2 hover:text-stack cursor-pointer transition-colors duration-200"
          >
            Rockit <img src={arrow} className="max-w-5" />
          </a>
          <p className="mt-2 text-wrap text-sm line leading-6">
            Landing page simple desarrollado para una empresa Canadience con el
            fin de publicitar su aplicacion pasarela de pago
          </p>
        </div>
      </article>
      <article className=" mt-12 flex gap-12">
        <div>
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
            src={web4}
            alt=""
            className="max-w-56 rounded cursor-pointer"
          />
        </div>
        <div>
          <a
            href="https://bixo.pro/"
            target="_blank"
            className="flex align-middle text-nowrap text-white font-semibold text-l gap-2 hover:text-stack cursor-pointer transition-colors duration-200"
          >
            Bixo <img src={arrow} className="max-w-5" />
          </a>
          <p className="mt-2 text-wrap text-sm line leading-6">
            Portfolio para mi agencia de Software desarrollado con HTML,
            Tailwind, SaSS y React
          </p>
        </div>
      </article>
    </section>
  );
};
