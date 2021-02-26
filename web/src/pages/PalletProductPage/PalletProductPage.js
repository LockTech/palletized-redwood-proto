import DashLayout from 'src/layouts/DashLayout'
import PalletProductCell from 'src/components/PalletProductCell'

const PalletProductPage = ({ id }) => {
  return (
    <DashLayout>
      <PalletProductCell id={id} />
    </DashLayout>
  )
}

export default PalletProductPage
