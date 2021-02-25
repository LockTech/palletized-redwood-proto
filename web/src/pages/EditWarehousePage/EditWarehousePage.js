import WarehousesLayout from 'src/layouts/WarehousesLayout'
import EditWarehouseCell from 'src/components/EditWarehouseCell'

const EditWarehousePage = ({ id }) => {
  return (
    <WarehousesLayout>
      <EditWarehouseCell id={id} />
    </WarehousesLayout>
  )
}

export default EditWarehousePage
