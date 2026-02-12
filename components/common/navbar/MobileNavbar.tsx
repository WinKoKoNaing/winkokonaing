"use client";
import { AlignJustify, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../../ui/popover";
import useNavItems from "./useNavItems";

export default function MobileNavbar() {
  const { navs } = useNavItems();
  const [open, setOpen] = useState(false);
  return (
    <Popover modal defaultOpen open={open} onOpenChange={setOpen}>
      <PopoverTrigger>
        <Button
          className="text-ico-oliveGreen bg-transparent hover:bg-transparent md:hidden"
          asChild
          size="icon"
        >
          {open ? <X /> : <AlignJustify />}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        className="bg-background mt-3.5 flex h-[calc(100vh-48px)] w-dvw flex-col rounded-none border-0 px-0 shadow-none"
      >
        <div className="flex flex-1 flex-col gap-6 px-4">
          {navs.map((item, i) => (
            <Link
              key={i}
              onClick={() => setOpen(false)}
              className="text-txt-dark hover:text-btn-brown text-4xl"
              href={item.href}
            >
              {item?.name}
            </Link>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
