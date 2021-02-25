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
    location(id: String!): Location
  }

  input CreateLocationInput {
    name: String!
    warehouseId: String!
  }

  input UpdateLocationInput {
    name: String
    warehouseId: String
  }

  type Mutation {
    createLocation(input: CreateLocationInput!): Location!
    updateLocation(id: String!, input: UpdateLocationInput!): Location!
    deleteLocation(id: String!): Location!
  }
`
