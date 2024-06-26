"use client";

import React, { FC } from "react";
import { Typography } from "@material-tailwind/react";
import { commonProps } from "@/types/common";

const LINKS = [
  {
    items: ["Home", "About Us", "Services"],
  },
  {
    items: ["Work", "Bootcamp"],
  },
  {
    items: ["Consultation", "Blog"],
  },
];

const currentYear = new Date().getFullYear();

export interface FooterProps {}
export const Footer: FC<FooterProps> = () => {
  return (
    <footer className="relative w-full h-full lg:h-[385px] bg-[#072951] container mx-auto">
      <div className="mx-auto w-full max-w-7xl px-8 py-10">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
          <div className="flex flex-col gap-4">
            <Typography
              className="text-[65px] text-white font-bold leading-[95px]"
              {...commonProps}
            >
              TECHNEW
            </Typography>
            <Typography
              className="text-[18px] text-white font-light leading-[22px] w-[312px]"
              {...commonProps}
            >
              Subscribe to our newsletters and stay up to date on features and
              releases.
            </Typography>
            <Typography
              className="text-[18px] text-white font-medium leading-[24px]"
              {...commonProps}
            >
              Copyrights @ Progfams {currentYear}
            </Typography>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 justify-between">
            {LINKS.map(({ items }, index) => (
              <ul key={`footer-${index}`}>
                {items.map((link) => (
                  <li key={link}>
                    <Typography
                      className="py-3 transition-colors text-white text-[20px] font-medium hover:text-blue-gray-300"
                      {...commonProps}
                    >
                      {link}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
            <div className="flex flex-col w-full gap-2">
              <Typography
                className="py-3 transition-colors text-white text-[20px] font-medium hover:text-blue-gray-300"
                {...commonProps}
              >
                Contact
              </Typography>
              <Typography
                className="text-[#FFFFFFBF] text-[16px] font-normal leading-6"
                {...commonProps}
              >
                +234 810 112 8072
              </Typography>
              <Typography
                className="text-[#FFFFFFBF] text-[16px] font-normal leading-6"
                {...commonProps}
              >
                Info@Progfams.com
              </Typography>
              <Typography
                className="text-[#FFFFFFBF] text-[16px] font-normal leading-6"
                {...commonProps}
              >
                10B, Harmony Close, Ikeja, Lagos.
              </Typography>
              <div className="flex gap-3 mt-[18px]">
                <div>
                  <svg
                    width="33"
                    height="32"
                    viewBox="0 0 33 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="16.5" cy="16" r="16" fill="white" />
                    <path
                      d="M12.0814 24H8.76429V13.3176H12.0814V24ZM10.4211 11.8604C9.36036 11.8604 8.5 10.9819 8.5 9.92111C8.5 9.4116 8.7024 8.92296 9.06267 8.56268C9.42294 8.2024 9.91157 8 10.4211 8C10.9306 8 11.4192 8.2024 11.7795 8.56268C12.1397 8.92296 12.3421 9.4116 12.3421 9.92111C12.3421 10.9819 11.4814 11.8604 10.4211 11.8604ZM24.4964 24H21.1864V18.7999C21.1864 17.5606 21.1614 15.9712 19.4618 15.9712C17.7371 15.9712 17.4729 17.3177 17.4729 18.7106V24H14.1593V13.3176H17.3407V14.7748H17.3871C17.83 13.9355 18.9118 13.0498 20.5257 13.0498C23.8829 13.0498 24.5 15.2605 24.5 18.132V24H24.4964Z"
                      fill="#031428"
                    />
                  </svg>
                </div>
                <div>
                  <svg
                    width="33"
                    height="32"
                    viewBox="0 0 33 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="16.5" cy="16" r="16" fill="white" />
                    <path
                      d="M24.4442 12.0588C24.4569 12.2338 24.4569 12.4088 24.4569 12.5838C24.4569 17.9213 20.3326 24.0713 12.7944 24.0713C10.4721 24.0713 8.31473 23.4088 6.5 22.2588C6.82996 22.2963 7.14719 22.3088 7.48985 22.3088C9.40607 22.3088 11.1701 21.6713 12.5787 20.5838C10.7767 20.5463 9.2665 19.3838 8.74618 17.7838C9.00001 17.8213 9.2538 17.8463 9.52032 17.8463C9.88833 17.8463 10.2564 17.7963 10.599 17.7088C8.72083 17.3338 7.31215 15.7088 7.31215 13.7463V13.6963C7.85782 13.9963 8.49239 14.1838 9.16493 14.2088C8.06087 13.4838 7.33754 12.2463 7.33754 10.8463C7.33754 10.0963 7.54055 9.40877 7.8959 8.80877C9.91369 11.2588 12.9467 12.8587 16.3477 13.0338C16.2843 12.7338 16.2462 12.4213 16.2462 12.1088C16.2462 9.88377 18.0736 8.07129 20.3452 8.07129C21.5254 8.07129 22.5914 8.55879 23.3401 9.34629C24.2665 9.1713 25.1548 8.83378 25.9416 8.37129C25.637 9.30881 24.9898 10.0963 24.1396 10.5963C24.9645 10.5088 25.764 10.2838 26.5 9.9713C25.9417 10.7713 25.2437 11.4837 24.4442 12.0588Z"
                      fill="#031428"
                    />
                  </svg>
                </div>
                <div>
                  <svg
                    width="33"
                    height="32"
                    viewBox="0 0 33 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="16.5" cy="16" r="16" fill="white" />
                    <path
                      d="M20.9545 17.7677L21.4862 14.3033H18.162V12.0552C18.162 11.1074 18.6264 10.1836 20.1152 10.1836H21.6264V7.23405C21.6264 7.23405 20.255 7 18.9438 7C16.2063 7 14.4169 8.65927 14.4169 11.663V14.3033H11.3739V17.7677H14.4169V26.1426H18.162V17.7677H20.9545Z"
                      fill="#031428"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
