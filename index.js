import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import todos from "./controller/todos.js";
import signup from './controller/signup.js'
import login from "./controller/login.js"

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.BASE_URL);
const database = mongoose.connection;

database.on("error", (err) => {
  console.log(err);
});

database.once("connected", () => {
  console.log("Connected to Database");
});

app.use("/api/todos", todos);
app.use("/api/signup", signup)
app.use("/api/login", login)

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server runs on http://localhost:${PORT}/api-docs`);
});
