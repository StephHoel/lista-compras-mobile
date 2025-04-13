import type { ProductProps } from '../interfaces'

export function SortList(newProducts: ProductProps[]) {
  const sortedProducts = newProducts.sort((a, b) => {
    return a.item.toLowerCase().localeCompare(b.item.toLowerCase())
  })

  return sortedProducts
}
