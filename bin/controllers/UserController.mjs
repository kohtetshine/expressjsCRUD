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

        if(!name){
            res.send("You Need to Add Name in request body")
        }
        if(!email){
            res.send("You Need to Add Email in request body")
        }
        if(!password){
            res.send("You Need to Add Password in request body")
        }

        var result = await UserModel.insertUser(name,email,password);

        if(result){
            res.send("New User is Added")
        }
        
    }

    static async updateUser(req,res){
        var id = req.params.id;
        var name = req.body.name;
        var email = req.body.email;
        var password = req.body.password;

        var result = await UserModel.updateUser(id,name,email,password);

        if(result){
            res.send("User is Updated")
        }

    }

    static async deleteUser(req,res){
        var id = req.params.id;
        var result = await UserModel.deleteUser(id);

        if(result){
            res.send("User is Deleted")
        }
    }
}