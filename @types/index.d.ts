declare interface IWarehouse {
  id: string
  name: string
  createdAt: string
  updatedAt: string
}

declare interface IOrder {
  id: string
  orderNumber: string
  jobName?: string
  createdAt: string
  updatedAt: string
}

declare interface IFlashMessage {
  id: number
  text: string
  title: string
  variant: string
}
