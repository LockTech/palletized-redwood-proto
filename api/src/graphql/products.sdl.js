export const schema = gql`
  type Product {
    id: String!
    partNumber: String!
    description: String
    updatedAt: DateTime
    createdAt: DateTime!
    PalletProduct: [PalletProduct]!
  }

  type Query {
    products: [Product!]!
    product(id: String!): Product!
  }

  type Mutation {
    createProduct(input: CreateProductInput!): Product!
    updateProduct(id: String!, input: UpdateProductInput!): Product!
  }

  input CreateProductInput {
    partNumber: String!
    description: String
  }

  input UpdateProductInput {
    partNumber: String
    description: String
  }

  input QueryProductInput {
    id: String
    partNumber: String
    description: String
    updatedAt: DateTime
    createdAt: DateTime
    PalletProduct: QueryPalletProductInput
  }
`
