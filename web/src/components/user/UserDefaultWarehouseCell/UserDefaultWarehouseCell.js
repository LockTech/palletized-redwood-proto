import { toast } from '@redwoodjs/web/toast'
import { useRecoilState, useSetRecoilState } from '@salvoravida/recoil'
import { useEffect } from 'react'

import DefaultWarehouseAtom from 'src/atoms/DefaultWarehouseAtom/DefaultWarehouseAtom'

export const QUERY = gql`
  query UserDefaultWarehouseQuery($id: String!) {
    userProfile(id: $id) {
      warehouse {
        id
        name
      }
    }
  }
`

export const Loading = () => {
  const setDefaultWarehouse = useSetRecoilState(DefaultWarehouseAtom)

  useEffect(() => {
    const localDefaultWarehouse = localStorage.getItem('defaultWarehouse')
    if (localDefaultWarehouse) {
      setDefaultWarehouse(JSON.parse(localDefaultWarehouse))
    } else {
      setDefaultWarehouse({
        id: null,
        name: null,
      })
    }
  }, [setDefaultWarehouse])
  return null
}

export const Failure = () => {
  useEffect(() => {
    toast.error(
      'Unable to retrieve Default Warehouse from remote server. Falling back to stored value-if it exist.',
      { duration: 2500 }
    )
  }, [])
  return null
}

export const Success = ({ userProfile }) => {
  const setDefaultWarehouse = useSetRecoilState(DefaultWarehouseAtom)
  const defaultWarehouse = useRecoilState(DefaultWarehouseAtom)

  useEffect(() => {
    if (defaultWarehouse !== userProfile.warehouse) {
      setDefaultWarehouse(userProfile.warehouse)
      localStorage.setItem(
        'defaultWarehouse',
        JSON.stringify(userProfile.warehouse)
      )
    }
  }, [defaultWarehouse, setDefaultWarehouse, userProfile])

  return null
}
