import userModel from "../model/UserModel.js"

//register user

export const registerUser = async (req, res) => {
    const { email } = req.body

    const oldUser = await userModel.findOne({ email })


    if (oldUser) {
        res.status(200).json({ message: "user allready registred" })
    } else {
        const newUser = new userModel(req.body)
        try {
            const user = await newUser.save()
            res.status(200).json({ message: "user added successfull", user })

        } catch (error) {
            res.status(404).json({ message: "user register failled", error })

        }
    }


}


// get all user
export const getData = async (req, res) => {

    try {
        const userData = await userModel.find()
        res.status(200).json({ message: "all user data get successful", userData })
    } catch (error) {
        res.status(404).json({ message: "user data not available", error })

    }


}

//get single user 

export const getUser = async (req, res) => {
    const id = req.params.id
    try {
        const userData = await userModel.findById(id)
        res.status(200).json({ message: " user data get successful", userData })

    } catch (error) {
        res.status(404).json({ message: "user data not available", error })

    }
}


// update user
export const updateUser = async (req, res) => {
    console.log(req.body);
    const id = req.params.id
    console.log(id);
    // const { } = req.body
    try {
        const userData =await userModel.findByIdAndUpdate(id,req.body,{new:true})
        res.status(200).json({ message: "user data updated successfull", userData })
    } catch (error) {
        res.status(404).json({ message: "user data not updated", error })

    }
}

//delete user

export  const deleteUser=async(req,res)=>{
   const id=req.params.id
   try {
   const deleteUser= await userModel.findByIdAndDelete(id)
   res.status(200).json({ message: "user data deleted successfull", deleteUser })

   } catch (error) {
    res.status(404).json({ message: "user data delete failed", error })
    
   }
}