"use client";

import { usePathname } from "next/navigation";

const useActiveLink = () => {
  const pathname = usePathname();
  return pathname;
};

export default useActiveLink;
