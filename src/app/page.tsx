import Link from 'next/link';
import Image from 'next/image';
import { Button, buttonVariants } from '@/components/ui/button';
import { getProducts } from './products/products.api';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

async function Home() {
  const products = await getProducts();
  console.log(products);

  return (
    <>
      <div className='flex justify-between mb-4'>
        <h1 className='text-4xl font-bold'>NextNestApp</h1>

        <Link href='/products/new' className={buttonVariants()}>
          {' '}
          Create Product
        </Link>
      </div>

      <div className='grid grid-cols-4 gap-3'>
        {products.map((product) => (
          <Card key={product.id}>
            <CardHeader>
              <CardTitle className='flex justify-between items-center'>
                {product.name}
                <span className='text-sm font-bold text-gray-500'>
                  ${product.price}
                </span>
              </CardTitle>
            </CardHeader>
            <Image
              src={product.image}
              alt={product.name}
              width={400}
              height={300}
              style={{ objectFit: 'cover', width: '100%', height: '200px' }}
            />
            <CardContent>
              <p>{product.description}</p>
              <Button className='mt-5'>Comprar</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}

export default Home;
