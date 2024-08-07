export interface ProductProps {
  id: string
  quantity: string
  item: string
  price: string
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
