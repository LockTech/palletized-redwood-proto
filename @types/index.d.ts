declare interface IWarehouse {
  id: string
  name: string
  createdAt?: string
  updatedAt?: string
}

declare interface ILocation {
  id: string
  name: string
  warehouse: IWarehouse
  createdAt?: string
  updatedAt?: string
}

declare interface IOrder {
  id: string
  orderNumber: string
  jobName?: string
  createdAt?: string
  updatedAt?: string
}
