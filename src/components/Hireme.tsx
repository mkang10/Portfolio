import { content } from "@/src/app/content";
import Image from "next/image";

const Hireme = () => {
  const { hireme } = content;

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
        <div className="flex items-center md:flex-row flex-col-reverse ">

          <Image
            src={hireme.image1}
            alt="..."
            data-aos="fade-right"
            width={500}
            height={500}
            className="max-w-sm md:block hidden object-contain"
          />

          <Image
            src={hireme.image2}
            alt="..."
            data-aos="fade-up"
            width={500}
            height={500}
            className="max-w-sm md:hidden object-contain"
          />

          <div
            data-aos="fade-left"
            className="border-2 border-dark_primary max-w-sm
           p-6 shadow-sm rounded-xl rounded-br-[8rem] sm:min-w-[22rem]"
          >
            <p className="leading-7">{hireme.para}</p>
            <br />
            <button className="btn bg-dark_primary text-white">
              {hireme.btnText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hireme;
