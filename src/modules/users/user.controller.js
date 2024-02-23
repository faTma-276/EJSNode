import { messageModel } from "../../../database/models/message.model.js";

export const user = (req ,res)=>{
    // console.log(req.params);
    res.render('user.ejs',{isLoggedIn:false, id:req.params.id});
}
// isLoggedIn:false
export const handleMessage = async(req ,res)=>{
    await messageModel.insertMany(req.body)
    // console.log(message);
    res.redirect('/user/'+req.body.sendToId);
}