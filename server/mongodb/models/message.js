import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
    content: { type: String, required: true },
    sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    conversation: { type: mongoose.Schema.Types.ObjectId, ref: 'Conversation' },
    timestamp: { type: Date, default: Date.now },
});

const messageModel = mongoose.model('Message', MessageSchema);

export default messageModel;