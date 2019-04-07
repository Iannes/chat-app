import Message from '../../models/Message';

export default {
  getMessage: (_, { _id }) => Message.findById(_id),
  getMessages: () => Message.find({}).sort({ createdAt: -1 }),
  createMessage: (_, args) => Message.create(args),
  updateMessage: (_, { _id, ...rest }) => Message.findByIdAndUpdate(_id, rest, { new: true }),
  deleteMessage: async (_, { _id }) => {
    try {
      await Message.findByIdAndRemove(_id);
      return {
        message: 'Your message was deleted!'
      }
    } catch (error) {
      throw error;
    }
  },
}