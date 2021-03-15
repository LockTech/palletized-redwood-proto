export const schema = gql`
  type UserProfile {
    id: String!
    warehouse: Warehouse!
    warehouseId: String!
    updatedAt: DateTime!
    createdAt: DateTime!
  }

  type Query {
    userProfiles: [UserProfile!]!
    userProfile(id: String!): UserProfile
  }

  type Mutation {
    createUserProfile(input: CreateUserProfileInput): UserProfile!
    updateUserProfile(id: String!, input: UpdateUserProfileInput!): UserProfile!
    deleteUserProfile(id: String!): UserProfile!
  }

  input CreateUserProfileInput {
    id: String!
    warehouseId: String!
  }

  input UpdateUserProfileInput {
    id: String
    warehouseId: String
  }
`
