export const schema = gql`
  type PalletProduct {
    id: String!
    pallet: Pallet!
    palletId: String!
    product: Product!
    productId: String!
    updatedAt: DateTime!
    createdAt: DateTime!
  }

  type Query {
    palletProducts: [PalletProduct!]!
  }

  input CreatePalletProductInput {
    palletId: String!
    productId: String!
  }

  input UpdatePalletProductInput {
    palletId: String
    productId: String
  }

  input ComplexPalletProductInput {
    id: String
    pallet: ComplexPalletInput
    palletId: String
    product: ComplexProductInput
    productId: String
    updatedAt: DateTime
    createdAt: DateTime
  }
`
