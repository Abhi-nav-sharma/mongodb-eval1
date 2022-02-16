const Employee = require("../models/employee.model")

const getAllEmployees= async (req,res)=>{
    try{
        const employees= await Employee.find()
        if(!employees){
            return res.status(400).send('No employee found')
        }
        res.status(200).json(employees)
    }
    catch(err){
        return res.status(400).json({status:'failure',error:err.toString()})
    }
}

module.exports= getAllEmployees