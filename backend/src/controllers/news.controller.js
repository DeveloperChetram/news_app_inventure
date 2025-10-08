import { newsModel } from "../models/news.model.js";

export const getAllNewsController = async (req, res) => {
    try {
        const news = await newsModel.find({ published: true }).populate("categoryId authorId");
        res.status(200).json({
            message: "news fetched successfully",
            news,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send("internal server error");
    }
};

export const getNewsByIdController = async (req, res) => {
    try {
        const { id } = req.params;
        const news = await newsModel.findById(id).populate("categoryId authorId");
        if (!news) {
            return res.status(404).json({ message: "news not found" });
        }
        res.status(200).json({
            message: "news fetched successfully",
            news,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send("internal server error");
    }
};

export const likeNewsController = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.user._id;

        const news = await newsModel.findById(id);
        if (!news) {
            return res.status(404).json({ message: "news not found" });
        }

        const isLiked = news.likes.get(userId);

        if (isLiked) {
            news.likes.delete(userId);
        } else {
            news.likes.set(userId, true);
        }

        const updatedNews = await newsModel.findByIdAndUpdate(
            id,
            { likes: news.likes },
            { new: true }
        );

        res.status(200).json({
            message: "news like status updated successfully",
            news: updatedNews,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send("internal server error");
    }
};