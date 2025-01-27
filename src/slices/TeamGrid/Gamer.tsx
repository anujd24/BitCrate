import { Content } from '@prismicio/client'
import { PrismicNextImage } from '@prismicio/next';
import React from 'react'

type Props = {
    gamer : Content.GamerDocument;
    index: number;
}

export default function Gamer({gamer, index}: Props) {
  return (
    <div className='group relative flex flex-col items-center gap-4'>
        <div className='stack-layout overflow-hidden'>
            <PrismicNextImage field = {gamer.data.photo_background} width={500} 
            imgixParams={{q:20}} alt="" className="scale-110 transform transition-all
            duration-100 ease-in-out group-hover:scale-100 group-hover:brightness-75
            group-hover:saturate-[.8]"/>
            <PrismicNextImage field = {gamer.data.photo_foreground} width={500} 
            imgixParams={{q:20}} alt="" className="transform transition-transform
            duration-1000 ease-in-out group-hover:scale-110"/>

            {gamer.data.first_name}
            {gamer.data.last_name}
        </div>
    </div>
        
  )
}