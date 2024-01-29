"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

import TestimonialItem from "./TestimonialItem";

interface TestimonialProps {
  testimonials: {
    testimonial: string;
    author: string;
    id: string;
  }[];
}

const Testimonial = ({ testimonials }: TestimonialProps) => {
  return (
    <section className="relative overflow-hidden mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2 md:py-8 lg:py-24">
      <div className="flex flex-col items-center justify-center mb-6 lg:mb-8">
        <h6 className="mb-[10px]">
          <span className="bg-primary_red/95 uppercase inline-block font-semibold py-[5px] px-[12px] leading-[20px] tracking-[3px] text-white">
            Testimonial
          </span>
        </h6>
        <h2 className="font-extrabold uppercase tracking-[1px] text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
          What My Clients Say
        </h2>
      </div>
      <div className="lg:mx-auto lg:max-w-screen-md">
        <Swiper
          navigation={false}
          modules={[Navigation]}
          className="testimonial"
        >
          {testimonials?.map((item) => (
            <SwiperSlide key={item.id}>
              <div>
                <p>{item.testimonial}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
