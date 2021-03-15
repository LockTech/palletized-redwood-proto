import { atom } from '@salvoravida/recoil'

const DefaultWarehouseAtom = atom<IUserDefaultWarehouse>({
  key: 'defaultWarehouseAtom',
  default: null, // '' in prod-loaded from server or localStorage
})

export default DefaultWarehouseAtom
