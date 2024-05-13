
// import mongoose from "mongoose";
// import { DB_NAME } from "../constants.js";


// const connectDB = async () => {
//     try {
//         const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
//     } catch (error) {
//         console.log("MONGODB connection error ", error);
//         process.exit(1)
//     }
// }

// export default connectDB


import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const MONGODB_URI="mongodb+srv://kushwahamukesh41866:05TlIU0MQU9UDiZH@cluster0.0ffpary.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"


const connectDB = async () => {
    try {
        // const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        const connectionInstance = await mongoose.connect(`${MONGODB_URI}/${DB_NAME}`)
       
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
        process.exit(1)
    }
}

export default connectDB