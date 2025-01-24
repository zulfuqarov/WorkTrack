import mongoose from "mongoose";

const connectMongoDb = async () => {
    try {
        await mongoose.connect(process.env.CONNECTING_MONGO_DB);
        console.log("Successfully connected to the database");
    } catch (error) {
        console.error(error);
        console.error("Failed to connect to the database");
    }
};

export { connectMongoDb };