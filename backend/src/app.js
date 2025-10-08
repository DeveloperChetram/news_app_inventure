import express from "express";
import dotenv from "dotenv";
import cookieParser from 'cookie-parser'
import {authRouter} from "./routes/auth.routes.js";
import { adminRouter } from "./routes/admin.routes.js";
const app = express();

app.use(express.json());
app.use(cookieParser())


dotenv.config();
app.use('/api/auth', authRouter)
app.use('/api/admin', adminRouter)



export default app;