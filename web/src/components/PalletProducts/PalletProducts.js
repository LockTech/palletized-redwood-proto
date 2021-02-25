import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/PalletProductsCell'

const DELETE_PALLET_PRODUCT_MUTATION = gql`
  mutation DeletePalletProductMutation($id: String!) {
    deletePalletProduct(id: $id) {
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

const PalletProductsList = ({ palletProducts }) => {
  const { addMessage } = useFlash()
  const [deletePalletProduct] = useMutation(DELETE_PALLET_PRODUCT_MUTATION, {
    onCompleted: () => {
      addMessage('PalletProduct deleted.', { classes: 'rw-flash-success' })
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete palletProduct ' + id + '?')) {
      deletePalletProduct({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Pallet id</th>
            <th>Product id</th>
            <th>Updated at</th>
            <th>Created at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {palletProducts.map((palletProduct) => (
            <tr key={palletProduct.id}>
              <td>{truncate(palletProduct.id)}</td>
              <td>{truncate(palletProduct.palletId)}</td>
              <td>{truncate(palletProduct.productId)}</td>
              <td>{timeTag(palletProduct.updatedAt)}</td>
              <td>{timeTag(palletProduct.createdAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.palletProduct({ id: palletProduct.id })}
                    title={'Show palletProduct ' + palletProduct.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editPalletProduct({ id: palletProduct.id })}
                    title={'Edit palletProduct ' + palletProduct.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete palletProduct ' + palletProduct.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(palletProduct.id)}
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

export default PalletProductsList
