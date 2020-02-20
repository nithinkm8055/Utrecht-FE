export interface ProductCategory {
  productCategory: string,
  products: Product[]
}

export interface Product {
  name: string,
  link: string
}

export interface ProductDetails {
  productCategory: string,
  productName: string,
  productDescription: string,
  productCode: string
}