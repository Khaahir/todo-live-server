import express from "express"
import dotenv from "dotenv"

import bcrypt from "bcrypt"
import userModel from "../models/signupModel.js"
dotenv.config()
const router = express.Router()

router.get("/" ,async ( req, res)=> {
res.status(200).json({message: "this path is avalible"})
})


router.post("/" ,async (req, res)=> {
    try{
        const {username, password, email} = req.body
        
        if(!username || !password || !email){
            return( res.status(400).json({message: "You have to fill out username , password and email"}))

        }

        const salt  = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new userModel({username, password:hashedPassword, email})
         
        await newUser.save()
        res.status(201).json({message: `welcome ${newUser.username}`})
    }catch(err){
    res.status(400).json({message:"we were not able to create a account for u" ,err})
    }
})


export default router 
