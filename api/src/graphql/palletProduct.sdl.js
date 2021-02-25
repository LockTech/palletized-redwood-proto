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
    palletProduct(id: String!): PalletProduct
  }

  input CreatePalletProductInput {
    palletId: String!
    productId: String!
  }

  input UpdatePalletProductInput {
    palletId: String
    productId: String
  }

  type Mutation {
    createPalletProduct(input: CreatePalletProductInput!): PalletProduct!
    updatePalletProduct(
      id: String!
      input: UpdatePalletProductInput!
    ): PalletProduct!
    deletePalletProduct(id: String!): PalletProduct!
  }
`
