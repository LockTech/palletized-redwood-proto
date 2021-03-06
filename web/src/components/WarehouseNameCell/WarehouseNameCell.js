import Skeleton from 'react-loading-skeleton'

export const QUERY = gql`
  query WarehouseNameQuery($id: String!) {
    warehouse: warehouse(id: $id) {
      name
    }
  }
`

export const Loading = () => <Skeleton />

export const Empty = () => 'Warehouse Not Found'

export const Failure = ({ error }) => <span>Error: {error.message}</span>

export const Success = ({ warehouse }) => {
  return warehouse.name
}
