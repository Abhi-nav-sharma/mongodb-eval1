const express= require('express')
const { getAllExpensesByUserId, createAnExpense, getExpenseByDate, getExpenseByType, getAverageTime } = require('../controllers/expense.controller')
const router= express.Router()

router.get('/employee/:employee_id',getAllExpensesByUserId)

router.get('/dates',getExpenseByDate)

router.post('/',createAnExpense)

router.get('/type',getExpenseByType)

router.get('/average',getAverageTime)

module.exports=router