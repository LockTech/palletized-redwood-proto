import PalletProductsLayout from 'src/layouts/PalletProductsLayout'
import EditPalletProductCell from 'src/components/EditPalletProductCell'

const EditPalletProductPage = ({ id }) => {
  return (
    <PalletProductsLayout>
      <EditPalletProductCell id={id} />
    </PalletProductsLayout>
  )
}

export default EditPalletProductPage
