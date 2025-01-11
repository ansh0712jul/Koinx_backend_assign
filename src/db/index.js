import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import dotenv from "dotenv"


dotenv.config({
    path:"./.env"
    
})
// connect to database function
const connectDB = async () =>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_DB_URI}/${DB_NAME}`);
        console.log(`MongoDb connected to ${connectionInstance.connection.host}`)
    }catch(error){
        console.log("MongoDb connection error ",error);
        process.exit(1);
    }
}

export default connectDB