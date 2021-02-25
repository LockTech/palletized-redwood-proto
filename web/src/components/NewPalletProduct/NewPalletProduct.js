import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import PalletProductForm from 'src/components/PalletProductForm'

import { QUERY } from 'src/components/PalletProductsCell'

const CREATE_PALLET_PRODUCT_MUTATION = gql`
  mutation CreatePalletProductMutation($input: CreatePalletProductInput!) {
    createPalletProduct(input: $input) {
      id
    }
  }
`

const NewPalletProduct = () => {
  const { addMessage } = useFlash()
  const [createPalletProduct, { loading, error }] = useMutation(
    CREATE_PALLET_PRODUCT_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.palletProducts())
        addMessage('PalletProduct created.', { classes: 'rw-flash-success' })
      },
    }
  )

  const onSave = (input) => {
    createPalletProduct({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New PalletProduct</h2>
      </header>
      <div className="rw-segment-main">
        <PalletProductForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewPalletProduct
