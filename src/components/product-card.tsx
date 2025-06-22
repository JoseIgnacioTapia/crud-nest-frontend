'use client';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { deleteProduct } from '@/app/products/products.api';
import { useRouter } from 'next/navigation';

function ProductCard({ product }: any) {
  const router = useRouter();

  async function handleRemoveProduct(productId) {
    await deleteProduct(productId);
    router.refresh();
  }

  return (
    <Card
      key={product.id}
      onClick={() => {
        router.push(`/products/${product.id}`);
      }}
    >
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
      </CardContent>
      <CardFooter className='flex justify-between'>
        <Button className='mt-5'>Comprar</Button>

        <Button
          className='mt-5'
          variant='destructive'
          onClick={() => handleRemoveProduct(product.id)}
        >
          Eliminar
        </Button>
      </CardFooter>
    </Card>
  );
}

export default ProductCard;
