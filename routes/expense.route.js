const express= require('express')
const { getAllExpensesByUserId, createAnExpense } = require('../controllers/expense.controller')
const router= express.Router()

router.get('/:user_id',getAllExpensesByUserId)

router.post('/',createAnExpense)

module.exports=router