import { ButtonLink } from '@/components/ButtonLink';
import { Content } from '@prismicio/client'
import { PrismicNextImage } from '@prismicio/next';
import React from 'react'
import { GamerScribble } from './GamerScribble';
import clsx from 'clsx';

type Props = {
    gamer : Content.GamerDocument;
    index: number;
}

export default function Gamer({gamer, index}: Props) {

  const colors = [
    "text-Hot-Pink",
    "text-Vibrant-Purple",
    "text-Dark-Charcoal"
  ];

  const scribbleColor = colors[index];

  return (
    <div className='gamer group relative flex flex-col items-center gap-4'>
        <div className='stack-layout overflow-hidden'>
            <PrismicNextImage field = {gamer.data.photo_background} width={500} 
            imgixParams={{q:20}} alt="" className="scale-110 transform transition-all
            duration-100 ease-in-out group-hover:scale-100 group-hover:brightness-75
            group-hover:saturate-[.8]"/>
            <GamerScribble className={clsx("relative", scribbleColor)}/>
            <PrismicNextImage field = {gamer.data.photo_foreground} width={500} 
            imgixParams={{q:20}} alt="" className="transform transition-transform
            duration-1000 ease-in-out group-hover:scale-110"/>

          <div className='realtive h-48 w-full place-self-end bg-gradient-to-t
          from-black via-transparent to-transparent'></div>

          <h3 className='relative grid place-self-end justify-self-start p-2 text-white
          ~text-2xl/3xl'>
            <span className='mb-[-.3em] block'>{gamer.data.first_name}</span>
            <span className='block'>{gamer.data.last_name}</span>
          </h3>
        </div>
        <ButtonLink field={gamer.data.customizer_link} size='sm'>Build their console</ButtonLink>
    </div>
        
  )
}