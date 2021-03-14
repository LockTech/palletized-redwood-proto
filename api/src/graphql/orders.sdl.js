export const schema = gql`
  type Order {
    id: String!
    orderNumber: String!
    jobName: String
    updatedAt: DateTime!
    createdAt: DateTime!
    pallets: [Pallet]!
  }

  type Query {
    orders(warehouseId: String): [Order!]!
    order(id: String!): Order
    countOrders(
      warehouseId: String = null
      locationId: String = null
      order: ComplexOrderInput = null
    ): Int!
  }

  type Mutation {
    createOrder(input: CreateOrderInput!): Order!
    updateOrder(id: String!, input: UpdateOrderInput!): Order!
    deleteOrder(id: String!): Order!
  }

  input CreateOrderInput {
    orderNumber: String!
    jobName: String
  }

  input UpdateOrderInput {
    orderNumber: String!
    jobName: String
  }

  input ComplexOrderInput {
    id: String
    orderNumber: String
    jobName: String
    updatedAt: DateTime
    createdAt: DateTime
    pallets: [ComplexPalletInput]
  }
`
