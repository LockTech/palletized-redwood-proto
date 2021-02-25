import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes, navigate } from '@redwoodjs/router'

import { QUERY } from 'src/components/LocationsCell'

const DELETE_LOCATION_MUTATION = gql`
  mutation DeleteLocationMutation($id: String!) {
    deleteLocation(id: $id) {
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

const Location = ({ location }) => {
  const { addMessage } = useFlash()
  const [deleteLocation] = useMutation(DELETE_LOCATION_MUTATION, {
    onCompleted: () => {
      navigate(routes.locations())
      addMessage('Location deleted.', { classes: 'rw-flash-success' })
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete location ' + id + '?')) {
      deleteLocation({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Location {location.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{location.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{location.name}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(location.updatedAt)}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(location.createdAt)}</td>
            </tr>
            <tr>
              <th>Warehouse id</th>
              <td>{location.warehouseId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editLocation({ id: location.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(location.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default Location
