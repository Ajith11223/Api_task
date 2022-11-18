import mongoose from "mongoose";

const allDataSchema = mongoose.Schema(
    {
        agent:{
            type:String,
            required:true
        },
        userType:{
            type:String,
            required:true
        },
        policy_mode:{
            type:String,
            required:true
        },
        producer:{
            type:String,
            required:true
        },
        policy_number:{
            type:String,
            required:true
        },
       
        premium_amount:{
            type:Number,
            required:true
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
        },
        csr:{
            type:String,
            required:true
        },
        account_name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        
        firstname:{
            type:String,
            required:true
        },
        city:{
            type:String,
            // required:true
        },
        account_type:{
            type:String,
            required:true
        },
        phone:{
            type:String,
            required:true
        },
        address:{
            type:String,
            // required:true
        },
        state:{
            type:String,
            // required:true
        },
        zip:{
            type:String,
            // required:true
        },

    },

    {timestamps:true}
)

const allDataModel = mongoose.model("allData",allDataSchema)
export default allDataModel