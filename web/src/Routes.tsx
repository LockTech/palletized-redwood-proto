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
      <Route path="/" page={DashboardPage} name="dashboard" />
      {/* Pallet-Products */}
      <Route
        path="/pallet-products/new"
        page={NewPalletProductPage}
        name="newPalletProduct"
      />
      <Route
        path="/pallet-products/{id}/edit"
        page={EditPalletProductPage}
        name="editPalletProduct"
      />
      <Route
        path="/pallet-products/{id}"
        page={PalletProductPage}
        name="palletProduct"
      />
      <Route
        path="/pallet-products"
        page={PalletProductsPage}
        name="palletProducts"
      />
      {/* Pallets */}
      <Route path="/pallets/new" page={NewPalletPage} name="newPallet" />
      <Route
        path="/pallets/{id}/edit"
        page={EditPalletPage}
        name="editPallet"
      />
      <Route path="/pallets/{id}" page={PalletPage} name="pallet" />
      <Route path="/pallets" page={PalletsPage} name="pallets" />
      {/* Orders */}
      <Route path="/orders/new" page={NewOrderPage} name="newOrder" />
      <Route path="/orders/{id}/edit" page={EditOrderPage} name="editOrder" />
      <Route path="/orders/{id}" page={OrderPage} name="order" />
      <Route path="/orders" page={OrdersPage} name="orders" />
      {/* Products */}
      <Route path="/products/new" page={NewProductPage} name="newProduct" />
      <Route
        path="/products/{id}/edit"
        page={EditProductPage}
        name="editProduct"
      />
      <Route path="/products/{id}" page={ProductPage} name="product" />
      <Route path="/products" page={ProductsPage} name="products" />
      {/* Locations */}
      <Route path="/locations/new" page={NewLocationPage} name="newLocation" />
      <Route
        path="/locations/{id}/edit"
        page={EditLocationPage}
        name="editLocation"
      />
      <Route path="/locations/{id}" page={LocationPage} name="location" />
      <Route path="/locations" page={LocationsPage} name="locations" />
      {/* Warehouses */}
      <Route
        path="/warehouses/new"
        page={NewWarehousePage}
        name="newWarehouse"
      />
      <Route
        path="/warehouses/{id}/edit"
        page={EditWarehousePage}
        name="editWarehouse"
      />
      <Route path="/warehouses/{id}" page={WarehousePage} name="warehouse" />
      <Route path="/warehouses" page={WarehousesPage} name="warehouses" />
      {/* Misc */}
      <Route notfound={NotFoundPage} page={NotFoundPage} />
    </Router>
  )
}

export default Routes
