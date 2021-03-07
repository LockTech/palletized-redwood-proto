import { useEffect } from 'react'
import { useFlash } from '@redwoodjs/web'
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

export const Empty = ({ id }) => {
  const { addMessage } = useFlash()

  useEffect(() => {
    addMessage(
      `Could not find details for Warehouse: ${id}. Are you sure the Warehouse exist?`,
      {
        skipTimeout: true,
        variant: 'danger',
      }
    )
  }, [addMessage, id])

  return (
    <>
      <Card>
        <Card.Header>Details</Card.Header>
        <Card.Body>
          <Card.Text>Could not find Warehouse.</Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}

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
