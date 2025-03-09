/* IMPORTS */

import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import path from "path";

import connectToMongoDB from "./database/connectToMongoDB.js";
import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";




/* CONFIGURATION */

dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
/* app.use(morgan("common")); */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(cookieParser());
const __dirname = path.resolve();

/* DATABASE CONNECTION */


/* ROUTES */
app.get('/', (req, res) => { 
  res.send(`testing server is running on`)
})

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 3010;

/* SERVER PORT SETUP */
app.listen(PORT, ( ) => {
  connectToMongoDB();
  console.log(`listening on port ${PORT}!`)
})