import express from "express";
import userRouter from '../routes/users.mjs'
import mydb from '../bin/config/dbconnection.mjs'

const app = express();


app.use(express.json())
app.use(userRouter)


const PORT = process.env.PORT || 3000

app.get('/',(req,res)=>{
    res.send('HELLO')
})

app.listen(3000,()=>{
    console.log(`Application is Start at ${PORT}`);
})