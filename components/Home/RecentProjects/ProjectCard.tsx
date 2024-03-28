"use client";
import React, { FC, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

import projectImg from "../../../public/popup-project-1.jpg";
import Image from "next/image";
import { ArrowBigRight, ArrowRight } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { urlFor } from "@/lib/sanity";
import Link from "next/link";

interface ProjectCardProps {
  featuredProjects: {
    _id: string;
    _updatedAt: string;
    githubLink: string;
    projectlanguages: string;
    _type: string;
    projectType: string;
    title: string;
    description?: string;
    href: string;
    caption: string;
    image: string;
    projectCategories: {
      _id: string;
      title: string;
    }[];
  }[];
}

const ProjectCard: FC<ProjectCardProps> = ({ featuredProjects }) => {
  // const pagination = {
  //   clickable: true,
  //   renderBullet: function (index: number, className: string) {
  //     return '<span class="' + className + '">' + (index + 1) + "</span>";
  //   },
  // };
  return (
    <>
      <Swiper
        centeredSlides={false}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {featuredProjects?.map((project) => (
          <SwiperSlide key={project._id} className="">
            <div className="p-[14px] rounded-[10px] bg-white mb-10">
              <Dialog>
                <div>
                  <div className="relative overflow-hidden rounded-[8px]">
                    <Image
                      src={urlFor(project.image).url()}
                      width={800}
                      height={600}
                      alt={project.caption}
                      className="object-cover bg-cover hover:scale-[1.05] transition-all duration-300 ease-in-out"
                    />
                  </div>

                  <div className="text-black py-3 items-center flex flex-row justify-between w-full">
                    <div className="">
                      <h6 className="text-black font-semibold capitalize text-lg text-left">
                        {project.title}
                      </h6>
                      <span className="block">{project.projectlanguages}</span>
                    </div>
                    <DialogTrigger className="w-[45px] h-[45px] flex items-center justify-center bg-primary_red rounded-[50%]  cursor-pointer text-white hover:bg-red-900">
                      <ArrowRight />
                    </DialogTrigger>
                  </div>
                </div>
                <DialogContent className="max-w-screen-lg grid grid-cols-1 lg:grid-cols-2 w-full">
                  <div>
                    <Image
                      src={urlFor(project.image).url()}
                      width={600}
                      height={400}
                      alt="text"
                      className="bg-cover object-cover"
                    />
                  </div>
                  <div className="pt-1">
                    <div className=" border-b-[1px] border-[#eee]">
                      <h5 className="text-2xl capitalize font-bold pb-2">
                        {project.title}
                      </h5>
                    </div>
                    <div className="mt-3">
                      <p className=" font-medium">{project.description}</p>
                      <div className="mt-4">
                        <ul className="font-medium space-y-2">
                          <li>
                            Type: <span>{project.projectType}</span>
                          </li>
                          <li>
                            Languages: <span>{project.projectlanguages}</span>
                          </li>

                          <li>
                            {project.href ? (
                              <li>
                                Live Preview:
                                <span>
                                  <Link
                                    href={project.href}
                                    target="_blank"
                                    className="text-primary_red ml-3"
                                  >
                                    View project
                                  </Link>
                                </span>
                              </li>
                            ) : (
                              <li></li>
                            )}
                          </li>

                          <li>
                            {project.githubLink ? (
                              <li>
                                Github:
                                <span>
                                  <Link
                                    target="_blank"
                                    href={project.githubLink}
                                    className="text-primary_red ml-3"
                                  >
                                    View Code
                                  </Link>
                                </span>
                              </li>
                            ) : (
                              <li>
                                Github:
                                <span>
                                  <Link
                                    target="_blank"
                                    href="mailto:ajardiahjr@gmail.com"
                                    className="text-primary_red ml-3"
                                  >
                                    Contact Me to view code
                                  </Link>
                                </span>
                              </li>
                            )}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ProjectCard;
