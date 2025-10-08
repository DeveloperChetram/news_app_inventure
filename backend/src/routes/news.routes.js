import express from "express";
import { getAllNewsController,getNewsByIdController,likeNewsController,} from "../controllers/news.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

export const newsRouter = express.Router();

newsRouter.get("/", getAllNewsController);
newsRouter.get("/:id", getNewsByIdController);
newsRouter.post("/:id/like", authMiddleware, likeNewsController);