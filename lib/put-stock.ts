export async function updateStock(value: number, stock: number) {
  // actualizar stock de stripe
  return await fetch(`/api/products/:id`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ stock: stock - value }),
  })
}
