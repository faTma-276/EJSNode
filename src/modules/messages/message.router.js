import express from 'express'
import { message } from './message.controller.js'
const messageRouter = express.Router()

messageRouter.get('/message',message)

export default messageRouter