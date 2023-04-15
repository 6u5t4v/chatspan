import * as dotenv from 'dotenv';
dotenv.config({ path: '../.env' });

import express from 'express';
import cors from 'cors';

import connectDB from './mongodb/connect.js';
import userRouter from './routes/user.routes.js';
import friendRequestRouter from './routes/friendRequests.routes.js';
import friendsRouter from './routes/friends.routes.js';
import conversationsRouter from './routes/conversations.routes.js';
import authRouter from './routes/auth.routes.js';

// import {attachUser} from './authentication/auth.js';


const app = express();
app.use(cors());
app.use(express.urlencoded({ limit: '50mb', extended: false }));
app.use(express.json({ limit: '50mb' }));

// Routes
app.use('/api/v1/users', userRouter);
app.use('/api/v1/friends', friendsRouter);
app.use('/api/v1/friend-requests', friendRequestRouter);
app.use('/api/v1/conversations', conversationsRouter);
app.use('/auth', authRouter);
// app.use(attachUser);


app.get('/', (req, res) => {
    res.send({ message: 'Hello World!' });
});

const startServer = async () => {
    try {
        // Connect to database
        connectDB(process.env.MONGODB_URL);

        app.listen(8080, () => {
            console.log('Server is running on port http://localhost:8080');
        })
    } catch (err) {
        console.log(err);
    }
};

startServer();
