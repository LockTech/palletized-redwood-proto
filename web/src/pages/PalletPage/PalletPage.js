import PalletsLayout from 'src/layouts/PalletsLayout'
import PalletCell from 'src/components/PalletCell'

const PalletPage = ({ id }) => {
  return (
    <PalletsLayout>
      <PalletCell id={id} />
    </PalletsLayout>
  )
}

export default PalletPage
