import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes, navigate } from '@redwoodjs/router'

import { QUERY } from 'src/components/PalletsCell'

const DELETE_PALLET_MUTATION = gql`
  mutation DeletePalletMutation($id: String!) {
    deletePallet(id: $id) {
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

const Pallet = ({ pallet }) => {
  const { addMessage } = useFlash()
  const [deletePallet] = useMutation(DELETE_PALLET_MUTATION, {
    onCompleted: () => {
      navigate(routes.pallets())
      addMessage('Pallet deleted.', { classes: 'rw-flash-success' })
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete pallet ' + id + '?')) {
      deletePallet({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Pallet {pallet.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{pallet.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{pallet.name}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(pallet.updatedAt)}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(pallet.createdAt)}</td>
            </tr>
            <tr>
              <th>Location id</th>
              <td>{pallet.locationId}</td>
            </tr>
            <tr>
              <th>Order id</th>
              <td>{pallet.orderId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editPallet({ id: pallet.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(pallet.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default Pallet
