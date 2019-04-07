import { gql } from "apollo-server-express";

export default gql`
  scalar Date

  type Status {
    message: String!
  }

  type Auth {
    token: String!
    username: String
    email: String!
    firstName: String
    lastName: String
    avatar: String
  }

  type User {
    _id: ID!
    username: String
    email: String!
    firstName: String
    lastName: String
    avatar: String
    createdAt: Date!
    updatedAt: Date!
  }

  type Me {
    _id: ID!
    username: String
    email: String!
    firstName: String
    lastName: String
    avatar: String
    createdAt: Date!
    updatedAt: Date!
  }

  type Message {
    _id: ID!
    text: String!
    createdAt: Date!
    updatedAt: Date!
  }

  type Query {
    getMessage(_id: ID!): Message
    getMessages: [Message]
    me: Me
  }

  type Mutation {
    createMessage(text: String!): Message
    updateMessage(_id: ID!, text: String!): Message
    deleteMessage(_id: ID!): Status
    signup(
      email: String!
      fullName: String!
      password: String!
      avatar: String
      username: String
    ): Auth
    login(email: String!, password: String!): Auth
  }

  schema {
    query: Query
    mutation: Mutation
  }
`;
