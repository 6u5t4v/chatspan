import mongoose from "mongoose";

const ConversationScheme = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    icon: { type: String, required: true },
    participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    messages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Message' }],
});

const conversationScheme = mongoose.model('Conversation', ConversationScheme);

export default conversationScheme;