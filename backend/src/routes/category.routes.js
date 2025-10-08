import express from "express";
import {createCategoryController,getAllCategoriesController,updateCategoryController, deleteCategoryController,} from "../controllers/category.controller.js";

import { authMiddleware } from "../middlewares/auth.middleware.js";
import { adminMiddleware } from "../middlewares/admin.middleware.js";

export const categoryRouter = express.Router();

categoryRouter.post( "/",authMiddleware, adminMiddleware, createCategoryController);
categoryRouter.get("/", getAllCategoriesController);
categoryRouter.put("/:id", authMiddleware, adminMiddleware, updateCategoryController);
categoryRouter.delete("/:id", authMiddleware, adminMiddleware, deleteCategoryController);
