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
    palletCount(pallet: ComplexPalletInput): Int!
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
    updatedAt: DateTime
    createdAt: DateTime
    location: ComplexLocationInput
    locationId: String
    order: ComplexOrderInput
    orderId: String
    PalletProduct: [ComplexPalletProductInput]
    status: PalletStatus
  }
`
