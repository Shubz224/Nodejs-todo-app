import mongoose from "mongoose";



const schema = new mongoose.Schema({
    name: String,
    email: {
        type : String,
        unique :true , 
        required: true ,
    },
    password:{
        type : String,
        select :false,
        required: true ,
    },

    createdAt :{ 
          type :Date,
          default :Date.now,
          required: true ,
    },
});
   //creating user with these schemas
   
   export const User = mongoose.model("User",schema);
   
   