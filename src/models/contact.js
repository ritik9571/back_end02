import mongoose from "mongoose";
const ContactSchema =new mongoose.Schema(
{  
  name :{type:String,
    required :true,
       unique:true
     },
    email :{type:String,
              required :true,
                 unique:true
               },
    message:{ type:String,
                required: true },
    
});
 export const ContactModel =mongoose.model("contact",ContactSchema);
 