import User from "../mongodb/models/user.js";
import mongoose from "mongoose";
import { getUserInfoById } from "./user.controller.js";

const addFriend = async (req, res) => {
    try {
        const { id } = req.params;
        const { friendId } = req.body;

        const session = await mongoose.startSession();
        session.startTransaction();

        const user = await User.findOne({ _id: id }).session(session);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const friend = await User.findOne({ _id: friendId }).session(session);;

        if (!friend) {
            return res.status(404).json({ message: "Friend not found" });
        }

        if (user.friends.includes(friendId)) {
            return res.status(400).json({ message: "Already friends" });
        }

        user.friends.push(friendId);
        friend.friends.push(id);

        await user.save({ session });
        await friend.save({ session });

        await session.commitTransaction();

        res.status(200).json({ message: "Friend added" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const removeFriend = async (req, res) => {
    try {
        const { id } = req.params;
        const { friendId } = req.body;

        const session = await mongoose.startSession();
        session.startTransaction();

        const user = await User.findOne({ _id: id }).session(session);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const friend = await getUserInfoById(friendId).session(session);

        if (!friend) {
            return res.status(404).json({ message: "Friend not found" });
        }

        if (!user.friends.includes(friendId)) {
            return res.status(400).json({ message: "Not friends" });
        }

        user.friends = user.friends.filter((friend) => friend !== friendId);
        friend.friends = friend.friends.filter((friend) => friend !== id);

        await user.save({ session });
        await friend.save({ session });

        await session.commitTransaction();

        res.status(200).json({ message: "Friend removed" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getFriends = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await User.findOne({ _id: id }).populate("friends");

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const friends = await User.find({ _id: { $in: user.friends } });

        res.status(200).json(friends);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export { addFriend, removeFriend, getFriends };