import { motion } from "framer-motion";
import React from "react";
import arrow from "../assets/arrow2.svg";
import web7 from "../assets/back4.png";
import web from "../assets/web11.png";
import web4 from "../assets/web4.webp";


const ProjectCard = ({title, description, url, image, key}) => {
  return (
    <motion.article
      className="xl:mt-8 flex xl:gap-12 mobiles:flex-col xl:flex xl:flex-row mobiles:gap-8 mobiles:mb-12"
      key={key}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div>
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
          src={image}
          alt=""
          className="max-w-56 rounded cursor-pointer"
          onClick={() => {
            window.open(url, '_blank')
          }}
        />
      </div>
      <div>
        <a
          href={url}
          target="_blank"
          className="flex align-middle text-nowrap text-white font-semibold text-l gap-2 hover:text-stack cursor-pointer transition-colors duration-200"
        >
          {title} <img src={arrow} className="max-w-5" />
        </a>
        <p className="mt-2 text-wrap text-sm line leading-6">{description}</p>
      </div>
    </motion.article>
  );
};

const projectsList = [
  {
    title: "Proceso de facturación concurrente",
    description:
      "Proceso de facturación desarrollado con Flask aplicando programación concurrente, arquitectura hexagonal y third-party AFIPWS",
    url: "https://github.com/ivanmacedonio/invoice_process",
    image: web7,
  },
  {
    title: "RockPay",
    description:
      "Landing page desarrollada con React y Framer Motion para una App de pasarela de pago.",
    url: "https://rockpay.eu/",
    image: web,
  },
  {
    title: "Bixo",
    description:
      "Portfolio para una agencia de Software desarrollado con HTML, Tailwind, SaSS y React",
    url: "https://bixo.netlify.app/",
    image: web4,
  }
];

export const Projects = () => {
  return (
    <section className="mb-24 mt-24" id="projects">
      <h3 className="text-xl pb-12">
       Algunos de mis{" "}
        <strong className="font-bold text-purple-300">proyectos</strong>
      </h3>
      {projectsList.map((item, index) => {
        return (
          <ProjectCard
            title={item.title}
            description={item.description}
            image={item.image}
            url={item.url}
            key={index}
          />
        );
      })}
    </section>
  );
};
