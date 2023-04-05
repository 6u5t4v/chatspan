import User from "../mongodb/models/user.js";
import Conversation from "../mongodb/models/conversation.js";
import mongoose from "mongoose";

const getConversations = async (req, res) => {

    try {
        const { id } = req.params;

        const user = await User.findOne({ _id: id });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const conversations = await Conversation.find({ participants: { $in: [id] } });

        res.status(200).json(conversations);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createConversation = async (req, res) => {
    try {
        const { id } = req.params;
        const { participants } = req.body;

        const session = await mongoose.startSession();
        session.startTransaction();

        const user = await User.findOne({ _id: id }).session(session);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const conversation = new Conversation({ participants });

        await conversation.save({ session });

        await session.commitTransaction();

        res.status(200).json(conversation);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export { getConversations, createConversation };