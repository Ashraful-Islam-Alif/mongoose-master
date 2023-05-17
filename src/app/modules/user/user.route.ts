import express from "express";
import { createUser } from "./user.controller";
const router = express.Router();

router.get("/");
router.post("/create-user", createUser);

export default router;
