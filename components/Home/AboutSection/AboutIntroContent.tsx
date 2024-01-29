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

const AboutIntroContent = () => {
  return (
    <div className="py-[60px]">
      <div className="mb-[30px]">
        <AboutHeading title="about Me" />
        <h2 className="font-semibold text-lg mb-1">
          Hello, my name is Zemo and i am UX/UI designer and front-end developer
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris.
        </p>
      </div>
      <div className="mb-[30px]">
        <AboutHeading title="Design Tool" />
        <div className="flex flex-wrap">
          {designTools?.map((tool) => (
            <SkillTool key={tool.id} name={tool.name} />
          ))}
        </div>
      </div>

      <div>
        <AboutHeading title="Technologies and Skills" />
        <div className="flex flex-wrap">
          {techTools?.map((tech) => (
            <SkillTool key={tech.id} name={tech.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutIntroContent;
