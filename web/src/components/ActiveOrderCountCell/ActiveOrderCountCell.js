import Skeleton from 'react-loading-skeleton'

export const QUERY = gql`
  query ActiveOrderCountCardQuery($warehouseId: String!) {
    count: activeOrderCountInWarehouse(warehouseId: $warehouseId)
  }
`

export const Loading = () => <Skeleton />

export const Empty = () => '0'

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ count }) => count || null
