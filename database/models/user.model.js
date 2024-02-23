import mongoose from "mongoose";

export const userSchema = mongoose.Schema({
    name:{
        type: String,
        minLength:[2, 'name is too short'],
        maxLength:[10, 'name is too long'],
        // required:true
    },
    email:{
        type:String,
        // required:true,
        unique: true,
    },
    password:{
        type:String,
        minLength:[2, 'name is too short'],
        // required:true,
    },
    confirmPassword:{
        type:Boolean,
        default:false,
    }
},{timestamps :true})
export const userModel = mongoose.model('user' ,userSchema) 