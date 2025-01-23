import React from 'react'
import { ImageField } from '@prismicio/client'
import { PrismicNextImage } from '@prismicio/next';
import clsx from 'clsx';

type Props = {
    foregroundImage: ImageField;
    backgroundImage : ImageField;
    className?: string;
}

export default function ParallaxImage({
    foregroundImage,
    backgroundImage,
    className,
}: Props) {
  return (
    <div className={clsx("grid grid-cols-1 place-items-center", className)}>
        <div className='col-start-1 row-start-1 transition-transform'>
            <PrismicNextImage field={backgroundImage} alt=''/>
        </div>
        
        <div className='col-start-1 row-start-1 transition-transform'>
            <PrismicNextImage field={foregroundImage} alt=''/>
        </div>
        
    </div>
  );
}