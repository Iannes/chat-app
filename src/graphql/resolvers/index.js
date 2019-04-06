import MessageResolvers from './message-resolver';

export default {
  Query: {
    getMessages: MessageResolvers.getMessages
  }
}