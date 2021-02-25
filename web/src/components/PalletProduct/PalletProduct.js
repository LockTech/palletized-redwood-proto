import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes, navigate } from '@redwoodjs/router'

import { QUERY } from 'src/components/PalletProductsCell'

const DELETE_PALLET_PRODUCT_MUTATION = gql`
  mutation DeletePalletProductMutation($id: String!) {
    deletePalletProduct(id: $id) {
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

const PalletProduct = ({ palletProduct }) => {
  const { addMessage } = useFlash()
  const [deletePalletProduct] = useMutation(DELETE_PALLET_PRODUCT_MUTATION, {
    onCompleted: () => {
      navigate(routes.palletProducts())
      addMessage('PalletProduct deleted.', { classes: 'rw-flash-success' })
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete palletProduct ' + id + '?')) {
      deletePalletProduct({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            PalletProduct {palletProduct.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{palletProduct.id}</td>
            </tr>
            <tr>
              <th>Pallet id</th>
              <td>{palletProduct.palletId}</td>
            </tr>
            <tr>
              <th>Product id</th>
              <td>{palletProduct.productId}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(palletProduct.updatedAt)}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(palletProduct.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editPalletProduct({ id: palletProduct.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(palletProduct.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default PalletProduct
