"use client";
import Link from "next/link";
import React from "react";
import { Button } from "../../ui/button";
import MobileNavbar from "./MobileNavbar";
import ScrollTo from "./scrollTo";

export const navItems = [
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];
export default function Navbar() {
  return (
    <nav className="bg-background sticky top-0 z-50">
      <div className="min-h-24 container md:mx-auto flex flex-row items-center justify-between">
        <ScrollTo href="#main" className="text-name grow">
          Win Ko Ko Naing
        </ScrollTo>
        <div className="hidden md:flex flex-row items-center justify-start px-5">
          {navItems.map((item, i) => (
            <ScrollTo
              key={i}
              className="text-body-medium hover:text-primary px-4 text-base"
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
    </nav>
  );
}
