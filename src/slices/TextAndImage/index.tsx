import { Bounded } from "@/components/Bounded";
import { ButtonLink } from "@/components/ButtonLink";
import { Heading } from "@/components/Heading";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, PrismicText, SliceComponentProps } from "@prismicio/react";
import clsx from "clsx";
import { JSX } from "react";

/**
 * Props for `TextAndImage`.
 */
export type TextAndImageProps = SliceComponentProps<Content.TextAndImageSlice>;

/**
 * Component for "TextAndImage" Slices.
 */
const TextAndImage = ({ slice }: TextAndImageProps): JSX.Element => {
  const theme = slice.primary.theme;
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={clsx(
        theme === "Blue" && "bg-blue-500 text-white",
        theme === "Green" && "bg-green-500 text-white",
        theme === "Orange" && "bg-orange-500 text-white",
        theme === "Purple" && "bg-purple-500 text-white"
      )}
    >
      
      <div className="grid grid-cols-1 items-center gap-12 
      md:grid-cols-2 md:gap-24">
        <div className={clsx("flex flex-col items-center gap-8 text-center md:items-start md:text-left",
          slice.variation === "imageOnLeft"
        )}>
      <Heading size="lg" as="h2">
        <PrismicText field={slice.primary.heading} />
      </Heading>
     
     <div className="max-w-md text-lg leading-relaxed">
      <PrismicRichText field={slice.primary.body} />
     </div>
     
     <ButtonLink 
      field={slice.primary.button} 
      color = {theme===  "Green" ? "orange" : "lime" }
      className="bg-Hot-Pink text-white"
      >
      {slice.primary.button.text}
     </ButtonLink>
     </div>
     {/* <PrismicNextImage field={slice.primary.background_image} /> */}
     <PrismicNextImage field={slice.primary.foreground_image} alt=""/>
     </div>
    </Bounded>
  );
};

export default TextAndImage;
