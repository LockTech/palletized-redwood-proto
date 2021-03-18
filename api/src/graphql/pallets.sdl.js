export const schema = gql`
  enum PalletStatus {
    ACTIVE
    SHIPPED
  }

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
    countPallets(pallet: QueryPalletInput): Int!
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

  input QueryPalletInput {
    id: String
    name: String
    updatedAt: DateTime
    createdAt: DateTime
    location: QueryLocationInput
    locationId: String
    order: QueryOrderInput
    orderId: String
    PalletProduct: QueryPalletProductInput
    status: PalletStatus
  }
`
