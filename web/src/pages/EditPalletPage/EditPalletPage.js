import PalletsLayout from 'src/layouts/PalletsLayout'
import EditPalletCell from 'src/components/EditPalletCell'

const EditPalletPage = ({ id }) => {
  return (
    <PalletsLayout>
      <EditPalletCell id={id} />
    </PalletsLayout>
  )
}

export default EditPalletPage
