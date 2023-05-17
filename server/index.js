import express, { Router } from "express";
import Connection from "./Database/D_B.js";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import Routes from "./routes/routes.js"; //check this

const app = express();
const port = 8000;

app.use(bodyParser.json({ extended: true }));

app.use(cors());

app.use("/", Routes);

dotenv.config();
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);

app.listen(port, () => {
  console.log("Call back function {Server running on 8000}");
});
