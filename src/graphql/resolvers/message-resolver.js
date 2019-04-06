import Message from '../../models/Message';

export default {
  getMessages: () => Message.find({})
}