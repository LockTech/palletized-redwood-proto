import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import Card from 'react-bootstrap/Card'

import WarehouseForm from 'src/components/warehouse/WarehouseForm'

const WAREHOUSE_CREATE_MUTATION = gql`
  mutation WarehouseCreateMutation($input: CreateWarehouseInput!) {
    createWarehouse(input: $input) {
      id
    }
  }
`

const WarehouseCreateCell = () => {
  const { addMessage } = useFlash()
  const [createWarehouse, { loading, error }] = useMutation(
    WAREHOUSE_CREATE_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.warehouses())
        addMessage('Warehouse has been successfully created.', {
          variant: 'success',
        })
      },
    }
  )

  const onSave = (input) => {
    try {
      createWarehouse({ variables: { input } })
    } catch (err) {
      // console.log(err)
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

export default WarehouseCreateCell
