"use client";

import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";

type ModeToggleProps = {
  className?: string;
};
export function ModeToggle({ className }: ModeToggleProps) {
  const { setTheme, theme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={cn("cursor-pointer", className)}
    >
      <div className="flex flex-row items-center justify-start gap-4">
        <div
          className={cn(
            "size-6 rounded-full md:size-4",
            theme === "dark" ? "bg-white" : "bg-black",
          )}
        />
        <p className="text-3xl md:hidden">Light mode</p>
      </div>
    </button>
  );
}
