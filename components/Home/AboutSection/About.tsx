import React from "react";
import aboutImg from "../../../public/aboutImg.jpeg";
import Image from "next/image";
import AboutIntroContent from "./AboutIntroContent";
import { urlFor } from "@/lib/sanity";

interface AboutProps {
  sectionImg: string;
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

const About = ({
  sectionImg,
  intro,
  subtitle,
  designTitle,
  title,
  techTitle,
  devprocessTitle,
  designtools,
  techstack,
  devprocessstack,
}: AboutProps) => {
  return (
    <div className="relative overflow-hidden max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex flex-row justify-between items-center py-4 md:py-8 lg:py-24">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:w-full lg:space-x-6">
        <div className="order-2 lg:order-1 lg:w-[45%] items-center justify-center">
          <Image
            src={urlFor(sectionImg).url()}
            width={400}
            height={350}
            alt="about"
            className="bg-cover object-cover rounded-2xl "
          />
        </div>
        <div className="lg:w-[55%] lg:order-2">
          <AboutIntroContent
            title={title}
            intro={intro}
            subtitle={subtitle}
            designTitle={designTitle}
            techTitle={techTitle}
            devprocessTitle={devprocessTitle}
            designtools={designtools}
            techstack={techstack}
            devprocessstack={devprocessstack}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
