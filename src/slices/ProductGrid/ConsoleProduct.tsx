import { createClient } from '@/prismicio';
import React from 'react'

type Props = {
    id:string;
}

function ConsoleProduct({}: Props) {
    const client = createClient();
  return (
    <div>ConsoleProduct</div>
  )
}

export default ConsoleProduct