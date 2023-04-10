import User from "../mongodb/models/user.js";
import * as dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";

dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
});

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({}).limit(req.query._end);
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// const createUser = async (req, res) => {
//     try {
//         const { name, email, avatar } = req.body;

//         const userExists = await User.findOne({ email });

//         if (userExists) {
//             return res.status(200).json(userExists);
//         }

//         const user = await User.create({ name, email, avatar });

//         res.status(200).json(user);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

const getUserInfoById = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await User.findOne({ _id: id }).populate("friends");

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export {
    getAllUsers,
    // createUser, 
    getUserInfoById
}