import jwtDecode from 'jwt-decode'

import User from "../mongodb/models/user.js";
import Token from "../mongodb/models/token.js";
import {
    getRefreshToken,
    generateToken,
    checkPassword,
    hashPassword,
} from "../authentication/auth.js";

const login = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email }).lean();
    if (!user) {
        return res.status(401).json({
            message: 'User not found!'
        });
    }

    const isPasswordValid = await checkPassword(password, user.password)

    if (!isPasswordValid) {
        return res.status(401).json({
            message: 'Invalid password!'
        });
    }

    const accessToken = generateToken(user);
    const decodedAccessToken = jwtDecode(accessToken);
    const accessTokenExpiresAt = decodedAccessToken.exp;
    const refreshToken = getRefreshToken(user);

    const storedRefreshToken = new Token({ user: user._id, refreshToken });
    await storedRefreshToken.save();

    res.json({
        accessToken,
        expiresAt: accessTokenExpiresAt,
        refreshToken
    });
}

const register = async (req, res) => {
    const { email, password, username, name } = req.body

    const hashedPassword = await hashPassword(password)
    const userData = {
        name: name,
        username: username,
        email: email,
        avatar: 'https://i.imgur.com/8Km9tLL.png',
        friends: [],
        friendRequests: [],
        password: hashedPassword,
    }

    const existingUser = await User.findOne({ email: email }).lean()

    if (existingUser) {
        return res.status(400).json({
            message: 'Email already exists'
        })
    }

    const user = new User(userData)
    const savedUser = await user.save()

    if (savedUser) {
        const accessToken = generateToken(savedUser);
        const decodedToken = jwtDecode(accessToken);
        const expiresAt = decodedToken.exp;

        return res.status(200).json({
            message: 'User created successfully',
            accessToken,
            expiresAt,
            refreshToken: getRefreshToken(savedUser),
        })
    }
}

const refreshToken = async (req, res) => {
    const { refreshToken } = req.body
    try {
        const user = await Token.findOne({ refreshToken }).select('User')

        if (!user) {
            return res.status(401).json({
                message: 'Invalid token'
            })
        }

        console.log(user.user);
        const existingUser = await User.findOne({ _id: user.user })

        if (!existingUser) {
            return res.status(401).json({
                message: 'Invalid token'
            })
        }

        const token = generateToken(existingUser)
        return res.json({ accessToken: token })
    } catch (err) {
        return res.status(500).json({ message: 'Could not refresh token' })
    }
}

export {
    login,
    register,
    refreshToken
}