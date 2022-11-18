import AgentModel from "../model/AgentModel.js"




//get agent
export const getAgent = async(req,res) =>{
    res.send("hello how r you")
}


// create agent
export const createAgent = async(req,res)=>{

console.log(req.body);
const {agent} = req.body

//agent document already check
const existsAgent = await AgentModel.findOne({agent})

const newAgent = new AgentModel(req.body)

if(existsAgent){
    console.log("already exists");
  return  res.status(200).json({message:"already exists"})

}
const p = await newAgent.save()
  console.log("added successfull");

return  res.status(200).json({message:"added successfull",p})


}
