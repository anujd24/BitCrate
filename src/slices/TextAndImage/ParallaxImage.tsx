import React from 'react'
import { ImageField } from '@prismicio/client'
import { PrismicNextImage } from '@prismicio/next';

type Props = {
    foregroundImage: ImageField;
    backgroundImage : ImageField;
    classname?: string;
}

export default function ParallaxImage({
    foregroundImage,
    backgroundImage,
    classname,
}: Props) {
  return (
    <div>
        <PrismicNextImage field={backgroundImage} alt=''/>
        <PrismicNextImage field={foregroundImage} alt=''/>
    </div>
  );
}