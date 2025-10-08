import express from "express";
import cors from 'cors'
import dotenv from "dotenv";
import cookieParser from 'cookie-parser'
import {authRouter} from "./routes/auth.routes.js";
import { adminRouter } from "./routes/admin.routes.js";
import { categoryRouter } from "./routes/category.routes.js";
import { newsRouter } from "./routes/news.routes.js";
const app = express();
dotenv.config();

app.use(express.json());
app.use(cookieParser())

app.use(cors({
    origin: 'http://localhost:5173', // Allow requests from your frontend
    credentials: true
}));

app.use('/api/auth', authRouter)
app.use('/api/admin', adminRouter)
app.use("/api/categories", categoryRouter);
app.use("/api/news", newsRouter);



export default app;