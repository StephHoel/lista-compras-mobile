import { SortList } from '@/utils/functions/SortList'
import type { ProductProps } from '@/utils/interfaces'

export function add(products: ProductProps[], newProduct: ProductProps) {
  const newProducts = [...products, { ...newProduct }]

  return SortList(newProducts)
}

export function replace(products: ProductProps[]) {
  return SortList(products)
}

export function remove(products: ProductProps[], productRemovedId: string) {
  const updatedProducts = products.map((product) =>
    product.id === productRemovedId ? { ...product, quantity: '0' } : product,
  )

  return updatedProducts.filter((product) => product.quantity !== '0')
}

export function edit(products: ProductProps[], editProduct: ProductProps) {
  const productsList = products.map((product) => {
    if (product.id === editProduct.id) return { ...product, ...editProduct }

    return product
  })

  return productsList
}

export function get(
  products: ProductProps[],
  productId: string,
): ProductProps | undefined {
  const newProducts = products.find((item) => item.id === productId)
  return newProducts
}
