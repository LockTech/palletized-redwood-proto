import DashLayout from 'src/layouts/DashLayout'
import WarehouseCell from 'src/components/WarehouseCell'

const WarehousePage = ({ id }) => {
  return (
    <DashLayout>
      <WarehouseCell id={id} />
    </DashLayout>
  )
}

export default WarehousePage
