import { createClient } from '@/prismicio'
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';
import { PrismicImage } from '@prismicio/react';
import React from 'react'
import { Logo } from '@/components/Logo';
import { Bounded } from './Bounded';
import { asImageSrc } from '@prismicio/client';
import { FooterPhysics } from './FooterPhysics';



export default async function Footer() {
    const client = createClient();
    const settings = await client.getSingle("settings");

    const consoleTextureURLs = settings.data.footer_consoles.map((item) => asImageSrc(item.console, {h:500}))
    .filter((url):url is string => Boolean(url))

  return (
    <footer className='bg-Dark-Charcoal text-white overflow-hidden'>
        <div className='relative h-[75vh] ~p-10/16 md:aspect-auto'>
            <PrismicNextImage
                field= {settings.data.footer_image}
                alt=""
                fill
                className='object-cover'
            />
            <FooterPhysics boardTextureURLs={consoleTextureURLs}
            className='absolute inset-0 overflow-hidden'/>
            <Logo className='pointer-events-none relative h-20 mix-blend-exclusion
            md:h-28 text-Hot-Pink'/>
        </div>
        <Bounded as="nav">
            <ul className='flex flex-wrap justify-center gap-8 ~text-lg/xl'>
                {settings.data.navigation.map((item) => (
                    <li key={item.link.text}
                    className='hover:underline'>
                        <PrismicNextLink field={item.link}/>
                    </li>
                ))}
            </ul>
        </Bounded>
    </footer>
  )
}