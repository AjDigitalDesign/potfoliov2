import React from "react";
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
    url: "/Contact",
  },
];
// bg-[#020713] backdrop-blur-[4px] text-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]
const Navigation = () => {
  return (
    <header className="fixed w-full z-[50] overflow-hidden  backdrop-blur-[15px] bg-slate-950 text-white">
      <nav className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-50 flex flex-row justify-between items-center py-4">
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

export default Navigation;
