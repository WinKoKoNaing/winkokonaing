import React, { PropsWithChildren } from "react";

export default function AnimatedGradientText({ children }: PropsWithChildren) {
  return (
    <span className="bg-linear-to-r from-white via-primary to-white bg-clip-text text-transparent animate-gradient-x">
      {children}
    </span>
  );
}
