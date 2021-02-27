import { Link, routes } from '@redwoodjs/router'

import DashLayout from 'src/layouts/DashLayout/DashLayout'

const DashboardPage = () => {
  return (
    <DashLayout>
      <h1>Dashboard</h1>
      <p className="text-muted">An overview of ACME Chaleston.</p>
    </DashLayout>
  )
}

export default DashboardPage
