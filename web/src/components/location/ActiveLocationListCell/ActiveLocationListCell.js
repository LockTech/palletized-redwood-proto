export const QUERY = gql`
  query ActiveLocationListQuery {
    activeLocationList {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ activeLocationList }) => {
  return JSON.stringify(activeLocationList)
}
