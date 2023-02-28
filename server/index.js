import express from "express"
import dotenv from "dotenv"
import Routes from "./routes/routes.js"
import cors from "cors"
const app = express();
const port = 8000;
app.use(cors());
import Connection from "./database/db.js";
dotenv.config();
const username = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD
Connection(username,password);
app.use('/',Routes);
app.listen(port,()=>console.log("Service running on port 8000"))
