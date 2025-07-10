import express from 'express';
import { registerUser, loginUser, getUser, updateProfile } from '../controllers/user.controller.js';
import isAuthenticated from '../middlewares/isauthentication.js';

const router = express.Router();

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/getUser').get(isAuthenticated,getUser);
router.route('/updateProfile').put(isAuthenticated,updateProfile)

export default router;