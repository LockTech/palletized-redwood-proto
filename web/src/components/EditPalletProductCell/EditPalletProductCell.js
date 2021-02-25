import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import PalletProductForm from 'src/components/PalletProductForm'

export const QUERY = gql`
  query FIND_PALLET_PRODUCT_BY_ID($id: String!) {
    palletProduct: palletProduct(id: $id) {
      id
      palletId
      productId
      updatedAt
      createdAt
    }
  }
`
const UPDATE_PALLET_PRODUCT_MUTATION = gql`
  mutation UpdatePalletProductMutation(
    $id: String!
    $input: UpdatePalletProductInput!
  ) {
    updatePalletProduct(id: $id, input: $input) {
      id
      palletId
      productId
      updatedAt
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ palletProduct }) => {
  const { addMessage } = useFlash()
  const [updatePalletProduct, { loading, error }] = useMutation(
    UPDATE_PALLET_PRODUCT_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.palletProducts())
        addMessage('PalletProduct updated.', { classes: 'rw-flash-success' })
      },
    }
  )

  const onSave = (input, id) => {
    updatePalletProduct({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit PalletProduct {palletProduct.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <PalletProductForm
          palletProduct={palletProduct}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
