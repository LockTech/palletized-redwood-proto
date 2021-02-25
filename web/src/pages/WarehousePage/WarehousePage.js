import WarehousesLayout from 'src/layouts/WarehousesLayout'
import WarehouseCell from 'src/components/WarehouseCell'

const WarehousePage = ({ id }) => {
  return (
    <WarehousesLayout>
      <WarehouseCell id={id} />
    </WarehousesLayout>
  )
}

export default WarehousePage
