import mongoose from "mongoose";

export const Connection = async(username,password) =>{
    const URL=`mongodb://${username}:${password}@ac-5xzd2ca-shard-00-00.np8zxkp.mongodb.net:27017,ac-5xzd2ca-shard-00-01.np8zxkp.mongodb.net:27017,ac-5xzd2ca-shard-00-02.np8zxkp.mongodb.net:27017/?ssl=true&replicaSet=atlas-s1nblf-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL,{useUnifiedTopology: true,useNewUrlParser:true});
        console.log("Database connected sucessfully");
    }catch(error){
        console.log("error while connecting with the database",error.message);
    }
}
export default Connection;