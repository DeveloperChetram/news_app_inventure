import express from "express";
import {createNewsController,updateNewsController,deleteNewsController,publishNewsController,
} from "../controllers/admin.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { adminMiddleware } from "../middlewares/admin.middleware.js";

export const adminRouter = express.Router();

adminRouter.post("/news", authMiddleware, adminMiddleware, createNewsController);
adminRouter.put("/news/:id", authMiddleware, adminMiddleware, updateNewsController);
adminRouter.delete("/news/:id", authMiddleware, adminMiddleware, deleteNewsController);
adminRouter.patch("/news/:id/publish", authMiddleware, adminMiddleware, publishNewsController);