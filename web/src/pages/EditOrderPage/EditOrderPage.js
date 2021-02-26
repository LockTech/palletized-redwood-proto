import DashLayout from 'src/layouts/DashLayout'
import EditOrderCell from 'src/components/EditOrderCell'

const EditOrderPage = ({ id }) => {
  return (
    <DashLayout>
      <EditOrderCell id={id} />
    </DashLayout>
  )
}

export default EditOrderPage
