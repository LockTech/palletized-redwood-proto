import { atom } from '@salvoravida/recoil'

const SelectedWarehouseAtom = atom({
  key: 'selectedWarehouse',
  default: 'charleston', // '' in prod
})

export default SelectedWarehouseAtom
