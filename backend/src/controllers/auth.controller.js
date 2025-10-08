import { userModel } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'
export const registerController = async (req, res) => {

   try {
     const { name, email, password, role} = req.body;

    const user = await userModel.findOne({email})
    if(user){
        return res.status(409).json({message: "User already exists"})
    }

    const passwordHash = await bcrypt.hash(password, 10)
    const newUser = await userModel.create({name, email, passwordHash, role:role?role:'user'})
    const token = jwt.sign({id:newUser._id}, process.env.JWT_SECRET, {expiresIn: '1d'})
    console.log(token)
    res.cookie('token', token)
    res.status(201).json(newUser)
   } catch (error) {
    console.log(error)
    res.status(500).json({message: "Internal server error"});
   }
}

