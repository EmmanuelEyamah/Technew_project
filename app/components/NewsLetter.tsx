"use client";

import { commonProps } from "@/types/common";
import { Button, Input, Typography } from "@material-tailwind/react";
import React, { FC } from "react";

export interface NewsLetterProps {}
export const NewsLetter: FC<NewsLetterProps> = () => {
  return (
    <div className="w-full h-full p-5 lg:p-0 lg:h-[315px] bg-white container mx-auto flex flex-col gap-3 items-center justify-center">
      <Typography
        {...commonProps}
        className="text-center text-[36px] leading-[44px] font-bold text-[#000000]"
      >
        Email capture form for updates and promotions
      </Typography>
      <Typography
        {...commonProps}
        className="text-[24px] text-center leading-[30px] font-normal text-[#000000]"
      >
        Subscribe to our newsletters and stay up to date on features and
        releases.
      </Typography>

      <div className="relative flex w-full max-w-[35rem] mt-[30px]">
        <Input
          crossOrigin={undefined}
          type="email"
          label="Enter your working email"
          className="pr-20 rounded-3xl"
          size="lg"
          containerProps={{
            className: "min-w-0",
          }}
          {...commonProps}
        />
        <Button
          className="!absolute right-1 top-0.5 rounded-3xl bg-[#031428] capitalize"
          {...commonProps}
        >
          Subscribe
        </Button>
      </div>
    </div>
  );
};
