import { resolve } from "path";
import mydb from '../bin/config/dbconnection.mjs'

export class UserModel {
    static async getallUser(id){
        return new Promise (resolve=>{
            if(!id){
                mydb.query("select * from users",[],(err,result)=>{
                    if(err){
                        console.log(err);
                    }
                    else{
                        resolve(result);
                    }
                })
            }else if(id){
                mydb.query("select * from users where id=?",[id],(err,result)=>{
                    if(err){
                        console.log(err);
                    }
                    else{
                        if(result.length>0){
                            resolve(result);
                        }else{
                            resolve(false);
                        }
                    }
                })
            }
        })
    }

    static async insertUser(name,email,password){
        return new Promise(resolve=>{
            mydb.query("INSERT INTO `users`(`name`, `email`,`password`) VALUES (?,?,?)" , [name,email,password],(err,result)=>{
                if(err){
                    console.log(err);
                }
                else{
                    resolve(result);
                }
            })
        })
    }

    static async updateUser(id,name,email,password){
        var userdata = await this.getallUser(id);
        var nameValue, emailValue, passwordValue;

        if (userdata){
            for (let userData of userdata) {
                nameValue = userData.name;
                emailValue = userData.email;
                passwordValue = userData.password;
            }
            name = name ? name : nameValue;
            email = email ? email : emailValue;
            password = password ? password : passwordValue;

            return new Promise(resolve=>{
                mydb.query("UPDATE `users` SET `name`=?,`email`=?,`password`=? WHERE `id`=?",[name,email,password,id],(err,result)=>{
                    if(err){
                        console.log(err);
                    }
                    else{
                        resolve(true);
                    }
                })
            })
        }
    }

    static async deleteUser(id){

        return new Promise(resolve=>{
            mydb.query("DELETE FROM `users` WHERE id=?" , [id],(err,result)=>{
                if(err){
                    resolve(false)
                }
                else{
                    resolve(true);
                }
            })
        })
    }

    static async deleteUserCheck(id){
        var result = await this.getallUser(id)
        return new Promise(resolve=>{
            resolve(result);
        })
    }
}