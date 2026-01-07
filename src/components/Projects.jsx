import { motion } from "framer-motion";
import React from "react";
import arrow from "../assets/arrow2.svg";
import web from "../assets/web11.png";


const ProjectCard = ({title, description, url, image, key, haveUrl = false}) => {
  return (
    <motion.article
      className="xl:mt-8 flex xl:gap-12 mobiles:flex-col xl:flex xl:flex-row mobiles:gap-8 mobiles:mb-12"
      key={key}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div>
      <a
  href={url}
  target="_blank"
  className={`flex align-middle text-nowrap text-white font-semibold text-l gap-2 cursor-pointer transition-colors duration-200
    ${haveUrl ? "underline hover:text-stack" : "hover:text-stack"}
  `}
>
  {title} {haveUrl && <img src={arrow} className="max-w-5" />}
</a>

        <p className="mt-2 text-wrap text-sm line leading-6">{description}</p>
      </div>
    </motion.article>
  );
};

const projectsList = [
  {
    title: "Automated Billing & Invoicing Microservice",
    description:
    "Designed an automated billing and invoicing microservice for financial transactions with strict reliability and compliance requirements. The system reduced operational risk, ensured idempotent execution, and provided full observability for long-term, low-maintenance operation..",
      url: "",
      image: web,
      haveUrl: false,
  },
  {
    title: "Scalable Image Processing REST API",
    description:
      "Designed and built a high-performance image processing API supporting secure uploads, asynchronous transformations, and CDN-optimized delivery. Achieved low-latency responses, high cache efficiency, and stable performance during traffic spikes, improving user experience while reducing backend load.",
    url: "https://github.com/yourusername/image-processing-api",
    image: web,
    haveUrl: false,
  },
  {
    title: "Custom Concurrent Task Scheduling Engine",
    description:
      "Designed a custom background task scheduling engine to handle complex dependencies, concurrency, and reliability constraints. The system executes tasks safely under concurrent workloads, supports retries and fault isolation, and delivers consistent low-latency performance in production.",
    url: "https://github.com/yourusername/concurrent-scheduler",
    image: web,
    haveUrl: false
  },
  {
    title: "Audit Recorder REST API",
    description:
    "Designed and implemented a centralized audit logging API to record and query critical business events across distributed systems. The solution ensures traceability, compliance, and reliable event capture at scale, while minimizing performance impact on core services.",
    url: "https://codeberg.org/imacedonio/audits-rest",
    image: web,
    haveUrl: true,
  }
];

export const Projects = () => {
  return (
    <section className="mb-24 mt-24" id="projects">
      <h3 className="text-xl pb-5">
       Some of my{" "}
        <strong className="font-bold text-purple-300">projects</strong>
      </h3>
      {projectsList.map((item, index) => {
        return (
          <ProjectCard
            title={item.title}
            description={item.description}
            image={item.image}
            url={item.url}
            key={index}
            haveUrl={item.haveUrl}
          />
        );
      })}
    </section>
  );
};
