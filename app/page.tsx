import { FastTrack } from "./Home/FastTrack";
import { Hero } from "./Home/Hero";
import { Testimonial } from "./Home/Testimonial";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <FastTrack />
      <Testimonial />
    </main>
  );
}
