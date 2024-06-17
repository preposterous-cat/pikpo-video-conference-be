import { RoomServiceClient, Room } from "livekit-server-sdk";

import dotenv from "dotenv";
dotenv.config();

export const getListParticipants = async (req, res) => {
  try {
    const roomName = "onetoone";
    const livekitHost = process.env.LIVEKIT_URL;

    const roomService = new RoomServiceClient(
      livekitHost,
      process.env.LIVEKIT_API_KEY,
      process.env.LIVEKIT_API_SECRET
    );

    const participants = await roomService.listParticipants(roomName);
    res.send(participants);
  } catch (error) {
    console.error("Error listing participants:", error);
    res.status(500).send("Failed to list participants");
  }
};
