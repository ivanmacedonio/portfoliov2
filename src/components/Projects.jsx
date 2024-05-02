import { motion } from "framer-motion";
import React from "react";
import arrow from "../assets/arrow2.svg";
import web5 from "../assets/back1.png";
import web6 from "../assets/back2.png";
import web7 from "../assets/back4.png";
import web from "../assets/web.webp";
import web2 from "../assets/web2.webp";
import web3 from "../assets/web3.webp";
import web4 from "../assets/web4.webp";
export const Projects = () => {
  return (
    <section className="mb-24 mt-24" id="projects">
      <h3 className="text-xl">
        Algunos proyectos{" "}
        <strong className="font-bold text-purple-300">Freelance</strong>
      </h3>
      <article className="xl:mt-8 flex xl:gap-12 mobiles:flex-col xl:flex xl:flex-row mobiles:gap-8 mobiles:mb-12">
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
      <article className="xl:mt-12 flex xl:gap-12 mobiles:flex-col xl:flex xl:flex-row mobiles:gap-8 mobiles:mb-12">
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
      <article className="xl:mt-12 flex xl:gap-12 mobiles:flex-col xl:flex xl:flex-row mobiles:gap-8 mobiles:mb-12">
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
      <article className="xl:mt-12 flex xl:gap-12 mobiles:flex-col xl:flex xl:flex-row mobiles:gap-8 mobiles:mb-12">
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
            Portfolio para una agencia de Software desarrollado con HTML,
            Tailwind, SaSS y React
          </p>
        </div>
      </article>
      <article className="xl:mt-12 flex xl:gap-12 mobiles:flex-col xl:flex xl:flex-row mobiles:gap-8 mobiles:mb-12">
        <div>
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
            src={web5}
            alt=""
            className="max-w-56 rounded cursor-pointer"
          />
        </div>
        <div>
          <a
            href="https://github.com/ivanmacedonio/passwords-manager-api"
            target="_blank"
            className="flex align-middle text-nowrap text-white font-semibold text-l gap-2 hover:text-stack cursor-pointer transition-colors duration-200"
          >
            Password Manager API <img src={arrow} className="max-w-5" />
          </a>
          <p className="mt-2 text-wrap text-sm line leading-6">
            API para una aplicación de administración de claves desarrollada con
            Node y Sequelize como ORM, usando una base de datos MySQL y un
            sistema de Basic Auth vía Cookies / Middleware
          </p>
        </div>
      </article>
      <article className="xl:mt-12 flex xl:gap-12 mobiles:flex-col xl:flex xl:flex-row mobiles:gap-8 mobiles:mb-12">
        <div>
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
            src={web6}
            alt=""
            className="max-w-56 rounded cursor-pointer"
          />
        </div>
        <div>
          <a
            href="https://github.com/ivanmacedonio/websocketCHATV1"
            target="_blank"
            className="flex align-middle text-nowrap text-white font-semibold text-l gap-2 hover:text-stack cursor-pointer transition-colors duration-200"
          >
            Realtime Chat API <img src={arrow} className="max-w-5" />
          </a>
          <p className="mt-2 text-wrap text-sm line leading-6">
            API de Chat en tiempo real desarrollado con Django usando
            comunicación bidireccional en tiempo real con Django-Websockets
          </p>
        </div>
      </article>
      <article className="xl:mt-12 flex xl:gap-12 mobiles:flex-col xl:flex xl:flex-row mobiles:gap-8 mobiles:mb-12">
        <div>
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
            src={web7}
            alt=""
            className="max-w-56 rounded cursor-pointer"
          />
        </div>
        <div>
          <a
            href="https://github.com/ivanmacedonio/api-blog-chat-jwt"
            target="_blank"
            className="flex align-middle text-nowrap text-white font-semibold text-l gap-2 hover:text-stack cursor-pointer transition-colors duration-200"
          >
            Blog API <img src={arrow} className="max-w-5" />
          </a>
          <p className="mt-2 text-wrap text-sm line leading-6">
            API para un blog desarrollado en Django REST, usando una base de datos SQL y un sistema de Autenticación JWT
          </p>
        </div>
      </article>
      <article className="xl:mt-12 flex xl:gap-12 mobiles:flex-col xl:flex xl:flex-row mobiles:gap-8 mobiles:mb-12">
        <div>
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
            src={web5}
            alt=""
            className="max-w-56 rounded cursor-pointer"
          />
        </div>
        <div>
          <a
            href="https://github.com/ivanmacedonio/api-blog-chat-jwt"
            target="_blank"
            className="flex align-middle text-nowrap text-white font-semibold text-l gap-2 hover:text-stack cursor-pointer transition-colors duration-200"
          >
            JWT CRUD <img src={arrow} className="max-w-5" />
          </a>
          <p className="mt-2 text-wrap text-sm line leading-6">
            API desarrollada en Node con Express, usando el ORM Sequelize, un sistema de Autenticación JWT y Paginación 
          </p>
        </div>
      </article>
    </section>
  );
};
