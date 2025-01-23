"use client"

import React, { useEffect, useRef } from 'react'
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

    const backgroundRef = useRef<HTMLDivElement>(null);
    const foregroundRef = useRef<HTMLDivElement>(null);

    const targetPosition = useRef({ x:0, y:0 });
    const currentPosition = useRef({ x:0, y:0 });

    useEffect(() => {
        window.addEventListener("mousemove", onMouseMove);

        function onMouseMove(event:MouseEvent){
            const { innerWidth, innerHeight } = window;

            const xPercent = (event.clientX / innerWidth - 0.5) * 2;
            const yPercent = (event.clientY / innerHeight - 0.5) * 2;

            targetPosition.current = {
                x: xPercent * -20,
                y: yPercent* -20
            }
            console.log(targetPosition.current);
        }

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
        }
    })

  return (
    <div className={clsx("grid grid-cols-1 place-items-center", className)}>
        <div className='col-start-1 row-start-1 transition-transform'>
            <PrismicNextImage field={backgroundImage} 
            alt=''
            className='w-11/12'
            />
        </div>
        
        <div className='col-start-1 row-start-1 transition-transform'>
            <PrismicNextImage field={foregroundImage} 
            alt=''
            imgixParams={{height:600}}
            className='h-full max-h-[500px] w-auto'
            />
        </div>
        
    </div>
  );
}