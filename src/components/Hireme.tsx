"use client";

import React, { useContext } from "react";
import Image from "next/image";
import { content } from "@/src/app/content";
import { LanguageContext } from "@/src/app/context/LanguageContext";
import type { HireMe as HireMeType } from "@/src/type/content";

const Hireme: React.FC = () => {
  const { lang } = useContext(LanguageContext);
  const { hireme } = content[lang];

  return (
    <section className="bg-bg_light_primary dark:bg-black transition-colors duration-300">
      <div className="md:container px-5 pt-14 text-black dark:text-white">
        <h2 className="title" data-aos="fade-down">
          {hireme.title}
        </h2>
        <h4 className="subtitle dark:text-gray-300" data-aos="fade-down">
          {hireme.subtitle}
        </h4>
        <br />
        <div className="flex items-center md:flex-row flex-col-reverse">
          {/* Desktop image */}
          <Image
            src={hireme.image}
            alt={`${hireme.title} illustration`}
            data-aos="fade-right"
            width={500}
            height={500}
            className="max-w-sm md:block hidden object-contain"
          />

          {/* Mobile image */}
          <Image
            src={hireme.image}
            alt={`${hireme.title} illustration mobile`}
            data-aos="fade-up"
            width={400}
            height={400}
            className="max-w-sm md:hidden object-contain"
          />

          <div
            data-aos="fade-left"
            className="border-2 border-dark_primary dark:border-gray-600 max-w-sm p-6 shadow-sm rounded-xl rounded-br-[8rem] sm:min-w-[22rem] bg-white dark:bg-slate-800"
          >
            <p className="leading-7 text-gray-800 dark:text-gray-300">{hireme.para}</p>
            <br />
            <a href={hireme.cvLink} target="_blank" rel="noopener noreferrer">
              <button className="btn bg-dark_primary text-white hover-effect">
                {hireme.btnText}
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hireme;
