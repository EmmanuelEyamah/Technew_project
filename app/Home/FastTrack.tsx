"use client";

import { commonProps } from "@/types/common";
import { Button, Typography } from "@material-tailwind/react";
import Image from "next/image";
import React, { FC } from "react";

export interface FastTrackProps {}
export const FastTrack: FC<FastTrackProps> = () => {
  return (
    <div className="w-full h-full lg:h-[800px] bg-white container mx-auto flex items-center justify-center">
      <div className="border-gradient w-full h-full lg:w-[1200px] lg:h-[582px] flex flex-col lg:flex lg:flex-row">
        <div className="lg:w-[575px] h-full">
          <Image
            src="/assets/fast-track.png"
            alt="hero image"
            width={564}
            height={500}
            className="rounded-tl-2xl rounded-bl-none lg:rounded-bl-2xl rounded-tr-2xl lg:rounded-tr-none"
          />
        </div>
        <div className="h-full lg:w-[575px] p-12 flex flex-col gap-8 items-start">
          <Typography
            {...commonProps}
            className="text-[36px] leading-[44px] font-bold"
          >
            Fast track your Tech Career
          </Typography>
          <Typography
            {...commonProps}
            className="text-[24px] leading-[30px] font-light text-[#000000BF]"
          >
            Get the right teams with zero worries for your project every now and
            then. Get the right teams with zero worries for your project every
            now and then.
          </Typography>

          <div className="flex flex-col gap-5 items-start">
            <div className="flex gap-5">
              <Button {...commonProps} className="bg-[#072951] text-white">
                #30,000.00
              </Button>
              <Button {...commonProps} className="bg-[#4393D8] text-white">
                3 months
              </Button>
            </div>
            <div className="flex gap-5">
              <Button {...commonProps} className="bg-[#000] text-white">
                Mon-Fri (4pm -6pm)
              </Button>
              <Button {...commonProps} className="bg-[#8D8D8D] text-white">
                GoogleMeet
              </Button>
            </div>
          </div>

          <Typography
            {...commonProps}
            className="text-[#072951] font-semibold leading-[34.13px] text-[28px] items-center flex gap-2"
          >
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="30" cy="30" r="24" fill="#072951" />
              <mask
                id="mask0_0_122"
                maskUnits="userSpaceOnUse"
                x="19"
                y="18"
                width="22"
                height="24"
              >
                <rect
                  x="19"
                  y="18.5926"
                  width="22"
                  height="22.8148"
                  fill="#D9D9D9"
                />
              </mask>
              <g mask="url(#mask0_0_122)">
                <path
                  d="M35.5102 31.2222H20.6296V28.7778H35.5102L28.6658 21.9333L30.4074 20.2222L40.1852 30L30.4074 39.7778L28.6658 38.0667L35.5102 31.2222Z"
                  fill="white"
                />
              </g>
            </svg>
            More Details
          </Typography>
        </div>
      </div>
    </div>
  );
};
