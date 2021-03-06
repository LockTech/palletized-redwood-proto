export const schema = gql`
  type Order {
    id: String!
    orderName: String!
    jobName: String
    updatedAt: DateTime!
    createdAt: DateTime!
    pallets: [Pallet]!
  }

  type Query {
    orders: [Order!]!
    order(id: String!): Order
    orderCountInWarehouse(
      warehouseId: String!
      order: ComplexOrderInput = null
    ): Int!
  }

  type Mutation {
    createOrder(input: CreateOrderInput!): Order!
    # updateOrder(id: String!, input: UpdateOrderInput!): Order!
    # deleteOrder(id: String!): Order!
  }

  input CreateOrderInput {
    orderName: String!
    jobName: String
  }

  input UpdateOrderInput {
    orderName: String!
    jobName: String
  }

  input ComplexOrderInput {
    name: String
    type: String
  }
`
