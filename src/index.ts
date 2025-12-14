import express,{Express,Request,Response} from "express";

const app:Express = express();

app.get('/',((req:Request,res:Response)=>{
    res.send("Its working");
}))

app.listen(3000,()=>{
    console.log("it's running on port 3000");
})