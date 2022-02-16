const { type } = require('express/lib/response')
const mongoose= require('mongoose')

const ExpenseSchema= new mongoose.Schema({
    type:{type:String,required:true},
    date_of_expense:{type:Date,required:true},
    employee_id:{type:String,required:true},
    reimbursed:{type:Boolean,required:true},
    reimbursed_date:{type:Date}
},{timestamps:true})

const Expense= mongoose.model('expenses',ExpenseSchema)

module.exports=Expense