import express from "express";
import userRouter from '../routes/users.mjs'
import mydb from '../bin/config/dbconnection.mjs'
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.json())
app.use(userRouter)

app.set('view engine', 'ejs');
app.set('views', join(__dirname, 'views'));



const PORT = process.env.PORT || 3000

app.get('/',(req,res)=>{
    res.render('index')
})

app.listen(3000,()=>{
    console.log(`Application is Start at ${PORT}`);
})