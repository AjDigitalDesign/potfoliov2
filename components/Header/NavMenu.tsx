"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

interface NavMenuProps {
  menulist: {
    id: string;
    label: string;
    url: string;
  }[];
}
const NavMenu = ({ menulist }: NavMenuProps) => {
  const pathname = usePathname();

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

  const stickNavbarColor = stickyNav ? "text-black dark:text-white" : "";

  return (
    <div className="hidden lg:flex">
      <ul className="flex  flex-row items-center gap-8">
        {menulist?.map((item) => (
          <li
            key={item.id}
            className="hover:-translate-y-0.5 duration-500 transition-all group"
          >
            <Link
              href={item.url}
              className={`${
                pathname == item.url
                  ? "text-primary_red font-medium uppercase"
                  : "hover:text-primary_red uppercase font-semibold"
              } ${stickNavbarColor}`}
            >
              <span>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavMenu;
