import { gql } from "apollo-server-express";

export default gql`

  type Message {
    _id: String
    text: String
  }

  type Query {
    getMessages: [Message]
  }

  schema {
    query: Query
  }
`;
