import { createClient } from '@/prismicio';
import { Content } from '@prismicio/client';
import React from 'react'

type Props = {
    id:string;
}

async function ConsoleProduct({id}: Props) {
    const client = createClient();
    const product = await client.getByID<Content.
    ConsoleDocument>(id);
  return (
    <div>ConsoleProduct</div>
  )
}

export default ConsoleProduct