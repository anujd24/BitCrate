import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";
import { createClient } from "@/prismicio";
import { Content } from "@prismicio/client";
import {  PrismicText, SliceComponentProps } from "@prismicio/react";
import React from "react";
import { JSX } from "react";
import Gamer from "./Gamer";
import SlideIn from "@/components/SlideIn";

/**
 * Props for `TeamGrid`.
 */
export type TeamGridProps = SliceComponentProps<Content.TeamGridSlice>;

/**
 * Component for "TeamGrid" Slices.
 */
const TeamGrid = async ({ slice }: TeamGridProps): Promise<JSX.Element> => {
  const client = createClient();
  const gamers = await client.getAllByType("gamer");

    return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-violet-900"
    >

      <SlideIn>
        <Heading as="h2" size="lg" className="mb-8 text-center text-white">
          <PrismicText field={slice.primary.heading} />
        </Heading>
      </SlideIn>
      
      <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
        {gamers.map((gamer, index) => (
          <React.Fragment key={index}>
            {
              gamer.data.first_name && (
                <SlideIn>
                  <Gamer index={index} gamer= {gamer}/>
                </SlideIn>
                
            )}
            </React.Fragment>
        ))}
      </div>
      
    </Bounded>
  );
};

export default TeamGrid;
