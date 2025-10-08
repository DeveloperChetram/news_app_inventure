import express from "express";
import {getAllNewsAdminController,createNewsController,updateNewsController,deleteNewsController,publishNewsController,
} from "../controllers/admin.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { adminMiddleware } from "../middlewares/admin.middleware.js";
// import {  } from "../controllers/admin.controller.js";

export const adminRouter = express.Router();

adminRouter.get("/news", authMiddleware, adminMiddleware, getAllNewsAdminController);
adminRouter.post("/news", authMiddleware, adminMiddleware, createNewsController);
adminRouter.put("/news/:id", authMiddleware, adminMiddleware, updateNewsController);
adminRouter.delete("/news/:id", authMiddleware, adminMiddleware, deleteNewsController);
adminRouter.patch("/news/:id/publish", authMiddleware, adminMiddleware, publishNewsController);