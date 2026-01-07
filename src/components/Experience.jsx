import React from "react";
import { motion } from "framer-motion";

export const Experience = () => {
  const experienceList = [
    {
      date: "Aug 2025 - now",
      title: "Backend Engineer",
      enterprice: "MercadoLibre",
      description: "Designed and operated high-availability backend services in a high-traffic production environment. Led legacy system modernization, improving reliability, scalability, and long-term maintainability. These changes reduced operational risk, stabilized performance under load, and lowered the cost of evolving critical business systems.",
      backend: [

      ],
      frontend: [],
      devops: [],
    },
    {
      date: "Mar 2024 - Aug 2025",
      title: "Backend Engineer",
      enterprice: "SportClub",
      description:
        "Built and modernized a BackOffice and CRM platform for a multi-location gym chain. Defined system architecture, core data models, and integrated payment and regulatory services, resulting in improved operational efficiency, fewer manual processes, and a scalable foundation for business growth.",
      backend: [
        
      ],
      frontend: [],
      devops: [],
    },
    {
      date: "Jan 2023 - Mar 2024",
      title: "Backend Engineer",
      enterprice: "Smart Profit Investments",
      description:
        "Developed and optimized backend services for a financial analytics platform supporting sales and annual return tracking. Improved system performance and reliability under high concurrency, nearly doubling responsiveness while reducing operational risk through strong testing and performance optimization practices.",
      backend: [
     
      ],
      frontend: [],
      devops: [],
    }
  ];

  const ExperienceCard = ({
    date,
    title,
    enterprice,
    description,
    backend,
    frontend,
    devops,
  }) => {
    return (
      <motion.article
        className="xl:flex xl:flex-row gap-10 mb-16 mobiles:flex-col mobiles:gap-6"
        id="stack"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div>
          <h5 className="text-sm text-nowrap">{date}</h5>
        </div>
        <div className="">
          <h2 className="text-l font-semibold text-white mb-2">
            {title} · {enterprice}
          </h2>
          <p className="text-sm line leading-6 max-w-80">{description}</p>
          <aside className="flex flex-wrap gap-2 mt-4 xl:w-[400px] sm:w-[80vw]">
            {backend.map((item, index) => {
              return (
                <h4
                  key={index}
                  className="w-[80px] h-[30px] text-xs bg-stackback text-stack p-2 rounded-xl flex items-center justify-center text-center"
                >
                  {item}
                </h4>
              );
            })}
          </aside>
          <aside className="flex flex-wrap gap-2 mt-4 xl:w-[400px] sm:w-[80vw]">
            {frontend.map((item, index) => {
              return (
                <h4
                  key={index}
                  className="w-[80px] h-[30px] text-xs bg-[#2E2B12] text-[#F5E663] p-2 rounded-xl flex items-center justify-center text-center"
                >
                  {item}
                </h4>
              );
            })}
          </aside>
          <aside className="flex flex-wrap gap-2 mt-4 xl:w-[400px] sm:w-[80vw]">
            {devops.map((item, index) => {
              return (
                <h4
                  key={index}
                  className="w-[80px] h-[30px] text-xs bg-[#2F1E12] text-[#FFBC8A] p-2 rounded-xl flex items-center justify-center text-center"
                >
                  {item}
                </h4>
              );
            })}
          </aside>
        </div>
      </motion.article>
    );
  };
  return (
    <div>
      {experienceList.map((item, index) => {
        return (
          <ExperienceCard
            date={item.date}
            title={item.title}
            description={item.description}
            backend={item.backend}
            frontend={item.frontend}
            devops={item.devops}
            enterprice={item.enterprice}
          />
        );
      })}
    </div>
  );
};
