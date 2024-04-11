import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import servicesRoute from "./routes/services.js";
import amenitiesRoute from "./routes/amenities.js";

const app = express();

dotenv.config();

const connect = async () => {

    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to mongoDB.");
    } catch (error) {
        throw error
    }

}

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected.");
})


// Middlewares

app.use((req, res, next) => {

    console.log("Hi from middleware.");
    next();

});

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/services", servicesRoute);
app.use("/api/amenities", amenitiesRoute);

// Error handling middleware
app.use((err, req, res, next) => {

    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong.";

    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    });

});

app.listen(8800, () => {
    connect();
    console.log("Connected to backend.");
})

