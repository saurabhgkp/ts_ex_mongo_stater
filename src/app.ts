import express, { Application, Request, Response } from 'express'
import cookieParser from 'cookie-parser';
import compression from 'compression';
import mongoose from "mongoose";
import cors from 'cors';
require("dotenv").config();


const app: Application = express()
const PORT: any = process.env["PORT"]
const CONNECTION_URL: any = process.env["CONNECTION_URL"]



app.use(cors({
    credentials: true,
}));
app.use(compression());
app.use(cookieParser());



var indexRoute = require("./routes/index")
var userRoute = require("./routes/user")


app.use("/", indexRoute)
app.use("/user", userRoute)


mongoose
    .connect(CONNECTION_URL)
    .then(() =>
        app.listen(PORT, () =>
            console.log(`Server Running on Port: http://localhost:${PORT}`)
        )
    )
    .catch((error: any) => console.log(`${error} did not connect`));