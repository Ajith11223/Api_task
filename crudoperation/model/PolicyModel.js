import mongoose from "mongoose";

const policySchema = mongoose.Schema(
    {
        policy_number:{
            type:String,
            required:true
        },
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            // required:true
        },
        agentId:{
            type:mongoose.Schema.Types.ObjectId,
            // required:true
        },
        policy_mode:{
            type:String,
            required:true
        },
        premium_amount:{
            type:String,
            required:true
        },
        userId:{
         type:String,
        //  required:true
        },
        agentId:{
            type:String,
            // required:true
        },
        policy_type:{
            type:String,
            required:true
        },
        company_name:{
            type:String,
            required:true
        },
        category_name:{
            type:String,
            required:true
        },
        policy_start_date:{
            type:String,
            required:true
        },
        policy_end_date:{
            type:String,
            required:true
        }

    },
    {timestamps:true}

)

const policyModel = mongoose.model("policy",policySchema)

export default policyModel