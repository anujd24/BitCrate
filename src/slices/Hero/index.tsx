import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, PrismicText, SliceComponentProps } from "@prismicio/react";
import { JSX } from "react";

import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";
import { ButtonLink } from "@/components/ButtonLink";
import { TallLogo } from "./TallLogo";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-Dark-Charcoal text-white relative h-dvh overflow-hidden"
    >

      <div className="absolute">
        <TallLogo className="w-full text-Vibrant-Purple"/>
      </div>

      <div className="absolute inset-0 mx-auto mt-24 grid max-w-6xl grid-rows-[1fr,auto] place-items-end px-6 ~py-10/16">
        <Heading className="relative max-w-2xl place-self-start">
        <PrismicText field={slice.primary.heading} />
        </Heading>
      
      
    <div className="flex relative w-full flex-col items-center justify-between ~gap-2/4 lg:flex-row">
      <div className="max-w-[45ch] font-semibold ~text-lg/xl">
        <PrismicRichText field={slice.primary.body} />
      </div>
       <ButtonLink field={slice.primary.button}
       icon="console" className="text-white z-20 mt-2 block bg-Hot-Pink rounded-lg px-2" size="md">
        {slice.primary.button.text  }
       </ButtonLink >
    </div>
    </div>

    </Bounded>
  );
};

export default Hero;
