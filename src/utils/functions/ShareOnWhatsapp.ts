import { titleMessage } from '../constants'
import type { StateProps } from '../interfaces'
import { ConvertMessage } from './ConvertMessage'
import { FormatCurrency } from './FormatCurrency'

export function ShareOnWhatsapp(cartStore: StateProps) {
  const products = cartStore.products
    .map(
      (product) =>
        `\n|| ${product.quantity}x ${product.item} | ${FormatCurrency(Number.parseFloat(product.price))} | ${FormatCurrency(Number.parseFloat(product.quantity) * Number.parseFloat(product.price))}`,
    )
    .join('')

  const total = FormatCurrency(
    cartStore.products.reduce(
      (total, product) =>
        total +
        Number.parseFloat(product.quantity) * Number.parseFloat(product.price),
      0,
    ),
  )

  const subtitleMessage =
    '## Para adicionar esta lista ao seu app, copie a mensagem sem modificá-la e cole no ícone de compartilhar'

  const message = `${titleMessage}\n${subtitleMessage}\n--\n${products.trim()}\n\n--\nValor Total: ${total}`

  return ConvertMessage(message)
}
