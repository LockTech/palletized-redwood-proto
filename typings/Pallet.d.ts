declare type TPalletStatus = 'ACTIVE' | 'SHIPPED'

declare interface IPallet {
  id: string
  name: string
  createdAt?: string
  updatedAt?: string
  location?: ILocation
  order?: IOrder
  product: IProduct[]
  status: TPalletStatus
}
