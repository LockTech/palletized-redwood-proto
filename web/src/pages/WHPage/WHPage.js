import DashLayout from 'src/layouts/DashLayout/DashLayout'
import WarehouseCell from 'src/components/WarehouseCell'

const WHPage = ({ id }) => {
  return (
    <DashLayout>
      <WarehouseCell id={id} />
    </DashLayout>
  )
}

export default WHPage
