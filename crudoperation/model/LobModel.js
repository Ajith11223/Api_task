import mongoose from "mongoose";

const lobSchema = mongoose.Schema(
    {
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            // required:true
        },
        company_name:{
            type:String,
            required:true
        },
        producer:{
          type:String,
          required:true
        },
        category_name:{
            type:String,
            required:true
        },
        userAccountId:{
            type:mongoose.Schema.Types.ObjectId,
            // required:true
        }
    },
    {timestamps:true}
)

const lobModel = mongoose.model("lob",lobSchema)

export default lobModel