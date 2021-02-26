export const schema = gql`
  type Product {
    id: String!
    name: String!
    updatedAt: DateTime
    createdAt: DateTime!
    PalletProduct: [PalletProduct]!
  }

  type Query {
    products: [Product!]!
  }

  input CreateProductInput {
    name: String!
  }

  input UpdateProductInput {
    name: String
  }
`
