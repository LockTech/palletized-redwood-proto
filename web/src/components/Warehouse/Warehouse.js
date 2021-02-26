import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes, navigate } from '@redwoodjs/router'

import { QUERY } from 'src/components/WarehousesCell'

const DELETE_WAREHOUSE_MUTATION = gql`
  mutation DeleteWarehouseMutation($id: String!) {
    deleteWarehouse(id: $id) {
      id
    }
  }
`

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
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

const Warehouse = ({ warehouse }) => {
  const { addMessage } = useFlash()
  const [deleteWarehouse] = useMutation(DELETE_WAREHOUSE_MUTATION, {
    onCompleted: () => {
      navigate(routes.warehouses())
      addMessage('Warehouse deleted.', { classes: 'rw-flash-success' })
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete warehouse ' + id + '?')) {
      deleteWarehouse({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Warehouse {warehouse.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{warehouse.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{warehouse.name}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(warehouse.updatedAt)}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(warehouse.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editWarehouse({ id: warehouse.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(warehouse.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default Warehouse
