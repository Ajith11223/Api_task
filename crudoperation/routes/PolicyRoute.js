import express from 'express'
import { getAllPolicy, singlePolicy,createPolicy, updatePolicy, deletePolicy } from '../controller/PolicyController.js'

const router = express.Router()

// create policy

router.post('/',createPolicy)


//get all policies
router.get('/allpolicy',getAllPolicy)

// get single policy
router.get('/:id',singlePolicy)

//update policy 
router.put("/update/:id",updatePolicy)

//delete policy 
router.delete('/delete/:id',deletePolicy)



export default router