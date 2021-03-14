export const schema = gql`
  type Warehouse {
    id: String!
    name: String!
    updatedAt: DateTime!
    createdAt: DateTime!
    locations: [Location]!
  }

  type Query {
    warehouses: [Warehouse!]!
    warehouse(id: String!): Warehouse
  }

  type Mutation {
    createWarehouse(input: CreateWarehouseInput!): Warehouse!
    updateWarehouse(id: String!, input: UpdateWarehouseInput!): Warehouse!
    deleteWarehouse(id: String!): Warehouse!
  }

  input CreateWarehouseInput {
    name: String!
  }

  input UpdateWarehouseInput {
    name: String
  }

  input ComplexWarehouseInput {
    id: String
    name: String
    updatedAt: DateTime
    createdAt: DateTime
    locations: [ComplexLocationInput]
  }
`
