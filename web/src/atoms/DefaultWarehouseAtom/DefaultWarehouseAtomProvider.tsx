import { useQuery } from '@redwoodjs/web'
import { useSetRecoilState } from '@salvoravida/recoil'

import DefaultWarehouseAtom from 'src/atoms/DefaultWarehouseAtom/DefaultWarehouseAtom'

const DefaultWarehouseAtomProvider: React.FC = () => {
  const setDefaultWarehouse = useSetRecoilState(DefaultWarehouseAtom)
  const defaultWarehouse = localStorage.getItem('defaultWarehouse')
  const {} = useQuery()

  if (defaultWarehouse) {
    setDefaultWarehouse(JSON.parse(defaultWarehouse))
  }

  return null
}

export default DefaultWarehouseAtomProvider
