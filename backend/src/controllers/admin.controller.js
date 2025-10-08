import { newsModel } from "../models/news.model.js";

export const getAllNewsAdminController = async (req, res) => {
    try {
        const news = await newsModel.find({}).populate("categoryId authorId");
        res.status(200).json({
            message: "All news fetched successfully for admin",
            news,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send("internal server error");
    }
};

export const createNewsController = async (req, res) => {
    try {
        const { title, content, published, categoryId } = req.body;
        if (!title || !content) {
            return res.status(400).json({ message: "all fields are required" });
        }

        const authorId = req.user._id;
        const news = await newsModel.create({
            title,
            content,
            categoryId,
            authorId,
            published,
        });

        res.status(201).json({
            message: "news created successfully",
            news,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send("internal server error");
    }
};

export const updateNewsController = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, content, categoryId } = req.body;
        const updatedNews = await newsModel.findByIdAndUpdate(
            id,
            { title, content, categoryId },
            { new: true }
        );
        res.status(200).json({
            message: "news updated successfully",
            news: updatedNews,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send("internal server error");
    }
};

export const deleteNewsController = async (req, res) => {
    try {
        const { id } = req.params;
        await newsModel.findByIdAndDelete(id);
        res.status(200).json({ message: "News deleted successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).send("internal server error");
    }
};

export const publishNewsController = async (req, res) => {
    try {
        const { id } = req.params;
        const { published } = req.body;
        const updatedNews = await newsModel.findByIdAndUpdate(
            id,
            { published },
            { new: true }
        );
        res.status(200).json({
            message: "news publish status updated successfully",
            news: updatedNews,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send("internal server error");
    }
};