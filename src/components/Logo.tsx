import { SVGProps } from "react";

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 411 211"
      {...props}
    >
      <title>Gaming Console Logo</title>
      {/* Console Base */}
      <rect
        x="80"
        y="50"
        width="250"
        height="100"
        rx="15"
        fill="currentColor"
      />
      {/* Screen */}
      <rect
        x="90"
        y="60"
        width="230"
        height="60"
        rx="8"
        fill="#ffffff"
      />
      {/* Controller */}
      <g transform="translate(155, 140)">
        <rect
          x="-30"
          y="0"
          width="60"
          height="30"
          rx="10"
          fill="currentColor"
        />
        {/* Left Joystick */}
        <circle cx="-15" cy="15" r="5" fill="#ffffff" />
        {/* Right Joystick */}
        <circle cx="15" cy="15" r="5" fill="#ffffff" />
        {/* Buttons */}
        <circle cx="5" cy="8" r="3" fill="#ffffff" />
        <circle cx="5" cy="22" r="3" fill="#ffffff" />
        <circle cx="25" cy="8" r="3" fill="#ffffff" />
        <circle cx="25" cy="22" r="3" fill="#ffffff" />
      </g>
    </svg>
  );
}
