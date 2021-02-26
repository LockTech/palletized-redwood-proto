import DashLayout from 'src/layouts/DashLayout'
import EditWarehouseCell from 'src/components/EditWarehouseCell'

const EditWarehousePage = ({ id }) => {
  return (
    <DashLayout>
      <EditWarehouseCell id={id} />
    </DashLayout>
  )
}

export default EditWarehousePage
