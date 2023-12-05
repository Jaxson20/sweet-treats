const typeDefs = `
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
  }

  type ChristmasOrder {
    _id: ID!
    firstName: String!
    lastName: String!
    email: String!
    phoneNumber: String
    numberOfBoxes: Int!
    specialMessage: String
    createdAt: String!
  }

  type Auth {
    token: ID
  }

  type Query {
    user: User
  }

  type Mutation {
    signin(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    createChristmasOrder(firstName: String!, lastName: String!, email: String!, phoneNumber: Int!, numberOfBoxes: Int!, specialMessage: String): ChristmasOrder
  }
`;

module.exports = typeDefs;
