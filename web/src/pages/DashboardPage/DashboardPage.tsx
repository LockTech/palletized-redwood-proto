import { Link, routes } from '@redwoodjs/router'

import DashLayout from 'src/layouts/DashLayout/DashLayout'

const DashboardPage = () => {
  return (
    <DashLayout>
      <h1>DashboardPage</h1>
      <p>
        Find me in <code>./web/src/pages/DashboardPage/DashboardPage.js</code>
      </p>
      <p>
        My default route is named <code>dashboard</code>, link to me with `
        <Link to={routes.dashboard()}>Dashboard</Link>`
      </p>
    </DashLayout>
  )
}

export default DashboardPage
