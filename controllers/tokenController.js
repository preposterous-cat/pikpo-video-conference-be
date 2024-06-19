import { AccessToken } from "livekit-server-sdk";
import dotenv from "dotenv";
dotenv.config();

export const createToken = async (req, res) => {
  try {
    const roomName = req.query.room || "onetoone";
    const participantName = req.query.participantName || "Unknown";

    const at = new AccessToken(
      process.env.LIVEKIT_API_KEY,
      process.env.LIVEKIT_API_SECRET,
      {
        identity: participantName,
        ttl: "10m",
      }
    );

    at.addGrant({ roomJoin: true, room: roomName });
    const token = await at.toJwt();
    res.send(token);
  } catch (error) {
    res.status(500).send("Error creating token: " + error.message);
  }
};
