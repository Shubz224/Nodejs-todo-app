import express from "express";
import router from "./routes/user.js";
import taskRouter from "./routes/tasks.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import cors  from "cors"


export  const app = express();


config({
  path:"./data/config.env",
});

//using middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors(
{
  origin : [process.env.FRONTEND_URL],
  method : ["GET","POST","DELETE","PUT"],
  Credential :true ,
}
));
//using routes 
app.use("/api/v1/users",router);
app.use("/api/v1/task",taskRouter);

app.get("/", (req, res) => {
  res.send("Working");
});

//used error middleware here
app.use(errorMiddleware);