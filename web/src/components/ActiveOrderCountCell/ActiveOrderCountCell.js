import Skeleton from 'react-loading-skeleton'

export const QUERY = gql`
  query ActiveOrderCountCardQuery($warehouseId: String!) {
    count: orderCountInWarehouse(warehouseId: $warehouseId)
  }
`

export const Loading = () => <Skeleton />

export const Empty = () => '0'

export const Failure = ({ _error }) => {
  // perform error notification
  return '-'
}

export const Success = ({ count }) => count || '0'
