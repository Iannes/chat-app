import mongoose, { Schema } from 'mongoose';

const MessageSchema = new Schema({
    text: String
});

export default mongoose.model('Message', MessageSchema);