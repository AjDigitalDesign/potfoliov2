import Link from "next/link";
import React from "react";

const Cta = () => {
  return (
    <div className="mx-auto max-w-screen-sm lg:max-w-screen-md px-4 flex flex-col justify-center items-center pb-20 md:pt-20">
      <div className="text-center">
        <blockquote>
          <p className="text-2xl md:text-3xl lg:text-4xl">
            “If you don’t love something, you’re not going to go the extra mile,
            work the extra weekend, challenge the status quo as much.”
          </p>
          <div>
            <h6 className="font-semibold capitalize text-lg mt-2 lg:mt-4 lg:text-xl">
              Steve <span className="text-primary_red">Jobs</span>
            </h6>
            {/* <span className="block text-slate-300 text-sm font-medium">
              Director of <i className="text-primary_red">byzano.co</i>
            </span> */}
          </div>
        </blockquote>
      </div>
      <div className="pt-20 lg:pt-24 text-center">
        <h2 className="text-3xl font-medium leading-[38px] md:text-3xl lg:text-4xl">
          Let’s make something amazing together
          <strong className="inline-block font-extrabold">
            Start by
            <Link
              href="/"
              className="text-primary_red relative inline-block transition-all ease-in-out after:absolute after:content-[''] after:bottom-[1px] after:w-[100%] after:h-[1px] after:bg-primary_red/80 after:left-0"
            >
              Saying hi
            </Link>
          </strong>
        </h2>
      </div>
    </div>
  );
};

export default Cta;
