"use client";

import React, { useContext } from "react";
import Image from "next/image";
import { content } from "@/src/app/content";
import { LanguageContext } from "@/src/app/context/LanguageContext";
import type { HireMe as HireMeType } from "@/src/type/content";

const Hireme: React.FC = () => {
  // Lấy ngôn ngữ hiện tại
  const { lang } = useContext(LanguageContext);
  // Ép kiểu rõ ràng theo interface
  const { hireme } = content[lang];

  return (
    <section className="bg-bg_light_primary">
      <div className="md:container px-5 pt-14">
        <h2 className="title" data-aos="fade-down">
          {hireme.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {hireme.subtitle}
        </h4>
        <br />
        <div className="flex items-center md:flex-row flex-col-reverse">
          {/* Hình lớn hiển thị trên desktop */}
          <Image
            src={hireme.image}
            alt={`${hireme.title} illustration`}
            data-aos="fade-right"
            width={500}
            height={500}
            className="max-w-sm md:block hidden object-contain"
          />

          {/* Hình nhỏ hiển thị trên mobile */}
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
            className="border-2 border-dark_primary max-w-sm p-6 shadow-sm rounded-xl rounded-br-[8rem] sm:min-w-[22rem]"
          >
            <p className="leading-7">{hireme.para}</p>
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
