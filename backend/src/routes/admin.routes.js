import express from "express";
import {  createNewsController } from "../controllers/admin.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { adminMiddleware } from "../middlewares/admin.middleware.js";

export const adminRouter = express.Router();

adminRouter.post("/create-news", authMiddleware, adminMiddleware, createNewsController);
// adminRouter.post("/login", loginController);


