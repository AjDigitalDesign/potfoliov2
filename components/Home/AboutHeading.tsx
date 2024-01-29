"use client";
interface AboutHeadingProp {
  title: string;
}
const AboutHeading = ({ title }: AboutHeadingProp) => {
  return (
    <div className="relative mb-[25px]">
      <h3 className="after:absolute after:left-0 after:w-[2px] after:h-[20px] after:bg-primary_red after:ontent-[''] pl-[15px] font-semibold text-xl capitalize leading-[1rem] z-10 overflow-hidden">
        {title}
      </h3>
    </div>
  );
};

export default AboutHeading;
