import { atom } from '@salvoravida/recoil'

export type DefaultWarehouseType = {
  id: string
  name: string
}

const DefaultWarehouseAtom = atom<DefaultWarehouseType>({
  key: 'defaultWarehouseAtom',
  default: {
    id: 'charleston',
    name: 'Charleston',
  }, // '' in prod-loaded from server or localStorage
})

export default DefaultWarehouseAtom
