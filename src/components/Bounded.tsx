import clsx from "clsx";
import React, { CSSProperties, ElementType, ReactNode } from "react";

type BoundedProps = {
  as?: ElementType;
  className?: string | undefined;
  style?: CSSProperties;
  children?: ReactNode; // 👈 Fix TypeScript issue
};

export function Bounded({
  as: Comp = "section",
  className,
  children = null, // 👈 Ensure children is not `never`
  ...restProps
}: BoundedProps) {
  return (
    <Comp
      className={clsx(
        "px-6 ~py-10/16 [.header+&]:pt-44 [.header+&]:md:pt-32",
        className as string
      )}
      {...restProps}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </Comp>
  );
}
