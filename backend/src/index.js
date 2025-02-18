import express from "express";
import { PORT } from "./config/server.config.js";
import connectDB from "./config/db.config.js";
import apiRouter from "./routes/api.route.js";

const app = express();

app.use(express.json());

app.use("/api", apiRouter);

app.get("/", async (req, res) => {
    res.json({ msg: "working" });
});



await connectDB();

app.listen(PORT, () => {
    console.log(`Server started on port http://localhost:${PORT}`);
});