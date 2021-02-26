export const schema = gql`
  type Order {
    id: String!
    name: String!
    updatedAt: DateTime!
    createdAt: DateTime!
    pallets: [Pallet]!
  }

  type Query {
    orders: [Order!]!
  }

  input CreateOrderInput {
    name: String!
  }

  input UpdateOrderInput {
    name: String
  }
`
