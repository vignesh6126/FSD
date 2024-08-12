const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const studentRouter =require('./routes/students')

const url = 'mongodb://localhost:27020,localhost:27021,localhost:27022/student?replicaSet=m101'
const app = express()
mongoose.connect(url)
const con = mongoose.connection

con.on('open',()=>
{
    console.log('connected...')
})

app.use(cors())
app.use(express.json())

app.use('/students',studentRouter)
app.listen(3003,()=>{
    console.log('Server started')
})