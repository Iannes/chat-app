import mongoose, { Schema } from 'mongoose';

const MessageSchema = new Schema({
    text: String,
}, { timestamps: true });

export default mongoose.model('Message', MessageSchema);