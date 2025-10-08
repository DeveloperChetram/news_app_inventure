import { userModel } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: 'Lax', // Changed from 'Strict' to 'Lax'
};

export const registerController = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const user = await userModel.findOne({ email });
    if (user) {
      return res.status(409).json({ message: "User already exists" });
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = await userModel.create({
      name,
      email,
      passwordHash,
      role: role ? role : "user",
    });

    const token = jwt.sign({ id: newUser._id, role:newUser.role}, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    console.log(token);

    res.cookie("token", token, cookieOptions);
    res.status(201).json({message:"user registred successfully" ,
         user:{
            name:newUser.name,
            email:newUser.email,
            role:newUser.role,
            id:newUser._id
         } });


  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const loginController = async (req, res)=>{
    try{
        const {email, password} = req.body;
        const user = await userModel.findOne({email}).select('+passwordHash')
        if(!user){
            return res.status(404).json({message:"user not found "})
        }
        const isPassValid = await bcrypt.compare(password, user.passwordHash)
        if(!isPassValid){
            return res.status(401).json({message:"wrong password"})
        }
        const token = jwt.sign({id:user._id, role:user.role}, process.env.JWT_SECRET, {expiresIn:"1d"})

        res.cookie('token', token, cookieOptions )
        res.status(200).json({
            message:"login successful",
            user:{
                name:user.name,
                email:user.email,
                role:user.role,
                id:user._id
            }
        })
    }catch(error){
        console.log(error)
        return res.status(500).json({
            message:"internal server error"
        })
    }
}