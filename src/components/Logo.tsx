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
        x="100"
        y="80"
        width="200"
        height="70"
        rx="15"
        fill="currentColor"
      />
      {/* Console Details */}
      <rect
        x="120"
        y="90"
        width="160"
        height="20"
        rx="5"
        fill="#ffffff"
      />
      <circle cx="135" cy="120" r="8" fill="#ffffff" />
      <circle cx="165" cy="120" r="8" fill="#ffffff" />
      <rect x="195" y="115" width="60" height="10" rx="2" fill="#ffffff" />

      {/* Wire */}
      <path
        d="M200 80 C210 60, 240 60, 250 80"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
}
