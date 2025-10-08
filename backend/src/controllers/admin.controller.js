import { newsModel } from "../models/news.model.js";

export const createNewsController = async (req, res) =>{
    try{
        const {title, content,  published,categoryId} = req.body;
        if(!title || !content ){
            return res.status(400).json({message:"all fields are required"})
        }

        const authorId = req.user._id;
        const news = await newsModel.create({
            title,
            content,
            categoryId,
            authorId,
            published,
        }) 
        
        res.status(201).json({
            message:"news created successfully",
            news
        })

    }
    catch(error){
        console.log(error)
        return res.status(401).send('internal server error')
    }
}