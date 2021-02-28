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
    activeOrderCountInWarehouse(warehouseId: String!): Int!
  }

  input CreateOrderInput {
    name: String!
  }

  input UpdateOrderInput {
    name: String
  }
`
