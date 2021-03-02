import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'

import { _QUERY } from 'src/components/WarehousesCell'

const CREATE_WAREHOUSE_MUTATION = gql`
  mutation CreateWarehouseMutation($input: CreateWarehouseInput!) {
    createWarehouse(input: $input) {
      id
    }
  }
`

const NewWarehouseCell = ({ render }) => {
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

  return render(onSave, loading, error)
}

export default NewWarehouseCell
