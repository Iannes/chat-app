import Message from '../../models/Message';
import { requireAuth } from "../../services/auth";
import { withTryCatch } from "../../utils/withTryCatch";

export default {
  getMessage: async (_, { _id }, { user }) => {
    try {
      await requireAuth(user)
      return Message.findById(_id)
    } catch (error) {
      throw error
    }
  },
  getMessages: async () => {    
    try {
      await requireAuth(user)
      return Message.find({}).sort({ createdAt: -1 })
    } catch (error) {
      throw error
    }    
  },
  createMessage: async (_, args, { user }) => {    
    try {
      await requireAuth(user)
      return Message.create(args)
    } catch (error) {
      throw error
    }    
  },
  updateMessage: async (_, { _id, ...rest }, { user }) => {   
    try {
      await requireAuth(user)
      return Message.findByIdAndUpdate(_id, rest, { new: true })
    } catch (error) {
      throw error
    }           
    
  },
  deleteMessage: async (_, { _id }, { user }) => {
    try {
      await requireAuth(user)
      await Message.findByIdAndRemove(_id);
      return {
        message: 'Your message was deleted!'
      }
    } catch (error) {
      throw error;
    }
  },
}