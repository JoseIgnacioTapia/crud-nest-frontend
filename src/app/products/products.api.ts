export const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:4000';

export async function getProducts() {
  const data = await fetch(`${BACKEND_URL}/api/products`, {
    cache: 'no-store',
  });
  return await data.json();
}

export async function getProduct(id: string | null) {
  if (!id) return null;

  const data = await fetch(`${BACKEND_URL}/api/products/${id}`, {
    cache: 'no-store',
  });

  if (!data.ok) {
    return null;
  }

  return await data.json();
}

export async function createProduct(productData: any) {
  const response = await fetch(`${BACKEND_URL}/api/products`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(productData),
  });

  if (!response.ok) {
    throw new Error('Failed to create product');
  }

  const data = await response.json();
  console.log(data);
}

export async function deleteProduct(id: string) {
  const res = await fetch(`${BACKEND_URL}/api/products/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return res.json();
}

export async function updateProduct(id: string, newProduct: any) {
  const response = await fetch(`${BACKEND_URL}/api/products/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newProduct),
    cache: 'no-store',
  });

  return await response.json();
}
