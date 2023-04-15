import * as dotenv from 'dotenv';
dotenv.config({ path: '../.env' });

import jwtDecode from 'jwt-decode'
import jsonwebtoken from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import randToken from 'rand-token';
import { expressjwt as jwt } from 'express-jwt';

const SECRET = process.env.SECRET_AUTH;

const generateToken = user => {

    const token = jsonwebtoken.sign({
        sub: user._id,
        email: user.email,
        aud: 'api.example.com',
        iss: 'api.example.com',
    }, SECRET, {
        expiresIn: '1h',
        algorithm: 'HS256'
    })

    return token
}

const hashPassword = password => {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(10, (err, salt) => {
            if (err) reject(err)
            bcrypt.hash(password, salt, (err, hash) => {
                if (err) reject(err)
                resolve(hash)
            })
        })
    })
}

const checkPassword = (password, hash) => bcrypt.compare(password, hash);

const getRefreshToken = () => randToken.uid(256);

const attachUser = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res
            .status(401)
            .json({ message: 'Authentication invalid' });
    }
    const decodedToken = jwtDecode(token.slice(7));

    if (!decodedToken) {
        return res.status(401).json({
            message: 'There was a problem authorizing the request'
        });
    } else {
        req.user = decodedToken;
        next();
    }
};

const requireAuth = jwt({
    secret: SECRET,
    audience: 'api.example.com',
    issuer: 'api.example.com',
    algorithms: ['HS256']
});

export {
    generateToken,
    hashPassword,
    checkPassword,
    getRefreshToken,
    attachUser,
    requireAuth
};