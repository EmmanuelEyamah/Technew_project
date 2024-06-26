"use client";

import React, { FC } from "react";
import { Typography, IconButton, Collapse } from "@material-tailwind/react";
import { commonProps } from "./../../types/common";
import Link from "next/link";
import useActiveLink from "../hooks/useActiveLink";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/bootcamp", label: "Bootcamp" },
];

export interface HeaderProps {
  bgProps?: boolean;
}
export const Header: FC<HeaderProps> = ({ bgProps = false }) => {
  const currentPath = useActiveLink();
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {navItems.map((item) => (
        <Typography
          as="li"
          className={`p-1 font-extrabold text-[#4393D8] ${
            currentPath === item.href ? "text-[#fff] font-medium" : ""
          }`}
          key={item.label}
          {...commonProps}
        >
          <Link
            href={item.href}
            className="flex items-center hover:text-[#0A52F6] transition-colors"
          >
            {item.label}
          </Link>
        </Typography>
      ))}
    </ul>
  );

  return (
    <nav
      className={`container mx-auto max-w-full px-10 lg:px-20 py-5 rounded-none shadow-none border-none ${
        bgProps ? "bg-[#072951]" : "bg-none"
      }`}
      {...commonProps}
    >
      <div className="flex items-center justify-between text-[#FFFFFF]">
        <Typography
          className="mr-4 cursor-pointer py-1.5 font-extrabold leading-6"
          {...commonProps}
        >
          TECHNEW
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <div></div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
          {...commonProps}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className="container mx-auto">{navList}</div>
      </Collapse>
    </nav>
  );
};
