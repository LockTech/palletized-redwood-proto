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
      <Route notfound page={NotFoundPage} />
      {/* Orders */}
      <Route path="/order/create" page={OrderCreatePage} name="createOrder" />
      <Route path="/orders/{id}/edit" page={OrderEditPage} name="editOrder" />
      <Route path="/orders/{id}" page={OrderPage} name="order" />
      <Route path="/orders" page={OrderListPage} name="orders" />
      {/* Warehouses */}
      <Route
        path="/warehouse/create"
        page={WarehouseCreatePage}
        name="createWarehouse"
      />
      <Route
        path="/warehouses/{id}/edit"
        page={WHEditPage}
        name="editWarehouse"
      />
      <Route path="/warehouses/{id}" page={WHPage} name="warehouse" />
      <Route path="/warehouses" page={WHListPage} name="warehouses" />
      {/* Locations */}
      <Route
        path="/location/create"
        page={LocationCreatePage}
        name="createLocation"
      />
      <Route
        path="/locations/{id}/edit"
        page={LocationEditPage}
        name="editLocation"
      />
      <Route path="/locations/{id}" page={LocationPage} name="location" />
      <Route path="/locations" page={LocationListPage} name="locations" />
      {/* Products */}
      <Route path="/products" page={ProductListPage} name="products" />
      <Route
        path="/product/create"
        page={ProductCreatePage}
        name="createProduct"
      />
    </Router>
  )
}

export default Routes
