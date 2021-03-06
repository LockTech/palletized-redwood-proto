// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage
import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/order/new" page={OrderNewPage} name="newOrder" />
      <Route path="/warehouses/new" page={WHNewPage} name="newWarehouse" />
      <Route path="/warehouses/{id}/edit" page={WHEditPage} name="editWarehouse" />
      <Route path="/warehouses/{id}" page={WHPage} name="warehouse" />
      <Route path="/warehouses" page={WHListPage} name="warehouses" />
      {/* General */}
      <Route path="/" page={DashboardPage} name="dashboard" />
      <Route notfound={NotFoundPage} page={NotFoundPage} />
    </Router>
  )
}

export default Routes
