export const QUERY = gql`
  query ProductCreateQuery {
    productCreate {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ productCreate }) => {
  return JSON.stringify(productCreate)
}
