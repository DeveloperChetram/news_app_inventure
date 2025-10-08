import express from "express";
import dotenv from "dotenv";
import cookieParser from 'cookie-parser'
const app = express();

app.use(express.json());
app.use(cookieParser())


dotenv.config();



export default app;