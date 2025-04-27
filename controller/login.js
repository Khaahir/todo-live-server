import express from "express"
import dotenv from "dotenv"
import userModel from "../models/userModel.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

dotenv.config()
const router = express.Router()


router.get("/" ,async(req,res)=> {
    res.status(200).json({
        Message:"This path is avalible"
    })
})


router.post("/", async (req, res)=> {
    try{
        const{username, password} = req.body
        if(!username || !password){
            return res.status(400).json({message: "you have to supply with both username and password"})
        }

        const user = await userModel.findOne({username})
        if(!user){
            return res.status(400).json({message:"there is no user with this name"})
        }

        const findPassword = await bcrypt.compare(password, user.password)
        if(!findPassword){
            return res.status(400).json({message:"password is invalid"})
        }
        res.status(200).json({message: "welcome back user"})
    }catch(err){
        res.status(400).json({message:"you where not able to log in try agin later", error:message.err})
    }
})

export default router