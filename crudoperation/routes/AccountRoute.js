import express from 'express'
import { getAllAccount,getAccount,createAccount, updateAccount, deleteAccount } from '../controller/AccountController.js'

const router=express.Router()

// register new user
router.post('/register',createAccount)

//get all account
router.get("/accountlist",getAllAccount)

//get single account
router.get("/:id",getAccount)

// update user
router.put("/update/:id",updateAccount)

//delete user account
router.delete("/delete/:id",deleteAccount)


export default router