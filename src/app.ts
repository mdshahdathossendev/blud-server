import express from "express";
import dotenv from "dotenv";
import userRouter from "./service/user.js";
import postBludeRouter from "./service/post-blude.js";
import bludeDonerRouter from "./service/blude-doner.js";
dotenv.config();

const app = express();
app.use(express.json());
app.use(userRouter);
app.use(postBludeRouter);
app.use(bludeDonerRouter);
app.get("/", (req, res) => {
  res.send({ message: "Hello World!" });
});

export default app;
