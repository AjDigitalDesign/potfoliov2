import React from "react";

interface SkillToolProps {
  name: string;
}
const SkillTool = ({ name }: SkillToolProps) => {
  return (
    <span
      className="border-solid border-[1px] 
    border-[1px solid rgba(255,255,255,0.1)]
    py-[5x]
    px-[15px]
    rounded-[40px]
    mt-0 
    mr-[5px]
    mb-[5px]
    ml-0
    text-gray-500
    font-medium
    inline-block
    hover:border-primary_red
    transition
    ease-in-out
    duration-75
    "
    >
      {name}
    </span>
  );
};

export default SkillTool;
