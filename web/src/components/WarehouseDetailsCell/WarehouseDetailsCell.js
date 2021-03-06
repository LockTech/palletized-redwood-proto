import Card from 'react-bootstrap/Card'

import LoadingCard from 'src/components/LoadingCard'
import WarehouseDetails from 'src/components/WarehouseDetails'

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

export const Loading = () => <LoadingCard header="Warehouse Details" />

export const Empty = () => <div>Warehouse not found</div>

export const Success = ({ warehouse }) => {
  return (
    <Card>
      <Card.Header>Details</Card.Header>
      <Card.Body>
        <WarehouseDetails warehouse={warehouse} />
      </Card.Body>
    </Card>
  )
}
