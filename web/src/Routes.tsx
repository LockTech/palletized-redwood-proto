// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'

import DashboardPage from './pages/DashboardPage/DashboardPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'

const Routes = () => {
  return (
    <Router>
      {/* General */}
      <Route path="/" page={DashboardPage} name="dashboard" />
      <Route notfound={NotFoundPage} page={NotFoundPage} />
    </Router>
  )
}

export default Routes
