import express from 'express';

import {
    getFriendRequests,
    sendFriendRequest,
    acceptFriendRequest,
    declineFriendRequest,
} from '../controllers/friendRequests.controller.js';

const router = express.Router();

router.route('/:id').get(getFriendRequests);
router.route('/:id').post(sendFriendRequest);
router.route('/:id/accept').post(acceptFriendRequest);
router.route('/:id/decline').post(declineFriendRequest);

export default router;