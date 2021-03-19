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
    location(id: String!): Location!
    countLocations(location: QueryLocationInput): Int!
  }

  type Mutation {
    createLocation(input: CreateLocationInput!): Location!
    updateLocation(id: String!, input: UpdateLocationInput!): Location!
    deleteLocation(id: String!): Location!
  }

  input LocationWarehouseInput {
    id: String!
    name: String!
  }

  input CreateLocationInput {
    name: String!
    warehouse: LocationWarehouseInput!
  }
  input UpdateLocationInput {
    name: String
    warehouse: LocationWarehouseInput
  }

  input QueryLocationInput {
    id: String
    name: String
    updatedAt: DateTime
    createdAt: DateTime
    warehouse: QueryWarehouseInput
    warehouseId: String
    pallets: QueryPalletInput
  }
`
