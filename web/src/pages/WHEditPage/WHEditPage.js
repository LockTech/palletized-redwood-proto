import DashLayout from 'src/layouts/DashLayout/DashLayout'
import EditWarehouseCell from 'src/components/EditWarehouseCell'

const WHEditPage = ({ id }) => {
  return (
    <DashLayout>
      <EditWarehouseCell id={id} />
    </DashLayout>
  )
}

export default WHEditPage
