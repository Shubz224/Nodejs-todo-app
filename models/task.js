import mongoose from "mongoose";

//after connection creating mongoose schema


const schema = new mongoose.Schema({
    title: {
        type :String,
        required: true ,
    },
    description: {
        type : String,
        required: true ,
    },
    iscompleted:{
        type : Boolean,
        default :false,
    },
     user:{
      type: mongoose.Schema.Types.ObjectId,
      ref : "user",
      required :true ,
     },
    createdAt :{ 
          type :Date,
          default :Date.now,
    },
});
   //creating user with these schemas
   
   export const Task = mongoose.model("Task",schema);
   
   