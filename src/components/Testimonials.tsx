"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useContext, useState } from "react";
import { content } from "@/src/app/content";
import Image from "next/image";
import { LanguageContext } from "../app/context/LanguageContext";
import type { TestimonialItem } from "../type/content";

const Testimonials = () => {
  const { lang } = useContext(LanguageContext);
  const { testimonials } = content[lang];

  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section className="dark:bg-[#0f172a] transition-colors duration-300">
      <div className="md:container px-5 pt-14 text-black dark:text-white">
        <h2 className="title" data-aos="fade-down">
          {testimonials.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {testimonials.subtitle}
        </h4>
        <br />
       <Swiper
  direction="vertical"
  pagination={{ clickable: true }}
  data-aos="fade-up"
  loop={true}
  spaceBetween={40}
  slidesPerView={1.7}
  onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
  modules={[Pagination]}
  className="md:h-96 h-[40rem] max-w-3xl dark:[--swiper-theme-color:#fff] [--swiper-theme-color:#3b82f6]"
>

          {testimonials.testimonials_content.map((item: TestimonialItem, index: number) => (
            <SwiperSlide key={index}>
              <div
                className={`duration-500 bg-bg_light_primary dark:bg-slate-800 mx-8 border-2 
                  p-8 h-full rounded-2xl flex items-center gap-6 
                  border-slate-200 dark:border-slate-600 md:flex-row flex-col 
                  ${activeIndex !== index ? "scale-75 blur-sm" : ""}`}
              >
                <Image
                  src={item.img}
                  alt={item.name}
                  width={96}
                  height={96}
                  className="h-24 rounded-full"
                />
                <div>
                  <p className="sm:text-base text-sm text-gray-800 dark:text-gray-300">{item.review}</p>
                  <br />
                  <h6 className="text-gray-900 dark:text-white">{item.name}</h6>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
