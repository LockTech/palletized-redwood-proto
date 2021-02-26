import DashLayout from 'src/layouts/DashLayout'
import PalletCell from 'src/components/PalletCell'

const PalletPage = ({ id }) => {
  return (
    <DashLayout>
      <PalletCell id={id} />
    </DashLayout>
  )
}

export default PalletPage
