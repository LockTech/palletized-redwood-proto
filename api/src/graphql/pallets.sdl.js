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
    status: PalletStatus!
  }

  type Query {
    pallets: [Pallet!]!
    palletCount(orderId: String, pallet: ComplexPalletInput): Int!
  }

  enum PalletStatus {
    ACTIVE
    SHIPPED
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

  input ComplexPalletInput {
    id: String
    name: String
  }
`
