import jwt from "jsonwebtoken"

const checkToken = (req, res, next)=>{
    const authHeader  = req.headers.authorization
    if(!authHeader || !authHeader.startsWith("Bearer")){
        return res.status(401).json({message: "not a valid token"})
    }

    const token = authHeader.split(" ")[1]
    
    jwt.verify(token, process.env.JWT_KEY, (err, decoded)=> {
        if(err){
            return res.status(403).json({message: "invalid token"})
        }

        req.user = decoded
        next()
    })

}

export default checkToken