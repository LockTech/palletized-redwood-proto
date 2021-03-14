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
    locationCount(location: ComplexLocationInput): Int!
  }

  type Mutation {
    createLocation(input: CreateLocationInput!): Location!
    deleteLocation(id: String!): Location!
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

  input ComplexLocationInput {
    id: String
    name: String
    updatedAt: DateTime
    createdAt: DateTime
    warehouse: ComplexWarehouseInput
    warehouseId: String
    pallets: [ComplexPalletInput]
  }
`
