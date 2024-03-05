import express from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import  {DeleteMyTask, UpdateTask, getMyTask, newtask} from "../controllers/tasks.js"


const router = express.Router();

router.post("/new", isAuthenticated ,newtask);

router .get("/my",isAuthenticated,getMyTask);

router.route("/:id").put(isAuthenticated ,UpdateTask).delete(isAuthenticated ,DeleteMyTask);

export default router;