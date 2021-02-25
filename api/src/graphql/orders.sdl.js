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
    order(id: String!): Order
  }

  input CreateOrderInput {
    name: String!
  }

  input UpdateOrderInput {
    name: String
  }

  type Mutation {
    createOrder(input: CreateOrderInput!): Order!
    updateOrder(id: String!, input: UpdateOrderInput!): Order!
    deleteOrder(id: String!): Order!
  }
`
