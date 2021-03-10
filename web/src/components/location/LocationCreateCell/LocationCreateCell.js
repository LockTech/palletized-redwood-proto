export const QUERY = gql`
  query LocationCreateQuery {
    locationCreate {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ locationCreate }) => {
  return JSON.stringify(locationCreate)
}
