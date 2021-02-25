export const schema = gql`
  type Pallet {
    id: String!
    name: String!
    updatedAt: DateTime!
    createdAt: DateTime!
    location: Location!
    locationId: String!
    order: Order!
    orderId: String!
    PalletProducts: [PalletProduct]!
  }

  type Query {
    pallets: [Pallet!]!
    pallet(id: String!): Pallet
  }

  input CreatePalletInput {
    name: String!
    locationId: String!
    orderId: String!
  }

  input UpdatePalletInput {
    name: String
    locationId: String
    orderId: String
  }

  type Mutation {
    createPallet(input: CreatePalletInput!): Pallet!
    updatePallet(id: String!, input: UpdatePalletInput!): Pallet!
    deletePallet(id: String!): Pallet!
  }
`
