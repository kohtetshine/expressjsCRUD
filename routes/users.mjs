import { Router, query } from "express";
import {userLists} from "../utils/userlists.mjs";
import {UserController} from '../bin/controllers/UserController.mjs'
import { body, param } from "express-validator";

const router = Router();

router.get("/api/users/:id?",[
    param("id").isInt().withMessage("ID Must Be Integer")
],UserController.getallUser)

router.post("/api/users",[
    body("name").notEmpty().withMessage("User Name Cannot Be Null"),
    body("email").notEmpty().withMessage("Email Cannot Be Null").isEmail().withMessage("Invalid email format"),
    body("password").notEmpty().withMessage("Password Cannot Be Null"),
],UserController.insertUser)

router.post("/api/update/:id",[
    param("id").isInt().withMessage("ID Must Be Integer")
],UserController.updateUser)

router.delete("/api/delete/:id",[
    param("id").isInt().withMessage("ID Must Be Integer")
],UserController.deleteUser)

export default router