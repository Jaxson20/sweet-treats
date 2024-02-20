const typeDefs = `
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
  }

  type ChristmasOrder {
    _id: ID
    firstName: String!
    lastName: String!
    email: String!
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
    createChristmasOrder(firstName: String!, lastName: String!, email: String!, numberOfBoxes: Int!, specialMessage: String): ChristmasOrder
    createValentinesOrder(firstName: String!, lastName: String!, email: String!, numberOfBoxes: Int!, specialMessage: String): ValentinesOrder
  }
`;
module.exports = typeDefs;
