import { Router } from "express";

const router = Router();

router.get("/api/users",(req,res)=>{
    res.send([
        {"id":1,"Name":"Htet Aung Shine","age":23},
        {"id":2,"Name":"Aries","age":23},
    ]
    );

})

export default router