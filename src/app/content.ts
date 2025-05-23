// import images
import Hero_person from "@/public/assets/images/Hero/kang.jpg";

import NET from "@/public/assets/images/Skills/net.png";
import mySql from "@/public/assets/images/Skills/sql.png";
import ssms from "@/public/assets/images/Skills/ssms.png";
import reactjs from "@/public/assets/images/Skills/react.png";
import nodejs from "@/public/assets/images/Skills/node.png";
import next from "@/public/assets/images/Skills/next.jpg";

import services_logo1 from "@/public/assets/images/Services/logo1.png";
import services_logo2 from "@/public/assets/images/Services/logo2.png";
import services_logo3 from "@/public/assets/images/Services/logo3.png";

import project1 from "@/public/assets/images/projects/img4.png";
import project2 from "@/public/assets/images/projects/img2.png";
import project3 from "@/public/assets/images/projects/img3.png";
import person_project from "@/public/assets/images/projects/person.png";

import avatar1 from "@/public/assets/images/Testimonials/logo.png";
import avatar2 from "@/public/assets/images/Testimonials/avatar2.png";
import avatar3 from "@/public/assets/images/Testimonials/avatar3.png";
import avatar4 from "@/public/assets/images/Testimonials/avatar4.png";

import Hireme_person from "@/public/assets/images/Hireme/person.png";
import Hireme_person2 from "@/public/assets/images/Hireme/person.png";


// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Web Developer",
    firstName: "MANH",
    LastName: "CUONG",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "FPT University",
        text: "Graduated",
      },
      {
        count: "6+",
        text: "Completed system-focused projects",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "C#",
        para: "Lorem ipsum text  dummy",
        logo: NET,
      },
      {
        name: "Node js",
        para: "Lorem ipsum text  dummy",
        logo: nodejs,
      },
     
      {
        name: "React js",
        para: "Lorem ipsum text  dummy",
        logo: reactjs,
      },
      {
        name: "Next js",
        para: "Lorem ipsum text  dummy",
        logo: next,
      },
      {
        name: "My Sql",
        para: "Lorem ipsum text  dummy",
        logo: mySql,
      },
       {
        name: "MS sql sever",
        para: "Lorem ipsum text  dummy",
        logo: ssms,
      },
      
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Full-stack Web Development",
        para: "From frontend design to backend APIs, I deliver complete business solutions.",
        logo: services_logo1,
      },
      {
        title: "Database Design & Modeling",
        para: "Schema design, indexing, stored procedures",
        logo: services_logo2,
      },
      {
        title: "DevOps Integration",
        para: "Setup CI/CD pipelines, performance tuning, testing, and system security",
        logo: services_logo3,
      },
    ],
  },
 Projects: {
    title: "Projects",
    subtitle: "MY CREATIONS",
    image: person_project,
    project_content: [
      {
        title: "Client Funky Website",
        image: project3,
        githublink: "https://github.com/mkang10/funkytown-web-client",
        demo: "https://funkytown-web-client.vercel.app/",
        description: `
Customer-facing e-commerce site with features:
- Edit profile, add/edit address
- Product recommendations
- Search, view & filter products
- Add/remove favorites
- Add products to cart & edit cart
- Checkout & place orders
- Submit feedback
- Request exchange/return
- Chat with AI chatbot
        `
      },
      {
        title: "Manager Funky Website",
        image: project1,
        githublink: "https://github.com/mkang10/funkytown-web-manager",
        demo: "https://funkytown-web-manager.vercel.app/",
        description: `
Full system administration portal for owners:
- View, create & update products
- Import stock to central warehouse
- Manage categories (add/edit)
- Track product quantities & revenue
- Monitor import, dispatch & transfer requests
        `
      },
      {
        title: "Owner Funky Website",
        image: project2,
        githublink: "https://github.com/mkang10/funkytown-web-owner",
        demo: "https://funkytown-web-owner.vercel.app/",
        description: `
Unified dashboard for managers & staff:
- Create import requests
- Manage revenue reports
- Track customer, import & dispatch orders
- Handle return/exchange receipts
- (Manager only) Process orders for customers, dispatch & imports
- (Staff only) Execute order, dispatch & import tasks
        `
      },
    ],
  },

  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“Chuyên nghiệp, tận tâm và hiệu quả, Chúng tôi đánh giá rất cao tinh thần làm việc của Cường và chắc chắn sẽ tiếp tục hợp tác trong các dự án sắp tới. Funkytown chân thành cảm ơn bạn!”",
        img: avatar1,
        name: "Funky Town",
      },
      {
        review:
          "“Professional, Dedicated, and Highly Efficient, We deeply appreciate Cuong work ethic and look forward to working with him on future projects. Thank you from all of us at Funkytown!”",
        img: avatar1,
        name: "Funky Town",
      },
      // {
      //   review:
      //     "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
      //   img: avatar3,
      //   name: "Johnny",
      // },
      // {
      //   review:
      //     "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
      //   img: avatar4,
      //   name: "ROBBIN",
      // },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "Looking for a developer who can build complete systems from scratch? I'm ready to bring your ideas to life",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "ngmcuong123456789@gmail.com",
        icon: GrMail,
        link: "mailto:ngmcuong123456789@gmail.com",
      },
      {
        text: "+84 937 289 384",
        icon: MdCall,
        link: "tel:+84937289384",
      },
      // {
      //   text: "codeaprogram",
      //   icon: BsInstagram,
      //   link: "https://www.instagram.com/codeaprogram/",
      // },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2025",
  },
};
