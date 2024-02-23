import express from 'express'
import { Home } from './home.controller.js'
const homeRouter = express.Router()

homeRouter.get('/',Home)

export default homeRouter