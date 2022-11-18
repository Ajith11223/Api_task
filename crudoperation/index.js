import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'

dotenv.config()

//routes

import agentRoute from './routes/AgentRoute.js'
import dataRoute from './routes/AllDataRoute.js'
import userRoute from './routes/UserRoute.js'
import accountRoute from './routes/AccountRoute.js'
import policyRoute from './routes/PolicyRoute.js'


const app = express()
app.use(bodyParser.json({limit:"10mb",extended:true})) 
app.use(bodyParser.urlencoded({limit:"10mb",extended:true}))


mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true,useUnifiedTopology:true}).
then(()=>{
    app.listen(process.env.PORT,()=> console.log("server connected port 5000"))
}).catch((error)=> console.log(error))




//routes
app.use('/alldata',dataRoute)
app.use('/agent',agentRoute) 
app.use("/user",userRoute)
app.use("/account",accountRoute)
app.use("/policy",policyRoute)