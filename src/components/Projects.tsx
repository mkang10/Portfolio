"use client";

import React, { useState, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import Modal from "react-modal";

import { content } from "@/src/app/content";
import { LanguageContext } from "@/src/app/context/LanguageContext";
import { ProjectItem } from "../type/content";

Modal.setAppElement("body");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "24rem",
    width: "90%",
    padding: "1.5rem",
    zIndex: 10001,
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: 10000,
  },
};

const Projects: React.FC = () => {
  const { lang } = useContext(LanguageContext);
  const { projects } = content[lang];

  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const openModal = (proj: ProjectItem) => {
    setSelectedProject(proj);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedProject(null);
  };

  return (
    <section className="bg-bg_light_primary" id="projects">
      {/* Modal */}
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
        {selectedProject && (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                width={40}
                height={40}
                className="rounded-sm"
              />
              <h4 className="text-lg font-semibold font-Poppins">
                {selectedProject.title}
              </h4>
            </div>
            <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
              {selectedProject.description
                .trim()
                .split("\n")
                .map((line, idx) => (
                  <li key={idx}>{line.replace(/^-/, "").trim()}</li>
                ))}
            </ul>
            <div className="mt-6 flex justify-end">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </Modal>

      {/* Main Content */}
      <div className="md:container px-5 pt-14 min-h-screen flex flex-col justify-between">
        <div>
          <h2 className="title" data-aos="fade-down">
            {projects.title}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {projects.subtitle}
          </h4>
          <br />
        </div>

        <div className="flex items-center lg:flex-row flex-col-reverse gap-5">
          <Image
            src={projects.image}
            alt="Project showcase"
            width={600}
            height={400}
            data-aos="fade-right"
            className="max-w-[45vw] min-w-[22rem] object-contain"
          />

          <Swiper
            pagination={{ clickable: true }}
            data-aos="fade-left"
            spaceBetween={20}
            modules={[Pagination]}
            className="rounded-3xl pb-16 max-w-xs drop-shadow-primary self-start"
          >
            {projects.project_content.map((item: ProjectItem, i: number) => (
              <SwiperSlide
                key={i}
                className="bg-[#f9f9f9] rounded-3xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />

                <div className="flex flex-col gap-3">
                  <h5 className="text-xl font-semibold font-Poppins text-gray-900">
                    {item.title}
                  </h5>

                  {/* Preview first line */}
                  <p className="text-sm text-gray-700 leading-snug line-clamp-3">
                    {item.description.trim().split("\n")[0]}
                  </p>

                  <div className="flex gap-3 flex-wrap mt-2">
                    {item.demo && (
                      <a
                        href={item.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-1.5 text-sm rounded-full bg-black text-white hover:bg-gray-800 transition-colors duration-200"
                      >
                        🔗 View Demo
                      </a>
                    )}
                    {item.githublink && (
                      <a
                        href={item.githublink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-1.5 text-sm rounded-full border border-black text-black hover:bg-black hover:text-white transition-colors duration-200"
                      >
                        💻 GitHub
                      </a>
                    )}
                    <button
                      onClick={() => openModal(item)}
                      className="px-4 py-1.5 text-sm text-black underline-offset-2 hover:underline"
                    >
                      View More
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
