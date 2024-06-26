"use client";

import { commonProps } from "@/types/common";
import { IconButton, Typography } from "@material-tailwind/react";
import Image from "next/image";
import React, { FC } from "react";

export interface TestimonialProps {}
export const Testimonial: FC<TestimonialProps> = () => {
  return (
    <div className="bg-[#4393D840] w-full container mx-auto h-full lg:h-[906px] flex flex-col gap-20 items-start p-7 lg:p-24">
      <div className="w-full lg:w-[503px] flex flex-col gap-5">
        <Typography
          {...commonProps}
          className="text-[28px] leading-[40px] font-medium text-[#8D8D8D]"
        >
          Testimonials
        </Typography>
        <Typography
          {...commonProps}
          className="text-[36px] lg:text-[48px] leading-[48px] lg:leading-[58.51px] font-bold text-[#000000]"
        >
          See what others are saying about us
        </Typography>
      </div>

      <div className="container mx-auto flex flex-col lg:flex lg:flex-row items-center justify-evenly gap-12 h-full w-full">
        <div className="w-full lg:w-[601px] flex items-start flex-col gap-10">
          <Typography
            {...commonProps}
            className="text-[28px] leading-[44px] font-normal text-[#000000]"
          >
            “Explore the course catalog and syllables to identify courses that
            align with personal learning objectives. Take advantage of
            interactive tutorials we offer to reinforce your understanding and
            apply concepts in real world scenarios.”
          </Typography>
          <div className="flex flex-col">
            <Typography
              {...commonProps}
              className="text-[24px] leading-[30px] font-bold text-[#000000]"
            >
              Faaruq Azeez
            </Typography>
            <Typography
              {...commonProps}
              className="text-[24px] leading-[30px] font-normal text-[#000000]"
            >
              Founder, Justwear
            </Typography>
            <Typography
              {...commonProps}
              className="text-[24px] leading-[30px] font-bold text-[#00000080]"
            >
              United Arab Emirate
            </Typography>
          </div>
          <div className="flex gap-9">
            <IconButton {...commonProps} variant="text">
              <svg
                width="41"
                height="13"
                viewBox="0 0 41 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.469669 5.96967C0.176777 6.26256 0.176777 6.73744 0.469669 7.03033L5.24264 11.8033C5.53553 12.0962 6.01041 12.0962 6.3033 11.8033C6.5962 11.5104 6.5962 11.0355 6.3033 10.7426L2.06066 6.5L6.3033 2.25736C6.5962 1.96447 6.5962 1.48959 6.3033 1.1967C6.01041 0.903806 5.53553 0.903806 5.24264 1.1967L0.469669 5.96967ZM41 5.75L1 5.75V7.25L41 7.25V5.75Z"
                  fill="black"
                />
              </svg>
            </IconButton>
            <IconButton {...commonProps} variant="text">
              <svg
                width="41"
                height="13"
                viewBox="0 0 41 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M40.5303 7.03033C40.8232 6.73744 40.8232 6.26257 40.5303 5.96967L35.7574 1.1967C35.4645 0.903809 34.9896 0.903809 34.6967 1.1967C34.4038 1.4896 34.4038 1.96447 34.6967 2.25736L38.9393 6.5L34.6967 10.7426C34.4038 11.0355 34.4038 11.5104 34.6967 11.8033C34.9896 12.0962 35.4645 12.0962 35.7574 11.8033L40.5303 7.03033ZM-6.55671e-08 7.25L40 7.25L40 5.75L6.55671e-08 5.75L-6.55671e-08 7.25Z"
                  fill="black"
                />
              </svg>
            </IconButton>
          </div>
        </div>
        <div className="w-full lg:w-[601px] flex  items-center justify-center">
          <Image
            src="/assets/carousel-img.png"
            alt="hero image"
            width={450}
            height={450}
          />
        </div>
      </div>
    </div>
  );
};
