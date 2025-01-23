import React from 'react'
import { ImageField } from '@prismicio/client'

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
    <div>ParallaxImage</div>
  )
}