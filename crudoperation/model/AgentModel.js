import mongoose from "mongoose";

const agentSchema = mongoose.Schema(
    {
    agent:{
        type:String,
        required:true
    },
    users:[{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    }]
},
    {timestamps : true}

)


 const AgentModel = mongoose.model("agent",agentSchema)


 export default AgentModel