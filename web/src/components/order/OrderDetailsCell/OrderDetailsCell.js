export const QUERY = gql`
  query OrderDetailsQuery {
    orderDetails {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ orderDetails }) => {
  return JSON.stringify(orderDetails)
}
