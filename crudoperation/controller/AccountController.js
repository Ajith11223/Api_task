import userAccountModel from "../model/UserAccountModel.js"


// register user account

export const createAccount = async(req,res) =>{

    console.log(req.body);
    const newAccount = new userAccountModel(req.body)
    try {
        const account = await newAccount.save()
        res.status(200).json({message:"user account added successfull",account})
    } catch (error) {
        res.status(404).json({message:"user register failed"})
    }
}



//get all user accounts
export const getAllAccount = async(req,res)=>{
    try {
    const allAccounts = await userAccountModel.find() 
    res.status(200).json({message:"find account success",allAccounts})
    } catch (error) {
    res.status(404).json({message:"User account get failed",error})
        
    }
}

// get single user account 

export const getAccount = async(req,res) => {
    const accountId = req.params.id

    try {
        const account = await userAccountModel.findById(accountId)
        res.status(200).json({message:"User Account get successfully",account})
    } catch (error) {
        res.status(404).json({message:"user get failed",error})

    }

}


// update user account

export const updateAccount = async(req,res) =>{
    const accountId = req.params.id

    try {
        const account = await userAccountModel.findByIdAndUpdate(accountId,req.body,{new:true})
        res.status(200).json({message:"user account updated successfull",account})
    } catch (error) {
        res.status(404).json({message:"user account update failed",error})
    }
}


// delete user account 

export const deleteAccount = async(req,res) =>{
    const accountId = req.params.id

    try {
        const account = await userAccountModel.findByIdAndDelete(accountId)

        res.status(200).json({message:"user account deleted successfull",account})
        
    } catch (error) {
        res.status(404).json({message:"user account delete failed"})
    }
}