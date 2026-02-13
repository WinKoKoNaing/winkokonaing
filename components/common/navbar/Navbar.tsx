"use client";
import React from "react";
import ParticlesBackground from "../ParticlesBackground";
import MobileNavbar from "./MobileNavbar";
import ScrollTo from "./scrollTo";
import useNavItems from "./useNavItems";
import { ModeToggle } from "../ModeToggle";
import Link from "next/link";
import { useHash } from "./useHash";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const { navs } = useNavItems();

  const hash = useHash();
  return (
    <nav className="sticky top-0 z-50 bg-background">
      <div className="min-h-24 container md:mx-auto flex flex-row items-center justify-between">
        <ScrollTo href="#main" className="text-name grow">
          Win Ko Ko Naing
        </ScrollTo>
        <div className="hidden md:flex flex-row items-center justify-start px-5">
          {navs.map((item, i) => (
            <Link
              key={i}
              className={cn(
                "text-body-medium hover:text-primary px-4 text-base animate-in",
                hash === item?.href.slice(1) && "text-primary",
              )}
              href={item.href}
            >
              {item?.name}
            </Link>
          ))}
          {/* <ModeToggle /> */}
        </div>
        <React.Suspense fallback={<div>Loading...</div>}>
          <MobileNavbar />
        </React.Suspense>
      </div>
      <ParticlesBackground />
    </nav>
  );
}
