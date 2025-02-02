import clsx from "clsx";
import React, { CSSProperties, ElementType, ReactNode } from "react";

type BoundedProps = {
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode; // 👈 Explicitly define the type of children
};

export function Bounded({
  as: Comp = "section", // 👈 Default to "section" if `as` is not provided
  className,
  children,
  ...restProps
}: BoundedProps) {
  return (
    <Comp
      className={clsx(
        "px-6 ~py-10/16 [.header+&]:pt-44 [.header+&]:md:pt-32",
        className
      )}
      {...restProps}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </Comp>
  );
}