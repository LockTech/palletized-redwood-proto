export const schema = gql`
  type Location {
    id: String!
    name: String!
    updatedAt: DateTime
    createdAt: DateTime!
    warehouse: Warehouse!
    warehouseId: String!
    pallets: [Pallet]!
  }

  type Query {
    locations: [Location!]!
  }

  input CreateLocationInput {
    name: String!
    warehouseId: String!
  }

  input UpdateLocationInput {
    name: String
    warehouseId: String
  }
`
