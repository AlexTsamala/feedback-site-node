import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connection = () => {
    try {
        const connectionUrl = `${process.env.MONGO_PROTOCOL}://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}/${process.env.MONGO_DATABASE}`;
        mongoose.connect(connectionUrl)
    } catch (error) {
        console.log(error)
        return error
    }
}

export default connection