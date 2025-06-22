import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { getProduct } from '../products.api';
import type { ParamsProps } from '@/types';

async function ProductDetailPage({ params }: ParamsProps) {
  const { id } = await params;
  const product = await getProduct(id);

  return (
    <div className='flex justify-center items-center h-screen'>
      <Card>
        <CardHeader>
          <CardTitle className='flex justify-between text-center text-2xl font-bold'>
            Product Detail: {product.id}
            <Link className={buttonVariants()} href='/'>
              Go back
            </Link>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <Image
            width={100}
            height={100}
            objectFit='cover'
            src={product.image}
            alt={product.name}
            className='w-full h-64 object-cover'
          />
        </CardContent>
      </Card>
    </div>
  );
}

export default ProductDetailPage;
