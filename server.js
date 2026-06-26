import express from "express"
import router from "./routes/currency.routes.js"
import dotenv from "dotenv";
import { logger } from "./middlewares/logger.middleware.js";
dotenv.config();
const app=express();

//middleware
app.use(logger)

app.get("/",(req,res)=>{
    res.send("Hello");
})
app.use("/api",router);

app.listen(3000,()=>{
    console.log("Server started");
})