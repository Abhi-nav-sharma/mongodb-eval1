const express= require('express')
const { getAllExpensesByUserId, createAnExpense, getExpenseByDate, getExpenseByType } = require('../controllers/expense.controller')
const router= express.Router()

router.get('/user:user_id',getAllExpensesByUserId)

router.get('/dates',getExpenseByDate)

router.post('/',createAnExpense)

router.get('/type',getExpenseByType)

module.exports=router