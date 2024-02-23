import mongoose from "mongoose";

export const messageSchema = mongoose.Schema({
    message:{
        type: String,
        // required:true
    },
    sendTodId:{
        type:mongoose.SchemaTypes.ObjectId,
        // required:true,
    }
},{timestamps :true})
export const messageModel = mongoose.model('message' ,messageSchema) 