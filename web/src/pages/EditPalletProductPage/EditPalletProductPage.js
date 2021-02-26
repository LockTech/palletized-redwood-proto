import DashLayout from 'src/layouts/DashLayout'
import EditPalletProductCell from 'src/components/EditPalletProductCell'

const EditPalletProductPage = ({ id }) => {
  return (
    <DashLayout>
      <EditPalletProductCell id={id} />
    </DashLayout>
  )
}

export default EditPalletProductPage
