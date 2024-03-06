import React from "react";
import arrow from "../assets/arrow2.svg";
import web from "../assets/web.webp";
import web2 from "../assets/web2.webp";
import web3 from "../assets/web3.webp";
import web4 from "../assets/web4.webp";
export const Projects = () => {
  return (
    <seciton>
      <article className="mt-24 flex gap-12">
        <div>
          <img src={web} alt="" className="max-w-56 rounded" />
        </div>
        <div>
          <h3 className="flex align-middle text-nowrap text-white font-semibold text-l gap-2">
            Francisco Pedroza <img src={arrow} className="max-w-5" />
          </h3>
          <p className="mt-2 text-wrap text-sm line leading-6">
            Landing page desarrollada con React y Framer Motion para un Editor
            de videos Freelancer. Gestion de contenido con Firebase,
            optimizacion y buenas practicas
          </p>
        </div>
      </article>
      <article className=" mt-12 flex gap-12">
        <div>
          <img src={web2} alt="" className="max-w-56 rounded" />
        </div>
        <div>
          <h3 className="flex align-middle text-nowrap text-white font-semibold text-l gap-2">
            Vandalia <img src={arrow} className="max-w-5" />
          </h3>
          <p className="mt-2 text-wrap text-sm line leading-6">
            Ecommerce desarrollado con React, Redux, Express y Mongo. Sistema de
            usuarios, carrito de compras, pasarela de pago y chatbot.
          </p>
        </div>
      </article>
      <article className=" mt-12 flex gap-12">
        <div>
          <img src={web3} alt="" className="max-w-56 rounded" />
        </div>
        <div>
          <h3 className="flex align-middle text-nowrap text-white font-semibold text-l gap-2">
            Rockit <img src={arrow} className="max-w-5" />
          </h3>
          <p className="mt-2 text-wrap text-sm line leading-6">
            Landing page simple desarrollado para una empresa Canadience con el
            fin de publicitar su aplicacion pasarela de pago
          </p>
        </div>
      </article>
      <article className=" mt-12 flex gap-12">
        <div>
          <img src={web4} alt="" className="max-w-56 rounded" />
        </div>
        <div>
          <h3 className="flex align-middle text-nowrap text-white font-semibold text-l gap-2">
            Bixo <img src={arrow} className="max-w-5" />
          </h3>
          <p className="mt-2 text-wrap text-sm line leading-6">
            Portfolio para mi agencia de Software desarrollado con HTML,
            Tailwind, SaSS y React
          </p>
        </div>
      </article>
    </seciton>
  );
};
