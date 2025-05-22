import mongoose from "mongoose";

type ConnectionObject = {
    isConnected?: number
}
//the question mark here imploes that the data type is optional so we are able to make it empty

const connection: ConnectionObject = {}

async function dbConnect(): Promise<void>{
    if(connection.isConnected){
        console.log("Already Connected to database");
        return
    }
    
    try {
        const db=await mongoose.connect(process.env.MONGODB_URI || '')
        connection.isConnected=db.connections[0].readyState

        console.log(db);
        console.log("DB Connected sucessfully");

    } catch (error) {
        console.log("Db not connected",error);
        process.exit(1);
    }
}

export default dbConnect;