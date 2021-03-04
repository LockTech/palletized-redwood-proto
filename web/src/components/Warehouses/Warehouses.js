import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'

import { QUERY } from 'src/components/WarehousesCell'
import WarehouseCard from 'src/components/WarehouseCard/WarehouseCard'

const DELETE_WAREHOUSE_MUTATION = gql`
  mutation DeleteWarehouseMutation($id: String!) {
    deleteWarehouse(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const WarehousesList = ({ warehouses }) => {
  const { addMessage } = useFlash()
  const [deleteWarehouse] = useMutation(DELETE_WAREHOUSE_MUTATION, {
    onCompleted: () => {
      addMessage('Warehouse deleted.', { classes: 'rw-flash-success' })
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete warehouse ' + id + '?')) {
      deleteWarehouse({ variables: { id } })
    }
  }

  return (
    <Table bordered responsive>
      <thead>
        <tr>
          <th>Name</th>
          <th>Updated at</th>
          <th>Created at</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {warehouses.map((warehouse) => (
          <tr key={warehouse.id}>
            <td className="text-nowrap">{truncate(warehouse.name)}</td>
            <td className="text-nowrap">{timeTag(warehouse.updatedAt)}</td>
            <td className="text-nowrap">{timeTag(warehouse.createdAt)}</td>
            <td>
              <div className="d-flex justify-content-end">
                <Button
                  as={Link}
                  className="mr-3"
                  to={routes.warehouse({ id: warehouse.id })}
                  size="sm"
                  variant="outline-primary"
                >
                  Details
                </Button>
                <Button
                  as={Link}
                  className="mr-3"
                  to={routes.editWarehouse({ id: warehouse.id })}
                  size="sm"
                  variant="outline-secondary"
                >
                  Edit
                </Button>
                <Button
                  href="#"
                  onClick={() => onDeleteClick(warehouse.id)}
                  size="sm"
                  variant="outline-danger"
                >
                  Delete
                </Button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default WarehousesList
