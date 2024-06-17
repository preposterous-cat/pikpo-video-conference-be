import express from "express";
import { createToken } from "../controllers/tokenController.js";

const router = express.Router();

router.get("/getToken", createToken);

export default router;
