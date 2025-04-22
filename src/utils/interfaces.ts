export interface ProductProps {
  id: string
  quantity: string
  item: string
  price: string
  collected: boolean // Indica se o item foi coletado
}

export type StateProps = {
  products: ProductProps[]
  add: (product: ProductProps) => void
  edit: (product: ProductProps) => void
  replace: (products: ProductProps[]) => void
  remove: (productId: string) => void
  get: (productId: string) => ProductProps | undefined
  clear: () => void
}

export interface ButtonProps {
  text: string
  action: () => void
}

export interface SetProductProps {
  id: string
  item: string
  qtt: string
  price: string
  collected?: boolean
}
