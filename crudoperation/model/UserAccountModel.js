import mongoose from "mongoose";

const userAccountSchema = mongoose.Schema(
    {
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            // required:true
        },
        account_name:{
            type:String,
            required:true
        },
        account_type:{
            type:String,
            required:true
        },
        agentId:{
            type:mongoose.Schema.Types.ObjectId,
            // required:true
        },
        policy_number:{
            type:String,
            required:true
        },
        company_name:{
            type:String,
            required:true
        }
    },
    {timestamps:true}
)

const userAccountModel = mongoose.model("userAccount",userAccountSchema)

export default userAccountModel