import PalletProductsLayout from 'src/layouts/PalletProductsLayout'
import PalletProductCell from 'src/components/PalletProductCell'

const PalletProductPage = ({ id }) => {
  return (
    <PalletProductsLayout>
      <PalletProductCell id={id} />
    </PalletProductsLayout>
  )
}

export default PalletProductPage
