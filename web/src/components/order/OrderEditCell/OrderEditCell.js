export const QUERY = gql`
  query OrderEditQuery {
    orderEdit {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ orderEdit }) => {
  return JSON.stringify(orderEdit)
}
