import express from 'express';

import {
    login,
    register,
    refreshToken
} from '../controllers/auth.controller.js';

const router = express.Router();

router.route('/login').post(login);
router.route('/register').post(register);
router.route('/refreshToken').post(refreshToken);

export default router;