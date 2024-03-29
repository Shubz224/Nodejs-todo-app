import ErrorHandler from "../middlewares/error.js";
import { Task } from "../models/task.js";

export const  newtask = async  (req,res,next )=>{
   
    try{const {title ,description} = req.body;

await Task.create({
    title,
    description,
    user : req.user,
});

res.status(201).json({
    success:true,
    message:"Task added successfully ",
});} catch(error){
    next(error);
}

};


export const getMyTask = async (req,res,next)=>{
    
   try {
     const userid =  req.user._id;

      const tasks = await Task.find({user:userid});

      res.status(200).json({
        success:true,
        tasks,
      });
    } catch(error){
       next(error);
    }
     
} ;

//////Update task

export const UpdateTask = async (req,res,next)=>{
   try{
    const task  = await Task.findById(req.params.id);

if(!task) return next (new ErrorHandler("Task not found" , 404));
 
task.iscompleted = !task.iscompleted;

await task.updateOne();

    res.status(200).json({
      success:true,
      message:"Task updated",
      
    })}
    catch(error){
        next(error);
    };


};


//delete task

export const DeleteMyTask = async (req,res,next)=>{

    try{    
        const task  = await Task.findById(req.params.id);

if (!task) return  next (new ErrorHandler("Task not found " ,404));

    await task.deleteOne();

    res.status(200).json({
      message : "Task Deleted ! ",
      success : true,
    });}
    catch(error){
        next(error);
    }

};