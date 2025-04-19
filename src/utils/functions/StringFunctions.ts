import { ProductProps } from '../interfaces'
import { FormatCurrency } from './FormatCurrency'

export function FormatTextLine(prod: ProductProps): string {
  return (
    prod.quantity +
    'x ' +
    prod.item +
    ' | ' +
    FormatCurrency(Number.parseFloat(prod.price))
  )
}
