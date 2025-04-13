import uuid from 'react-native-uuid'
import type { ProductProps } from '../interfaces'

export function ConvertToProductsList(clipboard: string) {
  const listShop = clipboard.split('--')[1].trim()

  const lineListShop = listShop.split('|| ')

  const listProducts: ProductProps[] = []

  // eslint-disable-next-line prettier/prettier
  for (let i = 1;i < lineListShop.length;i++) {
    const lineArray = lineListShop[i].split(' | ')

    // 0 quantity item
    const x = lineArray[0].split('x ')
    const quantity = x[0]
    const item = x[1]

    // 1 price
    const price = lineArray[1].trim().slice(3)

    const add: ProductProps = {
      id: uuid.v4().toString(),
      item,
      quantity: quantity.replace(',', '.'),
      price: price.replace(',', '.'),
    }

    listProducts.push(add)
  }
  return listProducts
}
