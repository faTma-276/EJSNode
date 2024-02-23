import express from 'express'
import { Login, Register, handleLogin, handleRegister } from './auth.controller.js'
const authRouter = express.Router()

authRouter.get('/login',Login)
authRouter.post('/handleLogin',handleLogin)
authRouter.get('/register',Register)
authRouter.post('/handleRegister',handleRegister)

export default authRouter