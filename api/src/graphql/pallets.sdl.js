export const schema = gql`
  type Pallet {
    id: String!
    name: String!
    updatedAt: DateTime!
    createdAt: DateTime!
    location: Location
    locationId: String
    order: Order
    orderId: String
    PalletProduct: [PalletProduct]!
  }

  type Query {
    pallets: [Pallet!]!
  }

  input CreatePalletInput {
    name: String!
    locationId: String
    orderId: String
  }

  input UpdatePalletInput {
    name: String
    locationId: String
    orderId: String
  }
`
