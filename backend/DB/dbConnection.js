import mongoose from "mongoose"
import dotenv from "dotenv";

dotenv.config();



export const connectingToDatabase = (req, res, next) => {

  mongoose.connect(process.env.MONGODB_URL)

    .then(() => {
      console.log("Database Connected Sucessfully");
      next();
    })
    .catch((e) => {
      console.log("This error is thrown where we are doing the database connection", e);
      next();
    })

}


