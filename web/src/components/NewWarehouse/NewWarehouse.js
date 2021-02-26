import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import WarehouseForm from 'src/components/WarehouseForm'

import { QUERY } from 'src/components/WarehousesCell'

const CREATE_WAREHOUSE_MUTATION = gql`
  mutation CreateWarehouseMutation($input: CreateWarehouseInput!) {
    createWarehouse(input: $input) {
      id
    }
  }
`

const NewWarehouse = () => {
  const { addMessage } = useFlash()
  const [createWarehouse, { loading, error }] = useMutation(
    CREATE_WAREHOUSE_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.warehouses())
        addMessage('Warehouse created.', { classes: 'rw-flash-success' })
      },
    }
  )

  const onSave = (input) => {
    createWarehouse({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Warehouse</h2>
      </header>
      <div className="rw-segment-main">
        <WarehouseForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewWarehouse
