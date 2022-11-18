import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
        firstname: {
            type: String,
            required: true
        },
        email: {
            type:String,
            required: true
        },
        gender: {
            type: String,
            // required: true
        },
        city: {
            type: String,
            // required: true
        },
        phone: {
            type: String,
            required: true
        },
        address: {
            type: String,
            // required: true
        },
        state: {
            type: String,
            // required: true
        },
        zip: {
            type: String,
            // required: true
        },
        dob: {
            type: String,
            required: true
        },
        agentId: {
            type: mongoose.Schema.Types.ObjectId,
            // required: true
        },
        agent: {
            type: String,
            required: true
        },
        policy_number: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
)

const userModel = mongoose.model("user", userSchema)

export default userModel