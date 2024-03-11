import { UserModel } from "../../models/UserModel.mjs";


export class UserController{
    static async getallUser(req,res){
        var id = req.params.id;
        var result = await UserModel.getallUser(id);

        res.send(result);
    }
    static async insertUser(req,res){
        var name = req.body.name;
        var email = req.body.email;
        var password = req.body.password;

        var result = await UserModel.insertUser(name,email,password);

        if(result){
            res.send("New User is Added")
        }
        
    }
}