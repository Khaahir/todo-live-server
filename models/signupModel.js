import mongoose from "mongoose";

const user = mongoose.Schema({
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
    }
})