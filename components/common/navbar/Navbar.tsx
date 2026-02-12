"use client";
import React from "react";
import ParticlesBackground from "../ParticlesBackground";
import MobileNavbar from "./MobileNavbar";
import ScrollTo from "./scrollTo";
import useNavItems from "./useNavItems";

export default function Navbar() {
  const { navs } = useNavItems();
  return (
    <nav className="sticky top-0 z-50 bg-background">
      <div className="min-h-24 container md:mx-auto flex flex-row items-center justify-between">
        <ScrollTo href="#main" className="text-name grow">
          Win Ko Ko Naing
        </ScrollTo>
        <div className="hidden md:flex flex-row items-center justify-start px-5">
          {navs.map((item, i) => (
            <ScrollTo
              key={i}
              className="text-body-medium hover:text-primary px-4 text-base animate-in"
              href={item.href}
            >
              {item?.name}
            </ScrollTo>
          ))}
        </div>
        <React.Suspense fallback={<div>Loading...</div>}>
          <MobileNavbar />
        </React.Suspense>
      </div>
      <ParticlesBackground />
    </nav>
  );
}
