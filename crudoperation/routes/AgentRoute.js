import express from 'express'
import { createAgent, getAgent } from '../controller/AgentController.js'


const router = express.Router()

router.get('/',getAgent)
router.post('/',createAgent)


export default router