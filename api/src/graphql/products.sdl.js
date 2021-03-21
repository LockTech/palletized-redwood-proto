export const schema = gql`
  type Product {
    id: String!
    productName: String!
    description: String
    updatedAt: DateTime
    createdAt: DateTime!
    PalletProduct: [PalletProduct]!
  }

  type Query {
    products: [Product!]!
  }

  type Mutation {
    createProduct(input: CreateProductInput!): Product!
  }

  input CreateProductInput {
    productName: String!
    description: String
  }

  input UpdateProductInput {
    productName: String
    description: String
  }

  input QueryProductInput {
    id: String
    name: String
    updatedAt: DateTime
    createdAt: DateTime
    PalletProduct: QueryPalletProductInput
  }
`
