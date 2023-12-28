import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv"
import {userRouter} from "./src/routes/users.js"
import { recipeRouter } from "./src/routes/recipees.js";
import { contactRoute } from "./src/routes/contact.js";
dotenv.config();
const app=express();
app.use(express.json());
app.use(cors());
app.get('/', function (req, res) {
    res.send('Api is working!');
 })
app.use("/auth",userRouter);
app.use("/recipes",recipeRouter);
app.use("/contact",contactRoute);
mongoose.connect(process.env.MongoURL) 
 
app.listen(3001,()=>{console.log("started");});
   