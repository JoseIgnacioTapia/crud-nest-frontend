import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { getProducts } from './products/products.api';
import ProductCard from '@/components/product-card';

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

      <div className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3'>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default Home;
