export const Home = (req ,res)=>{
    res.render('home.ejs' ,{ isLoggedIn:false});
}
