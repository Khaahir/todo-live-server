import express from "express"
import dotenv from "dotenv"
dotenv.config()
const router = express.Router()

router.get("/" ,async ( req, res)=> {
res.status(200).json({message: "this path is avalible"})
})


export default router 
