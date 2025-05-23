import type { StaticImageData } from "next/image";

// Định nghĩa kiểu Skill
export type Skill = {
  name: string;
  para: string;
  logo: string | StaticImageData;
};


