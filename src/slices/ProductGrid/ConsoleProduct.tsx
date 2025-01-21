import { createClient } from '@/prismicio';
import { Content, isFilled } from '@prismicio/client';
import { PrismicNextImage } from '@prismicio/next';
import { FaStar } from 'react-icons/fa6';

type Props = {
    id:string;
}

async function ConsoleProduct({id}: Props) {
    const client = createClient();
    const product = await client.getByID<Content.
    ConsoleDocument>(id);

    const price = isFilled.number(product.data.price)
    ? `$${(product.data.price / 100).toFixed(2)}`
    : "Price not Available";

  return (
    <div className='group relative mx-auto w-full max-w-72 px-8 pt-4'>
        <div className='flex text-white items-center justify-between 
        ~text-sm/2xl'>
            <span>{price}</span>
            <span className='inline-flex items-center gap-1'>
                <FaStar className='text-yellow-500'/>34
            </span>
        </div>
        <div className='-mb-1 overflow-hidden py-4'>
            <PrismicNextImage alt='' field={product.data.image} width={150}/>
        </div>

        <h3 className='my-2 text-center font-sans leading-tight
         ~text-lg/xl'>
            {product.data.name}
        </h3>
        
    </div>
  )
}

export default ConsoleProduct