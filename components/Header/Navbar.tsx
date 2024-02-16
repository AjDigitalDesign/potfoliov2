"use client";
import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import { ModeToggle } from "./ModelToggle";
import MobileMenu from "./MobileMenu";

const NavbarMenu = [
  {
    id: "01",
    label: "",
    url: "/",
  },
  {
    id: "02",

    label: "Projects",
    url: "/projects",
  },
  {
    id: "03",
    label: "Blog",
    url: "/blog",
  },
  {
    id: "04",
    label: "Contact",
    url: "/contact",
  },
];
// bg-[#020713] backdrop-blur-[4px] text-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]
const Navbar = () => {
  const [stickyNav, setStickyNav] = useState(false);

  const scrollStickNav = () => {
    if (window.scrollY >= 20) {
      setStickyNav(true);
    } else {
      setStickyNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollStickNav);
    return () => {
      window.addEventListener("scroll", scrollStickNav);
    };
  }, []);

  return (
    <header
      className={
        stickyNav
          ? "fixed w-full z-[50] overflow-hidden  backdrop-blur-[15px] transition-all ease-in-out duration-300 bg-white/20 text-white shadow-lg"
          : "bg-transparent"
      }
    >
      <nav className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-50 flex flex-row justify-between items-center pt-2 pb-1 lg:pt-5">
          <div>
            <Logo />
          </div>

          <div className="flex flex-row space-x-4 lg:space-x-8 items-center">
            <NavMenu menulist={NavbarMenu} />
            <ModeToggle />
            <MobileMenu menulist={NavbarMenu} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
