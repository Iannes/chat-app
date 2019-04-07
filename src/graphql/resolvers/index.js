import GraphQLDate from 'graphql-date'
import MessageResolvers from './message-resolvers';
import UserResolvers from './user-resolvers';

export default {
  Date: GraphQLDate,
  Query: {
    getMessage: MessageResolvers.getMessage,
    getMessages: MessageResolvers.getMessages,
    me: UserResolvers.me
  },
  Mutation: {
    createMessage: MessageResolvers.createMessage,
    updateMessage: MessageResolvers.updateMessage,
    deleteMessage: MessageResolvers.deleteMessage,
    signup: UserResolvers.signup,
    login: UserResolvers.login,
  }
}