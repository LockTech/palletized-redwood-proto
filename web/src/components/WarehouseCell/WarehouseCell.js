import Warehouse from 'src/components/Warehouse'

export const QUERY = gql`
  query FIND_WAREHOUSE_BY_ID($id: String!) {
    warehouse: warehouse(id: $id) {
      id
      name
      updatedAt
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Warehouse not found</div>

export const Success = ({ warehouse }) => {
  return <Warehouse warehouse={warehouse} />
}
