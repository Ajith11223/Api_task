import policyModel from "../model/PolicyModel.js"


// create policy
export const createPolicy = async(req,res) =>{

    const {policy_number} = req.body

    // exists policy check
    const oldPolicy = await policyModel.findOne({policy_number})

    if(oldPolicy){
        res.status(200).json({message:"policy already registerd",oldPolicy})
    }else{
        try {
            const newPolicy = new policyModel(req.body)
            const policy = await newPolicy.save()
            res.status(200).json({message:"policy added successfull",policy})
        } catch (error) {
            res.status(404).json({message:"policy added failed",error})
        }

    }


}


// get all policy 
export const getAllPolicy = async(req,res) =>{

   try {
    const allPolicy = await policyModel.find()

    res.status(200).json({message:"all policies get succussfully",allPolicy})
   } catch (error) {
    
    res.status(404).json({message:"all policy not get ",error})
   }
}

// get single policy

export const singlePolicy = async(req,res) =>{
    const policyId = req.params.id

    try {
        const policy = await policyModel.findOne({policy_number:policyId})
        res.status(200).json({message:"policy get successfull",policy})
    } catch (error) {
       res.status(404).json({message:"policy not get",error}) 
    }
}


//update policy
export const updatePolicy = async(req,res) =>{
    const policyId = req.params.id
    
    // check old policy
    const oldPolicy = await policyModel.findOne({policy_number:policyId})
   console.log(oldPolicy);
    try {
        if(oldPolicy){
            
            const policy = await policyModel.findOneAndUpdate({policy_number:policyId},req.body,{new:true})
            res.status(200).json({message:"policy updated successfull",policy})
        }else{
            res.status(404).json({message:"policy not found"})
        }
    } catch (error) {
        res.status(404).json({message:"policy update failed",error})
        
    }
}

// delete policy 
export const deletePolicy = async(req,res) =>{
    const policyId = req.params.id

    // find policy
    const oldPolicy = await policyModel.findOne({policy_number:policyId})
    try {

        if(oldPolicy){
        const policy = await policyModel.findOneAndDelete({policy_number:policyId})
        res.status(200).json({message:"policy deleted",policy})
        
         }else{
        res.status(400).json({message:"policy not found"})
        }

    } catch (error) {
        res.status(404).json({message:"delete policy failed"})
    }
}