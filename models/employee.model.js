const mongoose= require('mongoose')

const EmployeeSchema= new mongoose.Schema({
    employee_id:{type:String,required:true,unique:true},
    name:{type:String,required:true},
    gender:{type:String,required:true}
})

const Employee= mongoose.model('employees',EmployeeSchema)

module.exports=Employee