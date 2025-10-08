import jwt from "jsonwebtoken";
import { userModel } from "../models/user.model.js";

export const authMiddleware = async (req, res, next)=>{
    const {token} = req.cookies;
    if(!token){
        return res.status(401).json({message:"unathorized"})
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findOne({_id:decoded.id}).select('-passwordHash');
        console.log(user)
        if(!user){
            return res.status(401).json({message:"unathorized"})
        }
        // console.log('user in auth', user)
        req.user = user;
        next();
    }
    catch(error){
        console.log(error);
        return res.status(401).json({
            message:"unauthorized"
        })
    }
}