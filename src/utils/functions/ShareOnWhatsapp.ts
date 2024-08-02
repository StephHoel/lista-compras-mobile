import { titleMessage } from '../constants'
import { StateProps } from '../interfaces'
import { ConvertMessage } from './ConvertMessage'
import { FormatCurrency } from './FormatCurrency'

export function ShareOnWhatsapp(cartStore: StateProps) {
  const products = cartStore.products
    .map(
      (product) =>
        `\n|| ${product.quantity}x ${product.item} | ${FormatCurrency(parseFloat(product.price))} | ${FormatCurrency(parseFloat(product.quantity) * parseFloat(product.price))}`,
    )
    .join('')

  const total = FormatCurrency(
    cartStore.products.reduce(
      (total, product) =>
        total + parseFloat(product.quantity) * parseFloat(product.price),
      0,
    ),
  )

  const subtitleMessage =
    '## Para adicionar esta lista ao seu app, copie a mensagem sem modificá-la e cole no ícone de compartilhar'

  const message =
    `${titleMessage}\n` +
    `${subtitleMessage}\n` +
    '--\n' +
    `${products.trim()}\n\n` +
    '--\n' +
    `Valor Total: ${total}`

  return ConvertMessage(message)
}
