import express from 'express';

import {
    getFriends,
    addFriend,
    removeFriend,
} from '../controllers/friends.controller.js';

const router = express.Router();

router.route('/:id').get(getFriends);
router.route('/:id').post(addFriend);
router.route('/:id').delete(removeFriend);

export default router;