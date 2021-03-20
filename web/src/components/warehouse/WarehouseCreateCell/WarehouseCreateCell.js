import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import Card from 'react-bootstrap/Card'

import WarehouseForm from 'src/components/warehouse/WarehouseForm/WarehouseForm'
import WarehouseTooltip from 'src/components/warehouse/WarehouseTooltip/WarehouseTooltip'

const WAREHOUSE_CREATE_MUTATION = gql`
  mutation WarehouseCreateMutation($input: CreateWarehouseInput!) {
    createWarehouse(input: $input) {
      id
    }
  }
`

const WarehouseCreateCell = () => {
  const [createWarehouse, { loading, error }] = useMutation(
    WAREHOUSE_CREATE_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.warehouses())
        toast.success('Warehouse has been successfully created.')
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
      <Card.Header className="d-flex flex-direction-row align-items-center justify-content-between">
        New Warehouse
        <WarehouseTooltip />
      </Card.Header>
      <Card.Body>
        <WarehouseForm onSave={onSave} error={error} loading={loading} />
      </Card.Body>
    </Card>
  )
}

export default WarehouseCreateCell
