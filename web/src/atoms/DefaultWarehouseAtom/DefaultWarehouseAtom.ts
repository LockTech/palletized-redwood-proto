import { atom } from '@salvoravida/recoil'

const DefaultWarehouseAtom = atom<IUserDefaultWarehouse>({
  key: 'defaultWarehouseAtom',
  default: null,
})

export default DefaultWarehouseAtom
