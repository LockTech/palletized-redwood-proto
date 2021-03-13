import Skeleton from 'react-loading-skeleton'

export const QUERY = gql`
  query LocationNameQuery($id: String!) {
    location(id: $id) {
      name
    }
  }
`

export const Loading = () => <Skeleton />

export const Empty = () => 'Location Not Found'

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ location }) => {
  return location.name
}
