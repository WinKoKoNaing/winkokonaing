import { cn } from "@/lib/utils"; // if you're using shadcn/ui, else just remove
import React from "react";

type DashedLineProps = {
  type?: "horizontal" | "vertical";
  className?: string;
  strokeWidth?: number;
  // dash?: number;
  // gap?: number;
};

const DashedLine: React.FC<DashedLineProps> = ({
  type = "horizontal",
  className,
  strokeWidth = 0.5,
  // dash = 4,
  // gap = 4,
}) => {
  if (type === "horizontal") {
    return (
      <svg className={cn("h-px", className)}>
        <line
          x1="0"
          y1="0"
          x2="100%"
          y2="0"
          className="stroke-line-dark-grey [stroke-dasharray:2,2] md:[stroke-dasharray:4,4]"
          strokeWidth={strokeWidth}
          // strokeDasharray={`${dash} ${gap}`}
        />
      </svg>
    );
  }

  return (
    <svg className={cn("w-px", className)}>
      <line
        x1="0"
        y1="0"
        x2="0"
        y2="100%"
        className="stroke-line-dark-gray [stroke-dasharray:2,2] md:[stroke-dasharray:4,4]"
        strokeWidth={strokeWidth}
        // strokeDasharray={`${dash} ${gap}`}
      />
    </svg>
  );
};

export default DashedLine;
