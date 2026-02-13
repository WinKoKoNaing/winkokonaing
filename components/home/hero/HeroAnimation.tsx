"use client";
import heroAnimation from "@/public/lottie/hero-dev.json";
import Lottie from "lottie-react";

export default function HeroAnimation() {
  return (
    <Lottie
      // className="-mt-28 md:-mt-10"
      animationData={heroAnimation}
      loop
      autoplay
    />
  );
}
