import Skeleton from 'react-loading-skeleton'

export const QUERY = gql`
  query OrderNameQuery($id: String!) {
    order(id: $id) {
      orderNumber
      jobName
    }
  }
`

export const Loading = () => <Skeleton />

export const Empty = () => 'Order Not Found'

export const Failure = ({ error }) => <span>Error: {error.message}</span>

export const Success = ({ order }) => {
  return order.jobName || order.orderNumber
}
