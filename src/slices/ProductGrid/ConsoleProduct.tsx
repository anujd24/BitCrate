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
    <div>
        <div className='flex text-white items-center justify-between 
        ~text-sm/2xl'>
            <span>{price}</span>
            <span className='inline-flex items-center gap-1'>
                <FaStar/>
            </span>
        </div>
        <PrismicNextImage alt='' field={product.data.image} width={150}/>
    </div>
  )
}

export default ConsoleProduct