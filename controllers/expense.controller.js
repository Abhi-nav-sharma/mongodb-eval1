const req = require("express/lib/request")
const Expense = require("../models/expense.model")

const getAllExpensesByUserId= async (req,res)=>{
    try{
        const per_page= req.query.per_page || 2
        const page= req.query.page || 1
        const skip= page<0?0:(page-1)*per_page
        const expense= await Expense.find({user_id:req.params.user_id}).skip(skip).limit(per_page)
        if(!expense){
            return res.status(400).send('No tweets found for this user')
        }
        res.status(200).json(expense)
    }
    catch(err){
        return res.status(400).json({status:'failure',error:err.toString()})
    }
}

const createAnExpense= async(req,res)=>{
    try{
        if(req.body.reimbursed_date){
            const expense= await Expense.create({
                type:req.body.type,
                date_of_expense:new Date(req.body.date_of_expense),
                employee_id:req.body.employee_id,
                reimbursed:req.body.reimbursed,
                reimbursed_date: new Date(req.body.reimbursed_date)
            })
            console.log(expense)
        if(!expense){
            return res.status(400).json({msg:'Expense not created'})
        }
        return res.status(200).json(expense)
        }
        else{
            const expense= await Expense.create({
                type:req.body.type,
                date_of_expense:new Date(req.body.date_of_expense),
                employee_id:req.body.employee_id,
                reimbursed:req.body.reimbursed
            })
        if(!expense){
            return res.status(400).json({msg:'Expense not created'})
        }
        return res.status(200).json(expense)
        }
    }
    catch(err){
        return res.status(400).json({status:'failure',error:err.toString()})
    }
}

const getExpenseByDate =async (req,res)=>{
    try{
        const per_page= req.query.per_page || 2
        const page= req.query.page || 1
        const skip= page<0?0:(page-1)*per_page
        const expense= await Expense.find({$and:[{date_of_expense:{$gte:new Date(req.query.from)}},{date_of_expense:{$lte:new Date(req.query.to)}}]}).sort({date_of_expense:-1}).skip(skip).limit(per_page)
        if(!expense){
            return res.status(400).json({msg:'No expenses found'})
        }
        return res.status(200).json(expense)
    }
    catch(err){
        return res.status(400).json({status:'failure',error:err.toString()})
    }
}

const getExpenseByType = async (req,res)=>{
    try{
        const expense= await Expense.aggregate([{$group:{_id:'$type',count:{$sum:1}}},{$project : { Type_of_expenses : "$_id", "_id" : 0, No_of_Expenses : "$count" } }, {$sort:{No_of_Expenses: -1}}])
        if(!expense){
            return res.status(400).json({msg:'Something went wrong'})
        }
        return res.status(200).json(expense)
    }
    catch(err){
        return res.status(400).json({status:'failure',error:err.toString()})
    }
}

const getAverageTime = async (req,res)=>{
    try{

    }
    catch(err){
        
    }
}

module.exports= {
    getAllExpensesByUserId,
    createAnExpense,
    getExpenseByDate,
    getExpenseByType
}