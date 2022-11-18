import express from 'express'
import { getData,getUser,registerUser,updateUser,deleteUser } from '../controller/userController.js'


const router = express.Router()


//create user
router.post("/",registerUser)
// get all user
router.get("/getdata",getData)
// get single user
router.get('/:id',getUser)
//update user
router.post("/updateuser/:id",updateUser)
//delete user
router.delete("/delete/:id",deleteUser)
 




export default router