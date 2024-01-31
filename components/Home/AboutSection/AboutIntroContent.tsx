import React from "react";
import AboutHeading from "../AboutHeading";
import SkillTool from "./SkillTool";

const designTools = [
  {
    id: "01",
    name: "Adobe XD",
  },
  {
    id: "02",
    name: "Photoshop",
  },
  {
    id: "03",
    name: "Figma",
  },
  {
    id: "04",
    name: "Sketch",
  },
  {
    id: "05",
    name: "Illustrator",
  },
];

const techTools = [
  {
    id: "01",
    name: "HTML",
  },
  {
    id: "02",
    name: "CSS",
  },
  {
    id: "03",
    name: "SCSS",
  },
  {
    id: "04",
    name: "SQL",
  },
  {
    id: "05",
    name: "Javascript",
  },
  {
    id: "06",
    name: "PHP",
  },
  {
    id: "07",
    name: "React",
  },
  {
    id: "08",
    name: "Nextjs",
  },
  {
    id: "09",
    name: "TailwindCss",
  },
  {
    id: "10",
    name: "WordPress",
  },
  {
    id: "11",
    name: "MongoDb",
  },
];

interface AboutIntroContentProps {
  intro: string;
  subtitle: string;
  designTitle: string;
  title: string;
  techTitle: string;
  devprocessTitle: string;
  designtools: {
    title: string;
    _key: string;
  }[];
  techstack: {
    title: string;
    _key: string;
  }[];
  devprocessstack: {
    title: string;
    _key: string;
  }[];
}

const AboutIntroContent = ({
  intro,
  subtitle,
  designTitle,
  title,
  techTitle,
  devprocessTitle,
  designtools,
  techstack,
  devprocessstack,
}: AboutIntroContentProps) => {
  return (
    <div className="py-[60px]">
      <div className="mb-[30px]">
        <AboutHeading title={title} />
        <h2 className="font-semibold text-lg mb-1">{subtitle}</h2>
        <p>{intro}</p>
      </div>
      <div className="mb-[30px]">
        <AboutHeading title={designTitle} />
        <div className="flex flex-wrap">
          {designtools?.map((design) => (
            <SkillTool key={design._key} name={design.title} />
          ))}
        </div>
      </div>

      <div>
        <AboutHeading title={techTitle} />
        <div className="flex flex-wrap">
          {techstack?.map((tech) => (
            <SkillTool key={tech._key} name={tech.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutIntroContent;
