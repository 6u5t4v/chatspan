import express from 'express';

import {
    getConversations,
    createConversation,
} from '../controllers/conversations.controller.js';

const router = express.Router();

router.route('/:id').get(getConversations);
router.route('/:id').post(createConversation);

export default router;