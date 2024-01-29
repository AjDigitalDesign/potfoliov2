import React from "react";
import aboutImg from "../../../public/aboutImg.jpeg";
import Image from "next/image";
import AboutIntroContent from "./AboutIntroContent";

const About = () => {
  return (
    <div className="relative overflow-hidden mx-auto max-w-7xl px-4 sm:px-6 lg:px-8  flex flex-row justify-between items-center py-4 md:py-8 lg:py-24">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:w-full lg:space-x-6">
        <div className="order-2 lg:order-1 lg:w-[45%] items-center justify-center">
          <Image
            src={aboutImg}
            width={400}
            height={350}
            alt="about"
            className="bg-cover object-cover rounded-xl block mx-auto"
          />
        </div>
        <div className="lg:w-[55%] lg:order-2">
          <AboutIntroContent />
        </div>
      </div>
    </div>
  );
};

export default About;
