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
    locations(warehouseId: String = null): [Location!]!
  }

  type Mutation {
    createLocation(input: CreateLocationInput!): Location!
  }

  input CreateLocationInput {
    name: String!
    warehouseId: String!
    warehouseName: String!
  }

  input UpdateLocationInput {
    name: String
    warehouseId: String
  }
`
