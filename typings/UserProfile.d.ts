declare interface IUserDefaultWarehouse
  extends Omit<IWarehouse, 'createdAt' | 'updatedAt'> {}

declare interface IUserProfile {
  id: string
  warehouse: IUserDefaultWarehouse
  createdAt: string
  updatedAt: string
}
