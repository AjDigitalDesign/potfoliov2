import ContactForm from "@/components/Contact/ContactForm";
import Cta from "@/components/Home/CtaSection/Cta";
import { Linkedin, Twitter, Instagram, Codepen, Github } from "lucide-react";
import Link from "next/link";

const Contact = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 md:px-8 pt-[20px] md:pt-[50px] lg:pt-[50px] relative overflow-hidden">
        <div className="mx-auto max-w-screen-sm flex flex-col justify-center items-center text-center lg:pb-10">
          <span className="font-bold text-sm uppercase md:text-lg">
            Contact
          </span>
          <h1 className="font-semibold text-3xl leading-10 lg:text-4xl">
            Design and Innovation
          </h1>
        </div>

        <div className="py-16 grid lg:grid-cols-2 lg:gap-20 items-center">
          <div className="">
            <h1 className="font-semibold text-3xl leading-10 lg:text-6xl">
              Design and{" "}
              <span className="lg:text-3xl lg:block lg:mt-2">Innovation</span>
            </h1>
            <p className="my-3">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              auting fugit sed thisnquia consequuntur magni dolores eos designer
              heresm qui ratione voluptatem sequi nesciuNeque porro quisquam
              est, oursqui dolorem ipsum quia dolor sit amet consectetur,
              adipisci velit, sed quia non numquam.
            </p>
            <div className="py-6">
              <ul className="flex flex-row space-x-3">
                <Link
                  href="https://github.com/AjDigitalDesign"
                  target="_blank"
                  className=" h-[30px] w-[30px] bg-gray-900  text-white leading-[30px] text-center flex items-center justify-center rounded-[3px] hover:bg-primary_red transition-all duration-75 ease-in-out"
                >
                  <Github />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/alfred-jardiah-jr-2b74751bb/"
                  target="_blank"
                  className=" h-[30px] w-[30px] bg-gray-900  text-white leading-[30px] text-center flex items-center justify-center rounded-[3px] hover:bg-primary_red transition-all duration-75 ease-in-out"
                >
                  <Linkedin />
                </Link>
                <Link
                  href="https://twitter.com/ajDigitalDesign"
                  target="_blank"
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
                  href="https://codepen.io/Ajardiahjr"
                  target="_blank"
                  className=" h-[30px] w-[30px] bg-gray-900  text-white leading-[30px] text-center flex items-center justify-center rounded-[3px] hover:bg-primary_red transition-all duration-75 ease-in-out"
                >
                  <Codepen />
                </Link>
              </ul>
            </div>
          </div>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </div>
      <Cta />
    </>
  );
};

export default Contact;
