import { useEffect } from 'react'
import { toast } from '@redwoodjs/web/toast'
import Skeleton from 'react-loading-skeleton'

export const QUERY = gql`
  query ActiveOrderCountQuery($warehouseId: String, $order: ComplexOrderInput) {
    count: orderCount(warehouseId: $warehouseId, order: $order)
    # Pending check for an order's pallet's status
  }
`

export const Loading = () => <Skeleton />

export const Empty = () => '0'

export const Failure = ({ id }) => {
  useEffect(() => {
    toast.error('An error occured while retrieving an Active-Order count.')
  }, [id])

  return '-'
}

export const Success = ({ count }) => count
