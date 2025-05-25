"use client";

// import content
import { content } from "@/src/app/content";
import { createElement, useContext, useState, ComponentType } from "react";
import type { StaticImageData } from "next/image";
import Image from "next/image";

// import modal package
import Modal from "react-modal";
import { LanguageContext } from "../app/context/LanguageContext";

// Type definitions
export interface SkillItem {
  name: string;
  para: string;
  logo: string | StaticImageData;
}

export interface SkillsData {
  title: string;
  subtitle: string;
  skills_content: SkillItem[];
  icon: ComponentType;
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "23rem",
    width: "90%",
  },
  overlay: {
    padding: "2rem",
  },
};
Modal.setAppElement("body");

const Skills = () => {
  const { lang } = useContext(LanguageContext);
  const { skills } = content[lang];
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectSkill, setSelectSkill] = useState<SkillItem | null>(null);

  function openModal(skill: SkillItem) {
    setSelectSkill(skill);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <section className="min-h-fit bg-bg_light_primary" id="skills">
      {/* modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="flex items-center gap-2">
          {/* Trong modal */}
          <div className="flex items-center gap-2">
            {selectSkill?.logo && (
              <Image
                src={selectSkill.logo}
                alt={selectSkill.name}
                width={40}
                height={40}
                className="w-10 group-hover:scale-125 duration-200"
              />
            )}
            <h6>{selectSkill?.name}</h6>
          </div>
          <h6>{selectSkill?.name}</h6>
        </div>
        <br />
        <ul className="list-decimal px-4 font-Poppins sm:text-sm text-xs !leading-7">
          <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
          <li>Lorem ipsum dolor sit, ame.</li>
          <li>Lorem ipsum dolor sit, amet consectetur</li>
          <li>
            Lorem ipsum dolor sit, amet dolor sit, amet consectetur adipisicing.
          </li>
          <li>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad est
            beatae quos rem.
          </li>
        </ul>
        <br />
        <div className="flex justify-end">
          <button onClick={closeModal} className="btn">
            Close
          </button>
        </div>
      </Modal>

      {/* content */}
      <div className="md:container px-5  py-14">
        <h2 className="title" data-aos="fade-down">
          {skills.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {skills.subtitle}
        </h4>
        <br />
        <div className="flex flex-wrap gap-4 justify-center">
          {skills.skills_content.map((skill : SkillItem, i : number) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 400}
              className="bg-white sm:cursor-pointer relative group w-full flex items-center gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200"
            >
              <div>
                <Image
                  src={skill.logo}
                  alt={skill.name}
                  width={40}
                  height={40}
                  className="w-10 group-hover:scale-125 duration-200"
                />
              </div>
              <div>
                <h6>{skill.name}</h6>
                {/* <p className="italic">{skill.para}</p> */}
                {/* <div
                  onClick={() => {
                    setSelectSkill(skill);
                    openModal(skill);
                  }}
                  className="text-xl absolute top-3 right-3"
                >
                  {createElement(skills.icon)}
                </div> */}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Skills;
