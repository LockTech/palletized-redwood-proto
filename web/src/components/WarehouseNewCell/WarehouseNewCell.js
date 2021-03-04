import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import Card from 'react-bootstrap/Card'

import WarehouseForm from 'src/components/WarehouseForm'

const CREATE_WAREHOUSE_MUTATION = gql`
  mutation CreateWarehouseMutation($input: CreateWarehouseInput!) {
    createWarehouse(input: $input) {
      id
    }
  }
`

const NewWarehouseCell = () => {
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
    try {
      createWarehouse({ variables: { input } })
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Card>
      <Card.Body>
        <WarehouseForm
          onSave={onSave}
          resultError={error}
          resultLoading={loading}
        />
      </Card.Body>
    </Card>
  )
}

export default NewWarehouseCell
