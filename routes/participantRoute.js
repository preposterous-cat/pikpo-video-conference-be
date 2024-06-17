import express from "express";
import { getListParticipants } from "../controllers/participantController.js";

const router = express.Router();

router.get("/getListParticipants", getListParticipants);

export default router;
