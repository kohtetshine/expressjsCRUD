import { validationResult } from "express-validator";
import { UserModel } from "../../models/UserModel.mjs";


export class UserController{
    static async getallUser(req,res){

        var id = req.params.id;
        if(id){
            const checkresult = validationResult(req);

            if(!checkresult.isEmpty()){
                return res.status(400).send({errors:checkresult.array()})
            }
        }
        var result = await UserModel.getallUser(id);
        if(result){
            return res.send(result);
        }else{
            return res.status(400).send({errors:"Can Find the User with this ID"})
        }
    }
    static async insertUser(req,res){
        const checkresult = validationResult(req);

        if(!checkresult.isEmpty()){
            return res.status(400).send({errors:checkresult.array()})
        }

        var name = req.body.name;
        var email = req.body.email;
        var password = req.body.password;

        var result = await UserModel.insertUser(name,email,password);

        if(result){
            return res.send("New User is Added")
        }
        
    }

    static async updateUser(req,res){
        var id = req.params.id;
        var name = req.body.name;
        var email = req.body.email;
        var password = req.body.password;

        var result = await UserModel.updateUser(id,name,email,password);

        if(result){
            return res.send("User is Updated")
        }

    }

    static async deleteUser(req,res){
        var id = req.params.id;

        var checkresult = await UserModel.getallUser(id);
        if (checkresult){
            var result = await UserModel.deleteUser(id);
            if(result){
                return res.send("Delete Successfully")
            }else{
                return res.send("Delete Failed")
            }
        }else{
            return res.status(400).send({errors:"Can Find the User with this ID"})
        }
    }
}