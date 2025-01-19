"use client";

import { SVGProps } from "react";
import clsx from "clsx";

export function TallLogo({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="600"
      height="150"
      viewBox="0 0 600 150"
      className={clsx(className, "animate-squiggle")}
      {...props}
    >
      <rect width="600" height="150" fill="currentColor" />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="68px"
        fill="currentColor"
      >
        Bitcrate Console
      </text>
    </svg>
  );
}
