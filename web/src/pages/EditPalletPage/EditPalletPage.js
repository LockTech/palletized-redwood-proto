import DashLayout from 'src/layouts/DashLayout'
import EditPalletCell from 'src/components/EditPalletCell'

const EditPalletPage = ({ id }) => {
  return (
    <DashLayout>
      <EditPalletCell id={id} />
    </DashLayout>
  )
}

export default EditPalletPage
