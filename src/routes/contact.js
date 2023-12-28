import  express from "express";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';
import { ContactModel } from "../models/contact.js";
const router = express.Router();


router.post('/',async(req,res)=>{
    const {name ,email, message}=req.body;
   const newUser=new ContactModel({name ,email,message});
   await newUser.save();
   res.json({message:"We got your message!"});
}); 

export{ router as contactRoute}