import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();   

const connectToMongoDB = async () => {
    try {
        console.log("Mongo URI:", process.env.MONGODB_URI); 
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("MongoDB connection error:", error.message);
    }
};

export default connectToMongoDB;
