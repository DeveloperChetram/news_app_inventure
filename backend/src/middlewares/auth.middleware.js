import jwt from "jsonwebtoken";
import { userModel } from "../models/user.model";

export const authMiddleware = (req, res, next)=>{
    const {token} = req.cookies;
    if(!token){
        return res.status(401).json({message:"unathorized"})
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = userModel.findById({id:decoded.id}).select('-passwordHash');
        if(!user){
            return res.status(401).json({message:"unathorized"})
        }

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