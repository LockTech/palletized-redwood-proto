import { atom } from '@salvoravida/recoil'

export type SelectedWarehouseType = {
  id: string
  name: string
}

const SelectedWarehouseAtom = atom<SelectedWarehouseType>({
  key: 'selectedWarehouse',
  default: {
    id: 'charleston',
    name: 'Charleston',
  }, // '' in prod-loaded from server or localStorage
})

export default SelectedWarehouseAtom
