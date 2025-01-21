import { Bounded } from "@/components/Bounded";
import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { JSX } from "react";

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
      >
        <PrismicRichText field={slice.primary.heading} />
        <PrismicRichText field={slice.primary.body} />

        {slice.primary.product.map((item,index) => (
          <PrismicNextLink field={item.console}>
          Link
        </PrismicNextLink>
        ))}
    </Bounded>
  );
};

export default ProductGrid;
