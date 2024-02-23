import express from 'express'

const app = express()
const port = 3000
import * as dotenv from 'dotenv'
import session from 'express-session'
import flash from 'connect-flash'
import connectSession from 'connect-mongodb-session'
const MongoDBStore = connectSession(session)
import messageRouter from './src/modules/messages/message.router.js'
import userRouter from './src/modules/users/user.router.js'
import { dbconnection } from './database/dbConnection.js'
import authRouter from './src/modules/Auth/auth.router.js'
import homeRouter from './src/modules/home/home.router.js'
dotenv.config()

app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))

var store = new  MongoDBStore({
    uri:process.env.DB_CONNECTION,
    collection: 'MySessions'
})
app.use(flash())
app.use(session({
    secret:'keyboard cat',
    resave:false ,
    saveUninitialized:false,
    store
}))
app.use(authRouter)
app.use(messageRouter)
app.use(userRouter)
app.use(homeRouter)

app.get('/logout' ,(req,res)=>{
    req.session.destroy(()=>{
        res.redirect('/login')
    })
})

dbconnection()
app.listen(process.env.PORT || port,()=>console.log(`app listening on port ${port}`) );