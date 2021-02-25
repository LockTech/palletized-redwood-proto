import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/PalletsCell'

const DELETE_PALLET_MUTATION = gql`
  mutation DeletePalletMutation($id: String!) {
    deletePallet(id: $id) {
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

const PalletsList = ({ pallets }) => {
  const { addMessage } = useFlash()
  const [deletePallet] = useMutation(DELETE_PALLET_MUTATION, {
    onCompleted: () => {
      addMessage('Pallet deleted.', { classes: 'rw-flash-success' })
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete pallet ' + id + '?')) {
      deletePallet({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Updated at</th>
            <th>Created at</th>
            <th>Location id</th>
            <th>Order id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {pallets.map((pallet) => (
            <tr key={pallet.id}>
              <td>{truncate(pallet.id)}</td>
              <td>{truncate(pallet.name)}</td>
              <td>{timeTag(pallet.updatedAt)}</td>
              <td>{timeTag(pallet.createdAt)}</td>
              <td>{truncate(pallet.locationId)}</td>
              <td>{truncate(pallet.orderId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.pallet({ id: pallet.id })}
                    title={'Show pallet ' + pallet.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editPallet({ id: pallet.id })}
                    title={'Edit pallet ' + pallet.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete pallet ' + pallet.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(pallet.id)}
                  >
                    Delete
                  </a>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default PalletsList
