import React from "react";
export const Experience = () => {
  const experienceList = [
    {
      date: "Mar 2024 - Actualidad",
      title: "Desarrollador Fullstack",
      enterprice: "SportClub",
      description:
        "Desarrollador Fullstack para el CRM oficial de la cadena de gimnasios, ademas de haber desarrollado varios de sus procesos paralelos al proyecto principal",
      backend: [
        "Flask",
        "FastAPI",
        "Pytest",
        "SQLAlchemy",
        "Pymongo",
        "MongoDB",
        "PostgreSQL",
        "Firebase",
        "MercadoPago",
        "AFIP SDK"
      ],
      frontend: ["React", "Zustand", "Jest", "MUI"],
      devops: [
        "Microservicios",
        "Arq. Hexagonal",
        "S3",
        "EC2",
        "RDS",
        "Docker",
        "Compose",
        "Grafana",
        "Jenkins",
      ],
    },
    {
      date: "Ene 2023 - 2024",
      title: "Desarrollador Fullstack",
      enterprice: "Smart Profit Investments",
      description:
        "Desarrollador fullstack para un proyecto de venta de membresias con retorno anual",
      backend: [
        "Django",
        "FastAPI",
        "Pytest",
        "PostgreSQL",
        "DjangoORM",
        "Binance",
        "Mercadopago"
      ],
      frontend: ["React", "Zustand", "Jest", "MUI", "Framer"],
      devops: ["Microservicios", "S3", "EC2", "Docker", "Grafana", "Jenkins"],
    },
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
      <article
        className="xl:flex xl:flex-row gap-10 mb-16 mobiles:flex-col mobiles:gap-6"
        id="stack"
      >
        <div>
          <h5 className="text-sm text-nowrap">{date}</h5>
        </div>
        <div className="">
          <h2 className="text-l font-semibold text-white mb-2">
            {title} · {enterprice}
          </h2>
          <p className="text-sm line leading-6 max-w-80">{description}</p>
          <aside className="flex flex-wrap gap-2 mt-4 w-[440px]">
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
          <aside className="flex flex-wrap gap-2 mt-4 w-[440px]">
            {frontend.map((item, index) => {
              return (
                <h4
                  key={index}
                  className="w-[80px] h-[30px] text-xs bg-[#1A3A47] text-stack p-2 rounded-xl flex items-center justify-center text-center"
                >
                  {item}
                </h4>
              );
            })}
          </aside>
          <aside className="flex flex-wrap gap-2 mt-4 w-[440px]">
            {devops.map((item, index) => {
              return (
                <h4
                  key={index}
                  className="w-[80px] h-[30px] text-xs bg-[#0F2230] text-stack p-2 rounded-xl flex items-center justify-center text-center"
                >
                  {item}
                </h4>
              );
            })}
          </aside>
        </div>
      </article>
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
