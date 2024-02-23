import express from 'express'
import { handleMessage, user } from './user.controller.js'
const userRouter = express.Router()

userRouter.get('/user/:id',user)
userRouter.post('/handleMessage',handleMessage)

export default userRouter