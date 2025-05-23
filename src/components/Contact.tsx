"use client";

import { createElement, useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { content } from "@/src/app/content";

const Contact = () => {
  const { contact } = content;
  const form = useRef<HTMLFormElement>(null); // ✅ sửa ở đây

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        form.current,
        'YOUR_PUBLIC_KEY'
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current?.reset(); // ✅ an toàn hơn
          toast.success("Email gửi thành công!");
        },
        (error) => {
          console.log(error.text);
          toast.error("Lỗi: " + error.text);
        }
      );
  };

  return (
    <section className="bg-dark_primary text-white" id="contact">
      <Toaster />
      <div className="md:container px-5 py-14">
        <h2 className="title !text-white" data-aos="fade-down">
          {contact.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {contact.subtitle}
        </h4>
        <br />
        <div className="flex gap-10 md:flex-row flex-col">
         
          <div className="flex-1 flex flex-col gap-5">
            {contact.social_media.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 430}
                className="flex items-center gap-2"
              >
                <h4 className="text-white">{createElement(content.icon)}</h4>
                <a className="font-Poppins" href={content.link} target="_blank">
                  {content.text}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
