import { color, motion } from "framer-motion";
import React from "react";
import arrow from "../src/assets/arrow.svg";
import git from "../src/assets/github.svg";
import linkedin from "../src/assets/linkedin.svg";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";

function WhatCanIHelpSection() {
  return (
    <div>  <h3 className="text-xl pb-5">
    What i can{" "}
     <strong className="font-bold text-purple-300">help you</strong>
   </h3>
   <article className="mb-6 flex flex-col gap-4">
 <strong className="text-white">Backend Modernization &amp; Legacy Refactoring</strong>
 <ul className="list-disc list-inside space-y-2">
   <li>Migrate or refactor legacy systems without breaking production</li>
   <li>Reduce technical debt while keeping business operations running</li>
   <li>Improve scalability, reliability, and long-term maintainability</li>
 </ul>
</article>
<article className="mb-6 flex flex-col gap-4">
<strong className="text-white">Performance, Stability &amp; Scalability Fixes</strong>
 <ul className="list-disc list-inside space-y-2">
   <li>Diagnose slow, unstable, or failing backend services</li>
   <li>Optimize concurrency, data access, and system bottlenecks</li>
   <li>Prepare systems to handle traffic spikes and growth safely</li>
 </ul>
</article>

<article className="mb-6 flex flex-col gap-4">
<strong className="text-white">Backend Architecture &amp; System Design</strong>

 <ul className="list-disc list-inside space-y-2">
   <li>Design backend architectures for startups and new products</li>
   <li>Define data models, service boundaries, and integration strategies</li>
   <li>Build production-ready systems from day one</li>
 </ul>
</article>

<article className="mb-6 flex flex-col gap-4">
<strong className="text-white">Background Jobs, Payments &amp; Critical Systems</strong>
 <ul className="list-disc list-inside space-y-2">
   <li>Design reliable background processing and task scheduling</li>
   <li>Build billing, invoicing, audit logging, and compliance-sensitive systems</li>
   <li>Ensure idempotency, fault isolation, and full observability</li>
 </ul>
</article></div>
  )
}

function TechStackAndExperience() {
  return (
    <article className="mb-6 flex flex-col gap-4">
      <h3 className="text-xl pb-2 text-white">
    Tech stack & experience
   </h3>
   <ul className="list-disc list-inside space-y-2">
      <li>Backend architecture & system design</li>
      <li>High-availability and production systems</li>
      <li>REST APIs, background workers, and microservices</li>
      <li>Concurrency, performance optimization, and fault tolerance</li>
      <li>Payment systems, audit logging, and compliance-critical workflows</li>
      <li>Monitoring, logging, and observability in production environments</li>
    </ul>
   </article>
  )
}
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
          <motion.h3 className="2xl:text-2xl xl:text-xl  mobiles:text-xl font-light py-3 w-3/4 text-wrap w-1/2 ">
          Java Backend Engineer
          </motion.h3>
          <a
            href="https://www.upwork.com/hire/?utm_campaign=SEMBrand_Google_INTL_Marketplace_Core&utm_medium=PaidSearch&utm_content=150606034558&utm_term=upwork&campaignid=20227594544&matchtype=e&device=c&utm_source=google&cq_src=google_ads&cq_cmp=20227594544&cq_plac&cq_net=g&ad_id=660518288337&gad_source=1&gad_campaignid=20227594544&gclid=Cj0KCQiAgvPKBhCxARIsAOlK_EqiaL9q0i2F_1-TB5ZnhTg2DONTLi6shFGkdSMufwdxjCXPQq-ZbLsaApjPEALw_wcB"
            target="_blank"
            className="flex align-middle gap- font-bold my-4 border-solid border-cv border-stack w-fit px-4 py-1 rounded text-stack"
          >
            Contact me <img src={arrow} alt="" className="w-6" />
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
              About me
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
              Experience
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
              Projects
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
  <p className="mb-4">
  I help companies stabilize, modernize, and scale backend systems so their products run reliably in production, handle growth safely, and remain easy to maintain over time.
  </p>

  <p className="mb-4 font-semibold text-[#cacccb]">
  I specialize in fixing legacy or fragile backends, improving performance under real traffic, and designing production-ready architectures for startups and growing businesses. I work closely with founders and engineering teams to turn complex requirements into systems that actually work in the real world — not just on paper.
  </p>

  <p>
  My focus is always on:

Reliability and uptime, 

Predictable performance under load and

Clean maintainable architectures that reduce long-term cost and risk
  </p>
  <div className="mt-24">
    <WhatCanIHelpSection />
  </div>

  <div className="mt-24">
    <TechStackAndExperience />
  </div>

  <div className="mt-24">
    <Experience />
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
