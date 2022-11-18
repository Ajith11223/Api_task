import express from 'express'
import csvtojson from 'csvtojson'
const router = express.Router()
import multer from 'multer'
import allDataModel from '../model/AllDataModel.js'
import AgentModel from '../model/AgentModel.js'
import userModel from '../model/UserModel.js'
import userAccountModel from '../model/UserAccountModel.js'
import lobModel from '../model/LobModel.js'
import carrierModel from '../model/CarrierModel.js'
import policyModel from '../model/PolicyModel.js'

const upload = multer();

// csv file upload

router.post('/', upload.single('uploadcsv'), async (req, res) => {


    const file = req.file
    
    // converted to json format
    const list = await csvtojson().fromString(req.file.buffer.toString())
    
     // collect all agent name using empty array
    let agents = [];

    // user details geting obejct
    let singleUser = {}

    //user's account
    let userAccount = {}
    
    // lob collection
      let lobDetails ={}

    //  Carrier details  
    let carrierDetails = {}

    // policy details
    let policyDetails ={}


    // response section
    let responseAgent;

    let responseUser;

    let responseAccount;

    let lobResponse;

    let responsePolicy;

    let carrierResponse;
   

    try {
    //adding all data to mongoDb alldata collection
        list.map(async(data) => {
            agents.push(data.agent)
            const allData = new allDataModel(data)
            const  completeData  = await allData.save()
            // console.log(data.agent);
        })
        //remove agent duplicate 
        let duplicate = new Set(agents)

        const allAgents = [...duplicate] 
        // filter agent name using distinct
        // const allAgent = await allDataModel.find().distinct("agent")


        // agent added agent collection in mongoDb
        allAgents.map(async (agen) => {
        
        // already added check    
            const existsAgent = await AgentModel.findOne({ agent:agen })

            const newAgent = new AgentModel({agent:agen})

            if (existsAgent) {
                console.log("already exists");
                
            }else{
                // agent save agent collection
                  responseAgent = await newAgent.save()
                  
            }
            
        })

        // find all Agents in mongoDb
        const agentCollection = await AgentModel.find()


       // add user details in user collection
       
       list.map(async(user,i)=>{
        //destructering user detail 
        const {firstname,email,gender,city,phone,
            address,state,zip,dob,agent,policy_number} = user

            // user covert to object
        singleUser.firstname = firstname
        singleUser.email=email
        singleUser.gender=gender
        singleUser.city=city
        singleUser.phone=phone
        singleUser.address=address
        singleUser.state=state
        singleUser.zip=zip
        singleUser.dob=dob
        singleUser.agent=agent
        singleUser.policy_number=policy_number   
       
                 
        // user added to collection in a mongodb
        const newUser = new userModel(singleUser)
        
        // save user in mongodb collection 
        responseUser = await newUser.save()
    
        

       })


         //User's Account collection
         list.map(async(account)=>{
            
            const {account_name,account_type,policy_number,company_name} = account
    
            userAccount.account_name=account_name
            userAccount.account_type=account_type
            userAccount.policy_number=policy_number
            userAccount.company_name= company_name
            
           
           
            // user account details adding mongodb
            const newAccount = new userAccountModel(userAccount)
             responseAccount = await newAccount.save()
            
           })

         // lob collection
         list.map(async(lob)=>{
            const {company_name,producer,category_name} = lob
             lobDetails.company_name = company_name
             lobDetails.producer = producer
             lobDetails.category_name = category_name

            // save lob details in mongodb
          const newLob = new lobModel(lobDetails)

             lobResponse = await newLob.save()

         })
           

         // Carrier details
         list.map(async(carrier)=>{
            const {policy_number} = carrier
            carrierDetails.policy_number =policy_number


            // add to mongodb
            const newCarrier = new carrierModel(carrierDetails)

             carrierResponse = await newCarrier.save()


         })


        // policy details
        list.map(async(policy)=>{
            const {policy_number,policy_mode,premium_amount,policy_type,
                company_name,category_name,policy_start_date,policy_end_date} = policy

                policyDetails.policy_number = policy_number
                policyDetails.policy_mode = policy_mode
                policyDetails.premium_amount =premium_amount
                policyDetails.policy_type = policy_type
                policyDetails.company_name =company_name
                policyDetails.category_name = category_name
                policyDetails.policy_start_date =policy_start_date
                policyDetails.policy_end_date =policy_end_date

                const newPolicy = new policyModel(policyDetails)
                 responsePolicy = await newPolicy.save()
                 
        })


       



        res.status(200).json({ message: "all data added successfully"})
    } catch (error) {
        res.status(400).json({ message: "all data added faild", error })

    }




})


export default router