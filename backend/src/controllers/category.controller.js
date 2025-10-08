import { categoryModel } from "../models/category.model.js";

export const createCategoryController = async (req, res) => {
    try {
        const { name } = req.body;
        if (!name) {
            return res.status(400).json({ message: "category name is required" });
        }

        const category = await categoryModel.create({
            name,
        });

        res.status(201).json({
            message: "category created successfully",
            category,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send("internal server error");
    }
};

export const getAllCategoriesController = async (req, res) => {
    try {
        const categories = await categoryModel.find({});
        res.status(200).json({
            message: "categories fetched successfully",
            categories,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send("internal server error");
    }
};

export const updateCategoryController = async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
        if (!name) {
            return res.status(400).json({ message: "category name is required" });
        }
        const updatedCategory = await categoryModel.findByIdAndUpdate(
            id,
            { name },
            { new: true }
        );
        res.status(200).json({
            message: "category updated successfully",
            category: updatedCategory,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send("internal server error");
    }
};

export const deleteCategoryController = async (req, res) => {
    try {
        const { id } = req.params;
        await categoryModel.findByIdAndDelete(id);
        res.status(200).json({
            message: "category deleted successfully",
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send("internal server error");
    }
};