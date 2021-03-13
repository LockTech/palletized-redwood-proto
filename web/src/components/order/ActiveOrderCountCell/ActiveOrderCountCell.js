import { useEffect } from 'react'
import { toast } from '@redwoodjs/web/toast'
import Skeleton from 'react-loading-skeleton'

export const QUERY = gql`
  query ActiveOrderCountQuery($id: String!) {
    count: orderCountInWarehouse(warehouseId: $id)
    # Pending check for order.status
  }
`

export const Loading = () => <Skeleton />

export const Empty = () => '0'

export const Failure = ({ id }) => {
  useEffect(() => {
    toast.error(
      `An error occured while retrieving the Active-Order count in Warehouse: ${id}`
    )
  }, [id])

  return '-'
}

export const Success = ({ count }) => count
