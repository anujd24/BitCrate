import { FaCartShopping, FaPlus } from "react-icons/fa6";
import { PrismicNextLink, PrismicNextLinkProps } from "@prismicio/next";
import clsx from "clsx";

export type ButtonProps = PrismicNextLinkProps & {
  color?: "orange" | "purple" | "lime";
  size?: "sm" | "md" | "lg";
  icon?: "cart" | "console" | "plus";
};

export function ButtonLink({
  color = "orange",
  size = "md",
  icon,
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <PrismicNextLink
      className={clsx(
        "button-cutout group mx-4 inline-flex items-center bg-gradient-to-b from-25% to-75% bg-[length:100%_400%] font-bold transition-[filter,background-position] duration-300 hover:bg-bottom",
        size === "sm" && "gap-2.5 py-2 text-base",
        size === "md" && "gap-3 px-1 text-lg ~py-2.5/3",
        size === "lg" && "~text-lg/2xl ~gap-3/4 ~px-1/2 ~py-3/4",
        color === "orange" &&
          "from-brand-orange to-brand-lime text-black hover:text-black",
        color === "purple" &&
          "from-brand-purple to-brand-lime text-white hover:text-black",
        color === "lime" && "from-brand-lime to-brand-orange text-black",
        className
      )}
      {...props}
    >
      {icon ? (
        <>
          <div
            className={clsx(
              "text flex size-6 items-center justify-center transition-transform group-hover:-rotate-[25deg] [&>svg]:h-full [&>svg]:w-full",
              size === "sm" && "size-5",
              size === "md" && "size-6",
              size === "lg" && "~size-6/8"
            )}
          >
            {icon === "cart" && <FaCartShopping />}
            {icon === "console" && <ConsoleIcon />}
            {icon === "plus" && <FaPlus />}
          </div>
          <div className="w-px self-stretch " />
        </>
      ) : null}
      {children}
    </PrismicNextLink>
  );
}

function ConsoleIcon() {
  return (
    <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 64 64"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>

  <rect x="10" y="20" width="44" height="24" rx="12" />
  
  <rect x="18" y="26" width="4" height="12" />
  <rect x="14" y="30" width="12" height="4" />
  
  <circle cx="42" cy="28" r="2" />
  <circle cx="48" cy="28" r="2" />
  <circle cx="42" cy="34" r="2" />
  <circle cx="48" cy="34" r="2" />
  
  
  <circle cx="22" cy="34" r="4" />
  <circle cx="42" cy="24" r="2" />
</svg>

  );
}
