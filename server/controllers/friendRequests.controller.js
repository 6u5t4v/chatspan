import User from "../mongodb/models/user.js";
import { getUserInfoById } from "./user.controller.js";
import mongoose from "mongoose";

const getFriendRequests = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await User.findOne({ _id: id });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const friendRequests = await User.find({ _id: { $in: user.friendRequests } });

        res.status(200).json(friendRequests);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const sendFriendRequest = async (req, res) => {
    try {
        const { id } = req.params;
        const { friendId } = req.body;

        const session = await mongoose.startSession();
        session.startTransaction();

        const user = await User.findOne({ _id: id }).session(session);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const friend = await User.findOne({ _id: friendId }).session(session);

        if (!friend) {
            return res.status(404).json({ message: "Friend not found" });
        }

        if (user.friendRequests.includes(friendId)) {
            return res.status(400).json({ message: "Already sent friend request" });
        }

        user.friendRequests.push(friendId);
        friend.friendRequests.push(id);

        await user.save({ session });
        await friend.save({ session });

        await session.commitTransaction();

        res.status(200).json({ message: "Friend request sent" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const acceptFriendRequest = async (req, res) => {
    try {
        const { id } = req.params;
        const { friendId } = req.body;

        const session = await mongoose.startSession();
        session.startTransaction();

        const user = await User.findOne({ _id: id }).session(session);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const friend = await User.findOne({ _id: friendId }).session(session);

        if (!friend) {
            return res.status(404).json({ message: "Friend not found" });
        }

        if (!user.friendRequests.includes(friendId)) {
            return res.status(400).json({ message: "No friend request" });
        }

        user.friendRequests = user.friendRequests.filter((friend) => friend !== friendId);
        friend.friendRequests = friend.friendRequests.filter((friend) => friend !== id);

        user.friends.push(friendId);
        friend.friends.push(id);

        await user.save({ session });
        await friend.save({ session });

        await session.commitTransaction();

        res.status(200).json({ message: "Friend request accepted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const declineFriendRequest = async (req, res) => {
    try {
        const { id } = req.params;
        const { friendId } = req.body;

        const session = await mongoose.startSession();
        session.startTransaction();

        const user = await User.findOne({ _id: id }).session(session);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const friend = await User.findOne({ _id: friendId }).session(session);

        if (!friend) {
            return res.status(404).json({ message: "Friend not found" });
        }

        if (!user.friendRequests.includes(friendId)) {
            return res.status(400).json({ message: "No friend request" });
        }

        user.friendRequests = user.friendRequests.filter((friend) => friend !== friendId);
        friend.friendRequests = friend.friendRequests.filter((friend) => friend !== id);

        await user.save({ session });
        await friend.save({ session });

        await session.commitTransaction();

        res.status(200).json({ message: "Friend request declined" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export { getFriendRequests, sendFriendRequest, acceptFriendRequest, declineFriendRequest };