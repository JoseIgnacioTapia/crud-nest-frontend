'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm } from 'react-hook-form';
import { createProduct } from '../products.api';
import { useRouter } from 'next/navigation';

function ProductForm() {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    await createProduct({ ...data, price: parseFloat(data.price) });

    router.push('/');
    router.refresh();
  });

  return (
    <form className='flex flex-col gap-4' onSubmit={onSubmit}>
      <Label>Product Name</Label>
      <Input className='border' {...register('name')} />

      <Label>Description</Label>
      <Input className='border' {...register('description')} />

      <Label>Price</Label>
      <Input className='border' {...register('price')} />

      <Label>Image</Label>
      <Input className='border' {...register('image')} />

      <Button>Create Product</Button>
    </form>
  );
}

export default ProductForm;
