import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        maxlength: 40
    },
    password:{
        type: String,
        required: true,
        maxlength: 40
    },

    email:{
        required: true,
        type: String,
        maxlength: 40
    },
},{timestamps : true}

)

const userModel = mongoose.models.User || mongoose.model("User" ,userSchema)
export default  userModel