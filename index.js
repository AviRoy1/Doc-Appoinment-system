import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import router from "./routes/index.js";
import bodyparser from "body-parser";

dotenv.config();
const app = express();
connectDB();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use("/api/v1", router);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port - ${process.env.PORT}`);
});
