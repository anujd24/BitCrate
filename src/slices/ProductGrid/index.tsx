import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";
import { Content, isFilled } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { JSX } from "react";
import ConsoleProduct from "./ConsoleProduct";

/**
 * Props for `ProductGrid`.
 */
export type ProductGridProps = SliceComponentProps<Content.ProductGridSlice>;

/**
 * Component for "ProductGrid" Slices.
 */
const ProductGrid = ({ slice }: ProductGridProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type = {slice.slice_type}
      data-slice-variation = {slice.variation}
      className=" bg-Dark-Charcoal"
      >
        <Heading className="text-center ~mb-4/6 text-white" as="h2">
          <PrismicRichText field={slice.primary.heading} />
        </Heading>
        
        <div className="text-center ~mb-6/10  text-white">
          <PrismicRichText field={slice.primary.body} />
        </div>
        

        {slice.primary.product.map(
          ({console}) => (
          isFilled.contentRelationship(console) && (
            <ConsoleProduct key={console.id} id={console.id} />
          )
        ))}
    </Bounded>
  );
};

export default ProductGrid;
