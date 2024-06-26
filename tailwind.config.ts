import type { Config } from "tailwindcss";
import withMT from "@material-tailwind/react/utils/withMT";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-image": "url('/public/bg-img.jfif')",
      },
      container: {
        screens: {
          sm: "100%",
          md: "100%",
          lg: "1440px",
        },
      },
    },
  },
  plugins: [],
};

export default withMT(config);
