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
      {/* General */}
      <Route path="/" page={DashboardPage} name="dashboard" />
      <Route notfound={NotFoundPage} page={NotFoundPage} />
      {/* Orders */}
      <Route path="/orders" page={OrderListPage} name="orders" />
      <Route path="/order/create" page={OrderCreatePage} name="createOrder" />
      {/* Warehouses */}
      <Route path="/warehouse/create" page={WarehouseCreatePage} name="createWarehouse" />
      <Route path="/warehouses/{id}/edit" page={WHEditPage} name="editWarehouse" />
      <Route path="/warehouses/{id}" page={WHPage} name="warehouse" />
      <Route path="/warehouses" page={WHListPage} name="warehouses" />
    </Router>
  )
}

export default Routes
