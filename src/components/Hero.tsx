"use client";

import { content } from "@/src/app/content";
import { useEffect } from "react";
import Image from "next/image";

// Import AOS và CSS của nó
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  const { hero } = content;

  useEffect(() => {
    AOS.init({
      duration: 1000, // thời gian chạy animation
      once: true,     // chỉ chạy 1 lần khi scroll tới
    });
  }, []);

  return (
    <section id="home" className="overflow-hidden">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10"
        >
          
          <h1 className="rotate-90 absolute top-[30%] right-[-15%] text-[#EAF2FA]">
            {hero.firstName}{" "}
            <span className="text-dark_primary">{hero.LastName}</span>
          </h1>
        </div>

        {/* first col */}
        <div className="pb-16 px-6 pt-5" data-aos="fade-down">
          <h2>{hero.title}</h2>
          <br />
          <div className="flex justify-end">
            <button className="btn">{hero.btnText}</button>
          </div>
          <div className="flex flex-col gap-10 mt-10">
            {hero.hero_content.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 300}
                className={`flex items-center w-80 gap-5
                  ${i === 1 ? "flex-row-reverse text-right" : ""}`}
              >
                <h3>{content.count}</h3>
                <p>{content.text}</p>
              </div>
            ))}
            
          </div>
        </div>

     <div className="mt-10 flex justify-center" data-aos="slide-up">
  <Image
    src={hero.image}
    alt="..."
    width={400} // Hoặc giá trị phù hợp
    height={300}
    className="object-cover"
  />
</div>

      </div>
    </section>
  );
};

export default Hero;
