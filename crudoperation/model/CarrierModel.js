import mongoose from "mongoose";

const carrierSchema = mongoose.Schema(
    {
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            // required:true
        },
        policy_number:{
            type:String,
            required:true
        }

    }
)

const carrierModel = mongoose.model("carrier",carrierSchema)
export default carrierModel