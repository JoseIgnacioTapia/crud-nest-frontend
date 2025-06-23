export async function getProducts() {
  const data = await fetch('http://localhost:4000/api/products', {
    cache: 'no-store',
  });
  return await data.json();
}

export async function getProduct(id: string | null) {
  if (!id) return null;

  const data = await fetch(`http://localhost:4000/api/products/${id}`, {
    cache: 'no-store',
  });

  if (!data.ok) {
    return null;
  }

  return await data.json();
}

export async function createProduct(productData: any) {
  const response = await fetch('http://localhost:4000/api/products', {
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
  const res = await fetch(`http://localhost:4000/api/products/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return res.json();
}

export async function updateProduct(id: string, newProduct: any) {
  const response = await fetch(`http://localhost:4000/api/products/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newProduct),
    cache: 'no-store',
  });

  return await response.json();
}
