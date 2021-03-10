import { useEffect } from 'react'
import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import Card from 'react-bootstrap/Card'

import LoadingCard from 'src/components/LoadingCard'
import WarehouseForm from 'src/components/warehouse/WarehouseForm'

export const QUERY = gql`
  query FindWarehouseById($id: String!) {
    warehouse(id: $id) {
      id
      name
    }
  }
`
const UPDATE_WAREHOUSE_MUTATION = gql`
  mutation UpdateWarehouseMutation(
    $id: String!
    $input: UpdateWarehouseInput!
  ) {
    updateWarehouse(id: $id, input: $input) {
      id
      name
    }
  }
`

export const Loading = () => <LoadingCard />

export const Empty = ({ id }) => {
  const { addMessage } = useFlash()

  useEffect(() => {
    addMessage(`Could not find Warehouse: ${id}.`, {
      variant: 'danger',
    })
  }, [addMessage, id])

  return (
    <Card>
      <Card.Body>Could not find Warehouse: {id}.</Card.Body>
    </Card>
  )
}

export const Failure = ({ id }) => {
  const { addMessage } = useFlash()

  useEffect(() => {
    addMessage(`An error occured while trying to edit Warehouse: ${id}.`, {
      variant: 'danger',
    })
  }, [addMessage, id])

  return (
    <Card>
      <Card.Body>
        An error occured while trying to edit Warehouse: {id}.
      </Card.Body>
    </Card>
  )
}

export const Success = ({ warehouse }) => {
  const { addMessage } = useFlash()
  const [updateWarehouse, { loading, error }] = useMutation(
    UPDATE_WAREHOUSE_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.warehouses())
        addMessage('Warehouse has been successfully updated.', {
          variant: 'success',
        })
      },
    }
  )

  const onSave = (input, id) => {
    updateWarehouse({ variables: { id, input } })
  }

  return (
    <Card>
      <Card.Body>
        <WarehouseForm
          onSave={onSave}
          resultError={error}
          resultLoading={loading}
          warehouse={warehouse}
        />
      </Card.Body>
    </Card>
  )
}
