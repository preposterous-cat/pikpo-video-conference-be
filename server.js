// server.js
import express from "express";
import tokenRoutes from "./routes/tokenRoutes.js";
import participantRoute from "./routes/participantRoute.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(
  cors({
    origin: "*", // Allow all origins - adjust as needed
  })
);

app.use("/api/token", tokenRoutes);
app.use("/api/participant", participantRoute);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
