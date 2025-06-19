import Link from 'next/link';
import { Button, buttonVariants } from '@/components/ui/button';
import { getProducts } from './products/products.api';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

async function Home() {
  const products = await getProducts();
  console.log(products);

  return (
    <>
      <div className='flex justify-between'>
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
              <CardTitle>{product.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{product.description}</p>
              <Button>Comprar</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}

export default Home;
