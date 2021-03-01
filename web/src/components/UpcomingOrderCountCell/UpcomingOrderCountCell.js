import Skeleton from 'react-loading-skeleton'

export const QUERY = gql`
  query UpcomingOrderCountQuery($warehouseId: String!) {
    count: orderCountInWarehouse(warehouseId: $warehouseId)
    # Pending check for order.deliveryDate
  }
`

export const Loading = () => <Skeleton />

export const Empty = () => '0'

export const Failure = ({ _error }) => {
  // perform error notification
  return '-'
}

export const Success = ({ count }) => count || '0'
