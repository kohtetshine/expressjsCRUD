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
                            resolve("There is no user for current ID");
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
}