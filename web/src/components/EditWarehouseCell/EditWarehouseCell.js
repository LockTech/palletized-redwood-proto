import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import WarehouseForm from 'src/components/WarehouseForm'

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
const UPDATE_WAREHOUSE_MUTATION = gql`
  mutation UpdateWarehouseMutation(
    $id: String!
    $input: UpdateWarehouseInput!
  ) {
    updateWarehouse(id: $id, input: $input) {
      id
      name
      updatedAt
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ warehouse }) => {
  const { addMessage } = useFlash()
  const [updateWarehouse, { loading, error }] = useMutation(
    UPDATE_WAREHOUSE_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.warehouses())
        addMessage('Warehouse updated.', { classes: 'rw-flash-success' })
      },
    }
  )

  const onSave = (input, id) => {
    updateWarehouse({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Warehouse {warehouse.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <WarehouseForm
          onSave={onSave}
          resultError={error}
          resultLoading={loading}
          warehouse={warehouse}
        />
      </div>
    </div>
  )
}
