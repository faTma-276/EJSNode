import { userModel } from "../../../database/models/user.model.js";
import Joi from 'joi';
const schema = Joi.object({
    name:Joi.string().min(3).max(30).required(),
    email:Joi.string().email().required(),
    password:Joi.string().min(3).max(30).required(),

})

export const Login = (req ,res)=>{
    res.render('login.ejs',{ isLoggedIn:false});
}
export const handleLogin = async(req ,res)=>{
    const {email ,password } = req.body

    let user = await userModel.findOne({email})
    if(user){
        if(user.password==password){
            req.session.userId = user._id;
            req.session.name = user.name;
            req.session.isLoggedIn = true;

            // expiry cookies
            var hour = 36000000
            req.session.cookie.expires = new Date(Date.now() + hour)
            req.session.cookie.maxAge = hour
            res.redirect('/message');
        }else{
            res.redirect('/login');
        }
    }else{
            res.redirect('/login');
        }

}


export const Register = (req ,res)=>{
    res.render('register.ejs',{isLoggedIn:false ,error: req.flash('info')});
}
// 
export const handleRegister = async(req ,res)=>{

    // console.log(req.body);
    let {error} = schema.validate(req.body,{abortEarly:false})
    // console.log(error);
    if(!error?.details){
        await userModel.insertMany(req.body)
        return res.redirect('/register');
    }
    req.flash('info' ,error?.details)
    res.redirect('/register');
}

