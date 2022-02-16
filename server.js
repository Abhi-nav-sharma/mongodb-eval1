const express= require('express')
const connect  = require('./config/db')
const expenseRouter= require('./routes/expense.route')
const app = express()
app.use(express.json())
app.use('/expenses',expenseRouter)

const start= async ()=>{
    await connect()
    console.log('Connected to mongodb')
    app.listen(1234,(req,res)=>{
        console.log('Listening on port 1234')
    })
}

module.exports=start