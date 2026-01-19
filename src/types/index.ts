export type Category =
  | "keripik"
  | "brownies"
  | "puding"
  | "es-gabus"
  | "pastel"
  | "lainnya"

export interface Product {
  id: string
  name: string
  category: Category
  price: number
  description: string
  images: string[]
  featured?: boolean
  stock?: number
  rating?: number
}

export interface CartItem {
  product: Product
  quantity: number
}

export interface StoreInfo {
  name: string
  description: string
  whatsapp: string
  address: string
}
