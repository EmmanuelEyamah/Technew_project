"use client";

import React, { FC } from "react";
import { Header } from "../components/Header";
import { Button, Typography } from "@material-tailwind/react";
import { commonProps } from "@/types/common";
import Image from "next/image";

export interface HeroProps {}
export const Hero: FC<HeroProps> = () => {
  return (
    <div
      className="bg-cover bg-center h-screen w-full relative container mx-auto"
      style={{
        backgroundImage:
          "linear-gradient(rgba(7, 41, 81, 0.5), rgba(7, 41, 81, 0.5)), url('/assets/bg-img.jpg')",
      }}
    >
      <Header />

      <div className="container px-14 mx-auto flex flex-col lg:flex lg:flex-row items-center justify-evenly h-full w-full">
        <div className="flex flex-col items-center lg:items-start gap-2 lg:gap-5 w-full lg:w-[600px]">
          <Typography
            {...commonProps}
            className="text-[28px] lg:text-[48px] leading-[48px] lg:leading-[58px] text-white text-center lg:text-left"
          >
            Get the best knowledge from our Versatile Tutors
          </Typography>
          <Button
            {...commonProps}
            className="bg-white text-[#072951] w-[212px] font-semibold"
            size="lg"
          >
            Start learning!
          </Button>
        </div>
        <div className="flex gap-5 lg:w-[600px] w-full items-center justify-center">
          <Image
            src="/assets/hero.png"
            alt="hero image"
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};
