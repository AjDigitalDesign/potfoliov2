import React from "react";
import bannerBg from "../../public/hero_bg.png";
import Image from "next/image";
import Link from "next/link";
import {
  Codepen,
  Github,
  Instagram,
  Linkedin,
  LinkedinIcon,
  Twitter,
} from "lucide-react";
import { urlFor } from "@/lib/sanity";

interface BannerProps {
  title: string;
  subTitle: string;
  description: string;
  ctaBtn: string;
  bannerBgImg: string;
}

const Banner = ({
  title,
  subTitle,
  description,
  ctaBtn,
  bannerBgImg,
}: BannerProps) => {
  return (
    <section className="pt-[110px] lg:pt-[150px] relative overflow-hidden">
      <div className="hidden absolute top-0 bottom-0 right-[16px] lg:flex lg:items-center lg:flex-col lg:justify-center space-y-[5px] z-[1]">
        <Link
          href="/"
          className=" h-[30px] w-[30px] bg-gray-900  text-white leading-[30px] text-center flex items-center justify-center rounded-[3px] hover:bg-primary_red transition-all duration-75 ease-in-out"
        >
          <Github />
        </Link>
        <Link
          href="/"
          className=" h-[30px] w-[30px] bg-gray-900  text-white leading-[30px] text-center flex items-center justify-center rounded-[3px] hover:bg-primary_red transition-all duration-75 ease-in-out"
        >
          <Linkedin />
        </Link>
        <Link
          href="/"
          className=" h-[30px] w-[30px] bg-gray-900  text-white leading-[30px] text-center flex items-center justify-center rounded-[3px] hover:bg-primary_red transition-all duration-75 ease-in-out"
        >
          <Twitter />
        </Link>
        <Link
          href="/"
          className=" h-[30px] w-[30px] bg-gray-900  text-white leading-[30px] text-center flex items-center justify-center rounded-[3px] hover:bg-primary_red transition-all duration-75 ease-in-out"
        >
          <Github />
        </Link>
        <Link
          href="/"
          className=" h-[30px] w-[30px] bg-gray-900  text-white leading-[30px] text-center flex items-center justify-center rounded-[3px] hover:bg-primary_red transition-all duration-75 ease-in-out"
        >
          <Codepen />
        </Link>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-wrap items-center justify-center md:flex-row">
          <div className="mb-14 lg:mb-0 lg:w-1/2">
            <h6 className="mb-[6px]">
              <span className="bg-primary_red/95 uppercase inline-block font-semibold py-[5px] px-[12px] leading-[20px] tracking-[3px] text-white">
                Aj Jardiah Jr
              </span>
            </h6>
            <h1 className="max-w-xl text-[2.2rem] leading-none font-extrabold text-left text-2xl md:text-5xl lg:text-left lg:leading-tight capitalize mb-3">
              {subTitle}
              <span className="not-italic text-primary_red block text-2xl md:text-4xl">
                {title}
              </span>
            </h1>
            <p className="max-w-xl text-left lg:text-left lg:max-w-md">
              {description}
            </p>

            <div className="mt-5">
              <Link
                href={ctaBtn}
                className="text-primary_red inline-block uppercase border-b-[1px] border-primary_red font-bold transition-all-[0.4s] ease-in-out text-xl"
              >
                {`Let's Chat!`}
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2">
            <Image
              src={urlFor(bannerBgImg).url()}
              width={900}
              height={600}
              alt="bg"
              className="bg-cover object-cover rounded-xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
