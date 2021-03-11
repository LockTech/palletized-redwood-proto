import { useEffect } from 'react'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
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
  useEffect(() => {
    toast.error(`Could not find Warehouse: ${id}.`, {
      variant: 'danger',
    })
  }, [id])

  return (
    <Card>
      <Card.Body>Could not find Warehouse: {id}.</Card.Body>
    </Card>
  )
}

export const Failure = ({ id }) => {
  useEffect(() => {
    toast.error(`An error occured while trying to edit Warehouse: ${id}.`)
  }, [id])

  return (
    <Card>
      <Card.Body>
        An error occured while trying to edit Warehouse: {id}.
      </Card.Body>
    </Card>
  )
}

export const Success = ({ warehouse }) => {
  const [updateWarehouse, { loading, error }] = useMutation(
    UPDATE_WAREHOUSE_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.warehouses())
        toast.success('Warehouse has been successfully updated.')
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
