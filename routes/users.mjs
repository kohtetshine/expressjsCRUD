import { Router } from "express";
import {userLists} from "../utils/userlists.mjs";
import {UserController} from '../bin/controllers/UserController.mjs'

const router = Router();

router.get("/api/users/:id?",UserController.getallUser)

router.post("/api/users",UserController.insertUser)

export default router