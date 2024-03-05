import express from 'express';
import {getmyProfile,login,register} from "../controllers/user.js"
import { isAuthenticated } from '../middlewares/auth.js';
import { logout } from '../controllers/user.js';
const router = express.Router();

// created finally 
router.post("/new",register);
router.post("/login",login);
router.get("/logout",logout);
router.get("/me", isAuthenticated,getmyProfile);

export default router ;   