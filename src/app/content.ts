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
    { link: "#home", icon: TbSmartHome },
    { link: "#skills", icon: BiUser },
    { link: "#services", icon: RiServiceLine },
    { link: "#projects", icon: RiProjectorLine },
    { link: "#contact", icon: MdOutlinePermContactCalendar },
  ],

  hero: {
    title: "Web Developer",
    firstName: "MANH",
    LastName: "CUONG",
    btnText: "Hire Me",
    image: "/assets/images/Hero/kang.jpg",
    hero_content: [
      { count: "FPT University", text: "Graduated" },
      { count: "6+", text: "Completed system-focused projects" },
    ],
  },

  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      { name: "C#", para: "Lorem ipsum text dummy", logo: "/assets/images/Skills/net.png" },
      { name: "Node js", para: "Lorem ipsum text dummy", logo: "/assets/images/Skills/node.png" },
      { name: "React js", para: "Lorem ipsum text dummy", logo: "/assets/images/Skills/react.png" },
      { name: "Next js", para: "Lorem ipsum text dummy", logo: "/assets/images/Skills/next.jpg" },
      { name: "My Sql", para: "Lorem ipsum text dummy", logo: "/assets/images/Skills/sql.png" },
      { name: "MS sql server", para: "Lorem ipsum text dummy", logo: "/assets/images/Skills/ssms.png" },
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
        logo: "/assets/images/Services/logo1.png",
      },
      {
        title: "Database Design & Modeling",
        para: "Schema design, indexing, stored procedures",
        logo: "/assets/images/Services/logo2.png",
      },
      {
        title: "DevOps Integration",
        para: "Setup CI/CD pipelines, performance tuning, testing, and system security",
        logo: "/assets/images/Services/logo3.png",
      },
    ],
  },

  projects: {
    title: "Projects",
    subtitle: "MY CREATIONS",
    image: "/assets/images/projects/person.png",
    project_content: [
      {
        title: "Client Funky Website",
        image: "/assets/images/projects/img3.png",
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
        `,
      },
      {
        title: "Manager Funky Website",
        image: "/assets/images/projects/img4.png",
        githublink: "https://github.com/mkang10/funkytown-web-manager",
        demo: "https://funkytown-web-manager.vercel.app/",
        description: `
Full system administration portal for owners:
- View, create & update products
- Import stock to central warehouse
- Manage categories (add/edit)
- Track product quantities & revenue
- Monitor import, dispatch & transfer requests
        `,
      },
      {
        title: "Owner Funky Website",
        image: "/assets/images/projects/img2.png",
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
        `,
      },
    ],
  },

  testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“Chuyên nghiệp, tận tâm và hiệu quả, Chúng tôi đánh giá rất cao tinh thần làm việc của Cường và chắc chắn sẽ tiếp tục hợp tác trong các dự án sắp tới. Funkytown chân thành cảm ơn bạn!”",
        img: "/assets/images/Testimonials/logo.png",
        name: "Funky Town",
      },
      {
        review:
          "“Professional, Dedicated, and Highly Efficient, We deeply appreciate Cuong work ethic and look forward to working with him on future projects. Thank you from all of us at Funkytown!”",
        img: "/assets/images/Testimonials/logo.png",
        name: "Funky Town",
      },
    ],
  },

  hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: "/assets/images/Hireme/person.png",
    image2: "/assets/images/Hireme/person.png",
    para: "Looking for a developer who can build complete systems from scratch? I'm ready to bring your ideas to life",
    btnText: "Hire Me",
  },

  contact: {
    title: "Contact Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      { text: "ngmcuong123456789@gmail.com", icon: GrMail, link: "mailto:ngmcuong123456789@gmail.com" },
      { text: "+84 937 289 384", icon: MdCall, link: "tel:+84937289384" },
    ],
  },

  footer: {
    text: "All © Copy Right Reserved 2025",
  },
};