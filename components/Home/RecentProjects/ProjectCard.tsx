"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import projectImg from "../../../public/popup-project-1.jpg";
import Image from "next/image";
import { ArrowBigRight } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const projects = [
  {
    id: "01",
    name: "Ecommerce web App",
    projectImg: projectImg,
    Description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia porro facere quidem reprehenderit doloribus ad cupiditate ex rerum suscipit repudiandae, ipsam neque asperiores dolores. Quam totam veritatis id animi repudiandae",
  },

  {
    id: "02",
    name: "Ecommerce web App 2",
    projectImg: projectImg,
    Description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia porro facere quidem reprehenderit doloribus ad cupiditate ex rerum suscipit repudiandae, ipsam neque asperiores dolores. Quam totam veritatis id animi repudiandae",
  },
  {
    id: "03",
    name: "Ecommerce web App 3",
    projectImg: projectImg,
    Description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia porro facere quidem reprehenderit doloribus ad cupiditate ex rerum suscipit repudiandae, ipsam neque asperiores dolores. Quam totam veritatis id animi repudiandae",
  },
  {
    id: "04",
    name: "Ecommerce web App 4",
    projectImg: projectImg,
    Description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia porro facere quidem reprehenderit doloribus ad cupiditate ex rerum suscipit repudiandae, ipsam neque asperiores dolores. Quam totam veritatis id animi repudiandae",
  },
  {
    id: "05",
    name: "Ecommerce web App 5",
    projectImg: projectImg,
    Description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia porro facere quidem reprehenderit doloribus ad cupiditate ex rerum suscipit repudiandae, ipsam neque asperiores dolores. Quam totam veritatis id animi repudiandae",
  },
  {
    id: "06",
    name: "Ecommerce web App 6",
    projectImg: projectImg,
    Description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia porro facere quidem reprehenderit doloribus ad cupiditate ex rerum suscipit repudiandae, ipsam neque asperiores dolores. Quam totam veritatis id animi repudiandae",
  },
  {
    id: "07",
    name: "Ecommerce web App 7",
    projectImg: projectImg,
    Description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia porro facere quidem reprehenderit doloribus ad cupiditate ex rerum suscipit repudiandae, ipsam neque asperiores dolores. Quam totam veritatis id animi repudiandae",
  },
];

const ProjectCard = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <>
      <Swiper
        centeredSlides={false}
        modules={[Pagination]}
        pagination={pagination}
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
        {projects?.map((project) => (
          <SwiperSlide
            key={project.id}
            className="p-[14px] rounded-[10px] bg-white"
          >
            <Dialog>
              <div>
                <div className="relative overflow-hidden rounded-[8px]">
                  <Image
                    src={project.projectImg}
                    width={800}
                    height={600}
                    alt="test"
                    className="object-cover bg-cover hover:scale-[1.05] ease-in-[.35s]"
                  />
                </div>

                <div className="text-black py-3">
                  <div className="-mb-3">
                    <h6 className="text-black font-semibold capitalize text-lg text-left">
                      {project.name}
                    </h6>
                  </div>
                  <div className="flex flex-row justify-between w-full items-center">
                    <div>
                      <ul className="flex flex-row items-center space-x-2 text-sm text-gray-500">
                        <li>Web app</li>
                        <li>App Development</li>
                        <li>Nextjs</li>
                      </ul>
                    </div>
                    <div>
                      <DialogTrigger className="w-[45px] h-[45px] flex items-center justify-center bg-primary_red rounded-[50%] border-black border-[1px] cursor-pointer text-white hover:bg-background">
                        <div>
                          <ArrowBigRight />
                        </div>
                      </DialogTrigger>
                    </div>
                  </div>
                </div>
              </div>

              <DialogContent className="max-w-screen-lg grid grid-cols-1 lg:grid-cols-2 w-full">
                <div>
                  <Image
                    src={project.projectImg}
                    width={600}
                    height={400}
                    alt="text"
                    className="bg-cover object-cover"
                  />
                </div>
                <div className="pt-1">
                  <div className="text-black border-b-[1px] border-[#eee]">
                    <h5 className="text-2xl capitalize font-bold text-gray-500 pb-2">
                      {project.name}
                    </h5>
                  </div>
                  <div className="mt-3">
                    <p className="text-gray-500 font-medium">
                      {project.Description}
                    </p>
                    <div className="mt-4">
                      <ul className="text-gray-500  font-medium space-y-2">
                        <li>
                          Type: <span>Website</span>
                        </li>
                        <li>
                          Languages: <span>Javascript, React, Nextjs</span>
                        </li>
                        <li>
                          Platform: <span>Sanity, MongoDB</span>
                        </li>
                        <li>
                          Live Link: <span>example.come</span>
                        </li>
                        <li>
                          Github: <span>Not available</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ProjectCard;
