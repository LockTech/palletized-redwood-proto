import DashLayout from 'src/layouts/DashLayout/DashLayout'
import ActiveOrderCountCardCell from 'src/components/ActiveOrderCountCardCell'

const DashboardPage = () => {
  return (
    <DashLayout>
      <h1>Dashboard</h1>
      <p className="text-muted">An overview of ACME Chaleston.</p>
      <ActiveOrderCountCardCell warehouseId="064b12ba-468d-4c29-b852-b1a5ced654c0" />
    </DashLayout>
  )
}

export default DashboardPage
